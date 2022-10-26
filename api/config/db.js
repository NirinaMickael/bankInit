let mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mysql123#',
    database: 'bankInitDB'
})

connection.connect()

module.exports = connection