cube(`glpi_users`, {
  sql_table: `\`cube-halobps\`.glpi_users`,
  
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
    
    password: {
      sql: `password`,
      type: `string`
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    phone2: {
      sql: `phone2`,
      type: `string`
    },
    
    mobile: {
      sql: `mobile`,
      type: `string`
    },
    
    realname: {
      sql: `realname`,
      type: `string`
    },
    
    firstname: {
      sql: `firstname`,
      type: `string`
    },
    
    language: {
      sql: `language`,
      type: `string`
    },
    
    comment: {
      sql: `comment`,
      type: `string`
    },
    
    csv_delimiter: {
      sql: `csv_delimiter`,
      type: `string`
    },
    
    priority_1: {
      sql: `priority_1`,
      type: `string`
    },
    
    priority_2: {
      sql: `priority_2`,
      type: `string`
    },
    
    priority_3: {
      sql: `priority_3`,
      type: `string`
    },
    
    priority_4: {
      sql: `priority_4`,
      type: `string`
    },
    
    priority_5: {
      sql: `priority_5`,
      type: `string`
    },
    
    priority_6: {
      sql: `priority_6`,
      type: `string`
    },
    
    password_forget_token: {
      sql: `password_forget_token`,
      type: `string`
    },
    
    user_dn: {
      sql: `user_dn`,
      type: `string`
    },
    
    registration_number: {
      sql: `registration_number`,
      type: `string`
    },
    
    personal_token: {
      sql: `personal_token`,
      type: `string`
    },
    
    api_token: {
      sql: `api_token`,
      type: `string`
    },
    
    cookie_token: {
      sql: `cookie_token`,
      type: `string`
    },
    
    duedateok_color: {
      sql: `duedateok_color`,
      type: `string`
    },
    
    duedatewarning_color: {
      sql: `duedatewarning_color`,
      type: `string`
    },
    
    duedatecritical_color: {
      sql: `duedatecritical_color`,
      type: `string`
    },
    
    duedatewarning_unit: {
      sql: `duedatewarning_unit`,
      type: `string`
    },
    
    duedatecritical_unit: {
      sql: `duedatecritical_unit`,
      type: `string`
    },
    
    display_options: {
      sql: `display_options`,
      type: `string`
    },
    
    pdffont: {
      sql: `pdffont`,
      type: `string`
    },
    
    picture: {
      sql: `picture`,
      type: `string`
    },
    
    privatebookmarkorder: {
      sql: `privatebookmarkorder`,
      type: `string`
    },
    
    palette: {
      sql: `palette`,
      type: `string`
    },
    
    page_layout: {
      sql: `page_layout`,
      type: `string`
    },
    
    savedsearches_pinned: {
      sql: `savedsearches_pinned`,
      type: `string`
    },
    
    timeline_order: {
      sql: `timeline_order`,
      type: `string`
    },
    
    itil_layout: {
      sql: `itil_layout`,
      type: `string`
    },
    
    richtext_layout: {
      sql: `richtext_layout`,
      type: `string`
    },
    
    plannings: {
      sql: `plannings`,
      type: `string`
    },
    
    sync_field: {
      sql: `sync_field`,
      type: `string`
    },
    
    timezone: {
      sql: `timezone`,
      type: `string`
    },
    
    default_dashboard_central: {
      sql: `default_dashboard_central`,
      type: `string`
    },
    
    default_dashboard_assets: {
      sql: `default_dashboard_assets`,
      type: `string`
    },
    
    default_dashboard_helpdesk: {
      sql: `default_dashboard_helpdesk`,
      type: `string`
    },
    
    default_dashboard_mini_ticket: {
      sql: `default_dashboard_mini_ticket`,
      type: `string`
    },
    
    nickname: {
      sql: `nickname`,
      type: `string`
    },
    
    password_last_update: {
      sql: `password_last_update`,
      type: `time`
    },
    
    last_login: {
      sql: `last_login`,
      type: `time`
    },
    
    date_mod: {
      sql: `date_mod`,
      type: `time`
    },
    
    date_sync: {
      sql: `date_sync`,
      type: `time`
    },
    
    password_forget_token_date: {
      sql: `password_forget_token_date`,
      type: `time`
    },
    
    personal_token_date: {
      sql: `personal_token_date`,
      type: `time`
    },
    
    api_token_date: {
      sql: `api_token_date`,
      type: `time`
    },
    
    cookie_token_date: {
      sql: `cookie_token_date`,
      type: `time`
    },
    
    begin_date: {
      sql: `begin_date`,
      type: `time`
    },
    
    end_date: {
      sql: `end_date`,
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
