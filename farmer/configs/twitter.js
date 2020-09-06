const dotenv = require("dotenv");

dotenv.config();

const twitterConfig = {
  consumer_key: process.env.CONSUMER_KEY || "",
  consumer_secret: process.env.CONSUMER_SECRET || "",
};

module.exports = twitterConfig;
