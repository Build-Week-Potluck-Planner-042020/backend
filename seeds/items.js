
exports.seed = function(knex) {
  return knex('items').del()
  .truncate()
    .then(function () {
      return knex('items').insert([
        {id: 1, items: 'Cake'},
        {id: 2, items: 'Salad'},
        {id: 3, items: 'Pizza'}
      ]);
    });
};
