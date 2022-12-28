const { Pool } = require('pg')

const connection = new Pool({
  user: 'postgres',
  password: '123',
  host: '127.0.0.1',
  port: 5432,
  database: 'postgres',
})

module.exports = connection

// const connectdb = async () => {
//   await connection.connect()
// }
