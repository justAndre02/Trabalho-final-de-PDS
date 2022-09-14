const mysql = require('mysql2');

/**
 * Faz a conexão com a base de dados MySQL
 */
 const connection = mysql.createPool({
    connectionLimit : 10,
    password: 'Trabalho1!',
    user: 'pds13@barbershop-pds',
    database: 'barbershop',
    host: 'barbershop-pds.mysql.database.azure.com',
    port: '3306'
});

module.exports = connection.promise();
