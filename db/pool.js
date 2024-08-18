const { Pool } = require('pg')
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;


module.exports = new Pool({
  connectionString: `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
});