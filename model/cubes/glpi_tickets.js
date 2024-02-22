cube(`glpi_tickets`, {
  sql_table: `\`cube-halobps\`.glpi_tickets`,
  data_source: `default`,
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true,
    },
    name: {
      sql: `name`,
      type: `string`,
    },
    status: {
      sql: `status`,
      type: `number`,
    },
    content: {
      sql: `content`,
      type: `string`,
    },
    nup_bmn: {
      sql: `nup_bmn`,
      type: `string`,
    },
    nup_bmn_value: {
      sql: `nup_bmn_value`,
      type: `string`,
    },
    // nup_bmn_value2: {
    //   sql: `COALESCE(nup_bmn_value, 'Unknown')`,
    //   type: `string`,
    // },
    urgency: {
      sql: `urgency`,
      type: `number`,
    },
    entities_id: {
      sql: `entities_id`,
      type: `number`,
      // case: {
      //   when: [
      //     {
      //       sql: `${CUBE}.entities_id = 0`,
      //       label: `Layanan BPS`,
      //     },
      //     {
      //       sql: `${CUBE}.entities_id = 1`,
      //       label: `Layanan TI Pusat`,
      //     },
      //     {
      //       sql: `${CUBE}.entities_id = 2`,
      //       label: `Layanan BPS Provinsi Riau`,
      //     },
      //   ],
      //   else: {
      //     label: `Unknown`,
      //   },
      // },
    },
    type: {
      // sql: `type`,
      type: `number`,
      case: {
        when: [
          {
            sql: `${CUBE}.type = 1`,
            label: `Gangguan`,
          },
          {
            sql: `${CUBE}.type = 2`,
            label: `Permintaan`,
          },
        ],
        else: {
          label: `Unknown`,
        },
      },
    },
    date: {
      sql: `DATE_FORMAT(${CUBE}.date, '%Y-%m')`,
      type: `time`,
    },
    closedate: {
      sql: `closedate`,
      type: `time`,
    },
    solvedate: {
      sql: `solvedate`,
      type: `time`,
    },
    date_mod: {
      sql: `date_mod`,
      type: `time`,
    },
    time_to_resolve: {
      sql: `time_to_resolve`,
      type: `time`,
    },
    time_to_own: {
      sql: `time_to_own`,
      type: `time`,
    },
    begin_waiting_date: {
      sql: `begin_waiting_date`,
      type: `time`,
    },
    ola_ttr_begin_date: {
      sql: `ola_ttr_begin_date`,
      type: `time`,
    },
    internal_time_to_resolve: {
      sql: `internal_time_to_resolve`,
      type: `time`,
    },
    internal_time_to_own: {
      sql: `internal_time_to_own`,
      type: `time`,
    },
    date_creation: {
      sql: `date_creation`,
      type: `time`,
    },
  },
  measures: {
    count: {
      type: `count`,
    },
    TotalTiketAssign: {
      sql: `CASE WHEN status = 1 THEN 1 ELSE 0 END`,
      type: `count`,
      title: "Total Tiket Assign",
    },
    TotalTicketLayananBPS: {
      sql: `CASE WHEN entities_id = 1 THEN 1 ELSE 0 END`,
      type: `count`,
      title: "Total Tiket Layanan BPS",
    },
    TotalTicketGangguan: {
      sql: `CASE WHEN type = 1 THEN 1 ELSE 0 END`,
      type: `count`,
      title: "Total Tiket Gangguan",
    },
    TotalTicketStatusNew: {
      sql: `CASE WHEN status = 1 THEN 1 ELSE 0 END`,
      type: `count`,
      title: "Total Tiket Status New",
    },
    TotalTicketUrgencySedang: {
      sql: `CASE WHEN urgency = 3 THEN 1 ELSE 0 END`,
      type: `count`,
      title: "Total Tiket Urgency Sedang",
    },
    sla_waiting_duration: {
      sql: `sla_waiting_duration`,
      type: `sum`,
    },
    ola_waiting_duration: {
      sql: `ola_waiting_duration`,
      type: `sum`,
    },
    waiting_duration: {
      sql: `waiting_duration`,
      type: `sum`,
    },
  },
  pre_aggregations: {
    orders_rollup: {
      // measures: [`${CUBE}.count`],
      // dimensions: [`${CUBE}.nup_bmn_value, ${CUBE}.status`],
      measures: [CUBE.count],
      dimensions: [CUBE.nup_bmn_value, CUBE.status],
      // time_dimension: CUBE.date,
      // granularity: `day`,
    },
    // Here we add a new pre-aggregation of type `rollup_join`
    orders_with_users_rollup: {
      type: `rollup_join`,
      measures: [CUBE.count],
      // dimensions: [assets.name],
      // measures: [`${CUBE}.count`],
      dimensions: [`${assets.name}`],
      rollups: [assets.bmn_rollup, CUBE.orders_rollup],
      // rollups: [`${assets}.bmn_rollup, ${CUBE}.orders_rollup`],
    },
  },
  joins: {
    glpi_entities: {
      relationship: `hasOne`,
      sql: `${CUBE}.entities_id = ${glpi_entities.id}`,
    },
    // glpi_assets: {
    //   relationship: `hasOne`,
    //   sql: `${CUBE}.nup_bmn_value = ${glpi_assets.bmn}`,
    // },
    // assets: {
    //   relationship: `hasOne`,
    //   // sql: `${CUBE}.nup_bmn_value = ${assets.bmn}`,
    //   sql: `${CUBE}.nup_bmn_value = ${assets.bmn}`,
    // },
    assets: {
      relationship: `hasOne`,
      sql: `${CUBE}.nup_bmn_value = ${assets}.bmn`, // Make sure `bmn` is a defined dimension in the `assets` cube
    },
  },
});
