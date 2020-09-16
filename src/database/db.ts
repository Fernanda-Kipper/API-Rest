const knex = require('knex');

const db_declarate = knex({
    client: "mysql",
    connection: {
        host : process.env.MYSQL_HOST,
        user : process.env.MYSQL_USER,
        password : process.env.MYSQL_PASSWORD,
        database : process.env.MYSQL_DATABASE
    },
    useNullAsDefault: true,
})

module.exports = db_declarate;