
exports.seed = function(knex) {
  return knex('item').del()
  .truncate()
    .then(function () {
      return knex('item').insert([
        {item_name: 'Salad'},
        {item_name: 'Pie'},
        {item_name: 'Pizza'}
      ]);
    });
};
