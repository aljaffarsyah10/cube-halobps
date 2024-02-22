cube(`glpi_events`, {
  sql_table: `\`cube-halobps\`.glpi_events`,

  data_source: `default`,

  joins: {},

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true,
    },
    service: {
      sql: `service`,
      type: `string`,
    },
  },

  measures: {
    count: {
      type: `count`,
    },

    TotalLogin: {
      sql: `CASE WHEN service = 'login' THEN 1 ELSE 0 END`,
      type: `count`,
      title: "Total Logins",
    },

    inquest_duration: {
      sql: `inquest_duration`,
      type: `sum`,
    },
  },

  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
});
