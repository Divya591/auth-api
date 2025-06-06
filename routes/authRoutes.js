const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { register, login, getProfile, updateProfile } = require("../controllers/authController");
const validate = require("../validators/userValidator");

router.post("/register", async (req, res, next) => {
  const { error } = validate.registerSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
}, register);

router.post("/login", async (req, res, next) => {
  const { error } = validate.loginSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
}, login);

router.get("/profile", auth, getProfile);
router.patch("/profile", auth, updateProfile);

module.exports = router;
