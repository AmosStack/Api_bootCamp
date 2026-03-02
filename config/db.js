const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',      // put your root password if you set one
  database: 'assignment_db',
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1);
  }
  console.log('MySQL Connected Successfully');
});

module.exports = db;