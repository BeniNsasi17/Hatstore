const pool = require("../config/db");

exports.findUserByEmail = async (email) => {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
  return result.rows[0];
};

exports.createUser = async (username, email, hashedPassword, isadmin) => {
  const result = await pool.query(
    "INSERT INTO users (username, email, password, isadmin) VALUES ($1, $2, $3, $4) RETURNING *",
    [username, email, hashedPassword, isadmin]
  );
  return result.rows[0];
};

exports.findUserById = async (id) => {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return result.rows[0];
};
