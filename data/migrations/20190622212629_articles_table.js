exports.up = function(knex, Promise) {
  return knex.schema.createTable("articles", articles => {
    articles.increments();

    articles.string("title", 250).notNullable();

    articles.string("summary", 1000).notNullable();

    articles.string("link", 1000);

    articles.string("image", 1000);

    articles
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users");

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
