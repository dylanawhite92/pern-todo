// Hide local password
require('dotenv').config();

const local_pw = process.env.PSQL_PASSWORD;

// postgres connection with pg NPM package
const Pool = require('pg').Pool;
