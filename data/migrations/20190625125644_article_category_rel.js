exports.up = function(knex, Promise) {
  return knex.schema.alterTable("articles", articles => {
    articles
      .integer("category_id")
      .unsigned()
      .references("id")
      .inTable("category");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropColumn("articles");
};
