// cube(`CombinedTickets`, {
//   extends: glpi_tickets, // Menggunakan definisi dari cube glpi_tickets

//   joins: {
//     mania_bmn: {
//       relationship: `one_to_one`,
//       sql: `${CUBE}.nup_bmn_value = ${mania_bmn.bmn}`,
//     },
//   },

//   dimensions: {
//     // bmn: {
//     //   sql: `mania_bmn.bmn`,
//     //   type: `string`,
//     // },
//     // Sisanya adalah dimensi dari glpi_tickets
//     // ...
//   },

//   measures: {
//     // Sisanya adalah measures dari glpi_tickets
//     // ...
//   },
// });
