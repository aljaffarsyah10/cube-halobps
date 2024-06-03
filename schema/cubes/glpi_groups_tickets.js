cube(`glpi_groups_tickets`, {
  sql_table: `\`cube-halobps\`.glpi_groups_tickets`,

  data_source: `default`,

  joins: {
    glpi_groups: {
      relationship: `hasOne`,
      sql: `${CUBE}.groups_id = ${glpi_groups.id}`,
    },
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true,
    },
    groups_id: {
      sql: `groups_id`,
      type: `number`,
    },
  },

  measures: {
    count: {
      type: `count`,
    },
    TotalTicketGroupSIS: {
      sql: `CASE WHEN groups_id = 1 THEN 1 ELSE 0 END`,
      type: `count`,
      title: "Total Tiket Group SIS",
    },
  },

  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
});
