exports.up = function (knex) {
  return knex.schema.createTable("tweets", (table) => {
    table.increments("id");
    table.timestamp("created_at", { precision: 6 }).defaultTo(knex.fn.now(6));
    table.string("content", 1000).notNullable();
    table.float("positive", { precision: 10 });
    table.float("positive_negative", { precision: 10 });
    table.float("negative", { precision: 10 });
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("tweets");
};
