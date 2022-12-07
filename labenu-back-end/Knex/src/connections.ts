import knex from 'knex'


const connection = knex( {
    client: "mysql",
    connection: {
        host: "localhost",
        port: 3306,
        user: "devvagnerBR",
        password: "scotow21",
        database: "estudos_labenu",
        multiStatements: true
    }
} )

export default connection

