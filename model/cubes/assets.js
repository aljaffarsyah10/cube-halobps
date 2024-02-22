cube(`assets`, {
  sql_table: `\`simpatipti_db\`.assets`,

  data_source: `CUBEJS_DB_NAME2`,

  joins: {},

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true,
    },
    // service: {
    //   sql: `service`,
    //   type: `string`,
    // },
    name: {
      sql: `name`,
      type: `string`,
    },
    bmn: {
      sql: `bmn`,
      type: `string`,
    },
  },

  measures: {
    count: {
      type: `count`,
    },
  },

  pre_aggregations: {
    users_rollup: {
      dimensions: [CUBE.bmn, CUBE.name],
    },
  },
  bmn_rollup: {
    // dimensions: [CUBE.bmn, CUBE.content],
    dimensions: [`${CUBE}.bmn, ${CUBE}.content`],
  },
});
