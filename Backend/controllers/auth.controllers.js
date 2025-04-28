const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findUserByEmail, createUser } = require("../models/user.models");
const JWT_SECRET = process.env.JWT_SECRET;

exports.register = async (req, res) => {
  const { username, email, password, isadmin } = req.body;
  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) return res.status(400).json({ message: "Email déjà utilisé" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser(username, email, hashedPassword, isadmin || false);

    res.status(201).json({ message: "Utilisateur créé", user: { id: newUser.id, username: newUser.username, isadmin: newUser.isadmin } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await findUserByEmail(email);
    if (!user) return res.status(400).json({ message: "Utilisateur introuvable" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Mot de passe incorrect" });

    const token = jwt.sign({ id: user.id, isadmin: user.isadmin }, JWT_SECRET, { expiresIn: "7d" });
    res.json({ token, user: { id: user.id, username: user.username, isadmin: user.isadmin } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
