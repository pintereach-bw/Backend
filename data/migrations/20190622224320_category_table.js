exports.up = function(knex, Promise) {
  return knex.schema.alterTable("category", category => {
    category.increments();

    category.string("name", 255);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("category");
};
