const Preferences = require("../models/Preferences");

exports.savePreferences = async (req, res) => {
  const { theme, layout } = req.body;
  const preferences = await Preferences.findOneAndUpdate(
    { userId: req.user.id },
    { theme, layout },
    { new: true, upsert: true }
  );
  res.json(preferences);
};

exports.getPreferences = async (req, res) => {
  const prefs = await Preferences.findOne({ userId: req.user.id });
  res.json(prefs || {});
};
