
exports.seed = function(knex) {
  return knex('items').del()
  .truncate()
    .then(function () {
      return knex('items').insert([
        {},
        {id: 2, items: 'Salad', potluck_id: 2},
        {id: 3, items: 'Pizza', potluck_id: 2}
      ]);
    });
};
