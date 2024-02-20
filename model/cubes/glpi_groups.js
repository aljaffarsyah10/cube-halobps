cube(`glpi_groups`, {
  sql_table: `\`cube-halobps\`.glpi_groups`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    comment: {
      sql: `comment`,
      type: `string`
    },
    
    ldap_field: {
      sql: `ldap_field`,
      type: `string`
    },
    
    ldap_value: {
      sql: `ldap_value`,
      type: `string`
    },
    
    ldap_group_dn: {
      sql: `ldap_group_dn`,
      type: `string`
    },
    
    completename: {
      sql: `completename`,
      type: `string`
    },
    
    ancestors_cache: {
      sql: `ancestors_cache`,
      type: `string`
    },
    
    sons_cache: {
      sql: `sons_cache`,
      type: `string`
    },
    
    date_mod: {
      sql: `date_mod`,
      type: `time`
    },
    
    date_creation: {
      sql: `date_creation`,
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
