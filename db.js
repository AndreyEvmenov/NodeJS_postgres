// модуль подключения к базе данных postgres

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  password: '2qt2bstr8',
  host: 'localhost',
  port: 5432,
  database: 'node_postgres',
})

module.exports = pool
