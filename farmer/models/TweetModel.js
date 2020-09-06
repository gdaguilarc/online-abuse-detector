const knex = require("../database/connection");

exports.factory = (content, positive, positive_negative, negative) => {
  return {
    content,
    positive,
    positive_negative,
    negative,
  };
};

exports.all = () => {
  return knex.from("tweets").select("*");
};

exports.create = (tweet) => {
  return knex("tweets").insert({
    content: tweet.content,
    positive: tweet.positive,
    positive_negative: tweet.positive_negative,
    negative: tweet.negative,
  });
};

exports.find = (id) => {
  return knex.select("*").from("tweets").where("id", id).first();
};

exports.update = (id, tweet) => {
  return knex("tweets")
    .update(tweet)
    .update("created_at", knex.fn.now())
    .where("id", id);
};

exports.delete = (id) => {
  return knex("tweets").delete().where("id", id);
};
