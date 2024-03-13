// Hide local password
require('dotenv').config();

// Change to your own local password - hidden with env var
const local_pw = process.env.PSQL_PASSWORD;

// postgres connection with pg NPM package
const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: local_pw,
  host: 'localhost',
  port: 5432,
  database: 'pern_todo_db',
});

module.exports = pool;
