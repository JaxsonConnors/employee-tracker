const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'MyNewPassword1',
  database: 'employees'
});

module.exports = connection;