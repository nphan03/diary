const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'Seimei98',
  host: 'localhost',
  port: 5432,
  database: 'diaries'
});

module.exports = pool;
