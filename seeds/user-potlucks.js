
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('linked').del()
    .then(function () {
      // Inserts seed entries
      return knex('linked').insert([
        {item_id: 1, user_id: 2, potluck_id: 1},
        {item_id: 2, user_id: 3, potluck_id: 2},
        {item_id: 3, user_id: 1, potluck_id: 3}
      ]);
    });
};
