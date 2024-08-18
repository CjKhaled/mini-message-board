const { Pool } = require('pg')
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname + "../.env") });
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
console.log("this from da pool");
console.log(PGHOST, PGDATABASE, PGUSER, PGPASSWORD);

if (!PGHOST || !PGDATABASE || !PGUSER || !PGPASSWORD) {
  throw new Error("Database connection environment variables are not set.");
}

module.exports = new Pool({
  connectionString: `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
});