cube(`assets`, {
  sql_table: `\`simpatipti_db\`.assets`,

  data_source: `assets`,
  // data_source: `CUBEJS_DB_NAME2`,

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
      // primary_key: true,
    },
    asset_tag: {
      sql: `asset_tag`,
      type: `string`,
    },
  },

  measures: {
    count: {
      type: `count`,
    },
  },

  pre_aggregations: {
    // bmn_rollup: {
    //   // dimensions: [CUBE.bmn, CUBE.name],
    //   // dimensions: [`${CUBE}.bmn`, `${CUBE}.name`],
    //   dimensions: [`${CUBE.bmn}`, `${CUBE.name}`],
    // },

    assetsRollup: {
      type: `rollup`,
      dimensions: [`${CUBE.bmn}`, `${CUBE.asset_tag}`, `${CUBE.name}`],
      // measures: [`${CUBE.count}`],
      indexes: { category_index: { columns: [`${CUBE.bmn}`] } },
    },
  },
});
