
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("category")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("category").insert([
        { id: 1, name: "Games" },
        { id: 2, name: "Fashion" },
        { id: 3, name: "Other" }
      ]);
    });
};
