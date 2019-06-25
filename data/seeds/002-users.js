exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "Tom", password: "123" },
        { username: "Bob", password: "123" },
        { username: "Jack", password: "123" }
      ]);
    });
};
