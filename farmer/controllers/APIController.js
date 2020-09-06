let TweetModel = require("../models/TweetModel");

const StreamTwitter = require("../twitter/FilteredStream");

// Reglas para la respuesta para la petición "/"
exports.getTweet = async (req, res, next) => {
  await StreamTwitter();
  res.json({ message: "Server Active" });
};
