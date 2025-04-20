const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Démarre l'authentification Google
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Callback de Google
router.get("/google/callback",
  passport.authenticate("google", { session: false, failureRedirect: "/login" }),
  (req, res) => {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    // Redirige vers ton frontend avec le token
    res.redirect(`http://localhost:3000/oauth-success?token=${token}`);
  }
);

module.exports = router;
