// const pg = require('pg')

// // change this to your actual local database name
// const localDbName = 'budgiet'

// let db;
// if (process.env.DATABASE_URL) {
//   db = new pg.Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//       rejectUnauthorized: false
//     }
//   })
// } else {
//   if (process.env.DEV_DB_PASSWORD) {
//     db = new pg.Pool({
//       database: localDbName,
//       password: 'Jazlyn.2016',
//     })
//   } else {
//     db = new pg.Pool({
//       database: localDbName
//     })
//   }
// }
 
// module.exports = db

// Above for production

const pg = require('pg')
const dbName = 'budgiet'

const db = new pg.Pool({
  database: dbName,
  password: 'Jazlyn.2016'
})

module.exports = db