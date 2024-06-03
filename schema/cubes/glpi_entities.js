cube(`glpi_entities`, {
  sql_table: `\`cube-halobps\`.glpi_entities`,
  
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
    
    completename: {
      sql: `completename`,
      type: `string`
    },
    
    comment: {
      sql: `comment`,
      type: `string`
    },
    
    sons_cache: {
      sql: `sons_cache`,
      type: `string`
    },
    
    ancestors_cache: {
      sql: `ancestors_cache`,
      type: `string`
    },
    
    registration_number: {
      sql: `registration_number`,
      type: `string`
    },
    
    address: {
      sql: `address`,
      type: `string`
    },
    
    postcode: {
      sql: `postcode`,
      type: `string`
    },
    
    town: {
      sql: `town`,
      type: `string`
    },
    
    state: {
      sql: `state`,
      type: `string`
    },
    
    country: {
      sql: `country`,
      type: `string`
    },
    
    website: {
      sql: `website`,
      type: `string`
    },
    
    phonenumber: {
      sql: `phonenumber`,
      type: `string`
    },
    
    fax: {
      sql: `fax`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    admin_email: {
      sql: `admin_email`,
      type: `string`
    },
    
    admin_email_name: {
      sql: `admin_email_name`,
      type: `string`
    },
    
    from_email: {
      sql: `from_email`,
      type: `string`
    },
    
    from_email_name: {
      sql: `from_email_name`,
      type: `string`
    },
    
    noreply_email: {
      sql: `noreply_email`,
      type: `string`
    },
    
    noreply_email_name: {
      sql: `noreply_email_name`,
      type: `string`
    },
    
    replyto_email: {
      sql: `replyto_email`,
      type: `string`
    },
    
    replyto_email_name: {
      sql: `replyto_email_name`,
      type: `string`
    },
    
    notification_subject_tag: {
      sql: `notification_subject_tag`,
      type: `string`
    },
    
    ldap_dn: {
      sql: `ldap_dn`,
      type: `string`
    },
    
    tag: {
      sql: `tag`,
      type: `string`
    },
    
    mail_domain: {
      sql: `mail_domain`,
      type: `string`
    },
    
    entity_ldapfilter: {
      sql: `entity_ldapfilter`,
      type: `string`
    },
    
    mailing_signature: {
      sql: `mailing_signature`,
      type: `string`
    },
    
    inquest_url: {
      sql: `inquest_URL`,
      type: `string`
    },
    
    autofill_warranty_date: {
      sql: `autofill_warranty_date`,
      type: `string`
    },
    
    autofill_use_date: {
      sql: `autofill_use_date`,
      type: `string`
    },
    
    autofill_buy_date: {
      sql: `autofill_buy_date`,
      type: `string`
    },
    
    autofill_delivery_date: {
      sql: `autofill_delivery_date`,
      type: `string`
    },
    
    autofill_order_date: {
      sql: `autofill_order_date`,
      type: `string`
    },
    
    autofill_decommission_date: {
      sql: `autofill_decommission_date`,
      type: `string`
    },
    
    custom_css_code: {
      sql: `custom_css_code`,
      type: `string`
    },
    
    latitude: {
      sql: `latitude`,
      type: `string`
    },
    
    longitude: {
      sql: `longitude`,
      type: `string`
    },
    
    altitude: {
      sql: `altitude`,
      type: `string`
    },
    
    agent_base_url: {
      sql: `agent_base_url`,
      type: `string`
    },
    
    max_closedate: {
      sql: `max_closedate`,
      type: `time`
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
    },
    
    inquest_duration: {
      sql: `inquest_duration`,
      type: `sum`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
