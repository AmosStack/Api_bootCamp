const db = require('../config/db');

exports.createUser = async (user) => {
  const { name, email } = user;
  const [result] = await db.promise().query(
    'INSERT INTO users (name, email) VALUES (?, ?)',
    [name, email]
  );
  return result;
};

exports.getAllUsers = async () => {
  const [rows] = await db.promise().query(
    'SELECT id, name, email FROM users ORDER BY id DESC'
  );
  return rows;
};