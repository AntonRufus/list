const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "postSQL",
  host: "localhost",
  port: 5433,
  database: "todolist",
});

module.exports = pool;
