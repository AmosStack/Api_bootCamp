const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Aruserver@123',
  database: process.env.DB_NAME || 'API',
  port: Number(process.env.DB_PORT) || 3307
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1);
  }
  console.log('MySQL Connected Successfully');
});

module.exports = db;