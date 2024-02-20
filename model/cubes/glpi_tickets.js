cube(`glpi_tickets`, {
  sql_table: `\`cube-halobps\`.glpi_tickets`,

  data_source: `default`,

  joins: {
    glpi_entities: {
      relationship: `one_to_many`,
      sql: `${CUBE}.entities_id = ${glpi_entities.id}`,
    },
  },

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

    urgency: {
      sql: `urgency`,
      type: `number`,
    },
    entities_id: {
      // sql: `entities_id`,
      type: `number`,
      case: {
        when: [
          { sql: `${CUBE}.entities_id = 0`, label: `Layanan BPS` },
          { sql: `${CUBE}.entities_id = 1`, label: `Layanan TI Pusat` },
          {
            sql: `${CUBE}.entities_id = 2`,
            label: `Layanan BPS Provinsi Riau`,
          },
        ],
        else: { label: `Unknown` },
      },
    },
    type: {
      // sql: `type`,
      type: `number`,
      case: {
        when: [
          { sql: `${CUBE}.type = 1`, label: `Gangguan` },
          { sql: `${CUBE}.type = 2`, label: `Permintaan` },
        ],
        else: { label: `Unknown` },
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
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
});
