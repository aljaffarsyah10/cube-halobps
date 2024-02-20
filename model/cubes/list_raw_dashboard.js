cube(`list_raw_dashboard`, {
  sql_table: `\`cube-halobps\`.list_raw_dashboard`,
  
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
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    nama_pembuat: {
      sql: `nama_pembuat`,
      type: `string`
    },
    
    nip: {
      sql: `nip`,
      type: `string`
    },
    
    no_organisasi: {
      sql: `no_organisasi`,
      type: `string`
    },
    
    unitkerjapembuat: {
      sql: `unitkerjapembuat`,
      type: `string`
    },
    
    jabatan: {
      sql: `jabatan`,
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
