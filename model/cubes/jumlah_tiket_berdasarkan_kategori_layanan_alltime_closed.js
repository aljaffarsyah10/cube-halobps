cube(`jumlah_tiket_berdasarkan_kategori_layanan_alltime_closed`, {
  sql_table: `\`cube-halobps\`.jumlah_tiket_berdasarkan_kategori_layanan_alltime_closed`,
  
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
    },
    
    jenistiket: {
      sql: `jenistiket`,
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
