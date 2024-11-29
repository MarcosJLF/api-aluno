const {Pool} = require ("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "alunos",
    password: "postgres",
    port: 5432,
    max: 5,
    idleTimeoutMillis: 30000
})


module.exports = {pool}