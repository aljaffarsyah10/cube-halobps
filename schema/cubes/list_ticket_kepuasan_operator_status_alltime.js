cube(`list_ticket_kepuasan_operator_status_alltime`, {
  sql_table: `\`cube-halobps\`.list_ticket_kepuasan_operator_status_alltime`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    unitkerja: {
      sql: `unitkerja`,
      type: `string`
    },
    
    kategori: {
      sql: `kategori`,
      type: `string`
    },
    
    judul: {
      sql: `judul`,
      type: `string`
    },
    
    deskripsi: {
      sql: `deskripsi`,
      type: `string`
    },
    
    pembuat: {
      sql: `pembuat`,
      type: `string`
    },
    
    operator: {
      sql: `operator`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    sesuai_sla: {
      sql: `sesuai_SLA`,
      type: `string`
    },
    
    tanggaldibuat: {
      sql: `tanggaldibuat`,
      type: `time`
    },
    
    last_login_operator: {
      sql: `last_login_operator`,
      type: `time`
    },
    
    batas_waktu_penyelesaian: {
      sql: `batas_waktu_penyelesaian`,
      type: `time`
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
