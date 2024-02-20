cube(`kepuasan_bulanini`, {
  sql_table: `\`cube-halobps\`.kepuasan_bulanini`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    unitkerja: {
      sql: `unitkerja`,
      type: `string`
    },
    
    kategori: {
      sql: `kategori`,
      type: `string`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
