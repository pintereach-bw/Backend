exports.up = function(knex, Promise) {
  return knex.schema.table("articles", articles => {
    articles
      .integer("category_id")
      .unsigned()
      .references("id")
      .inTable("category");

    articles
      .string("category_name")
      .unsigned()
      .references("name")
      .inTable("category");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("articles");
};
