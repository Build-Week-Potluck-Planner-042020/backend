
exports.seed = function(knex) {
  return knex('item').del()
  .truncate()
    .then(function () {
      return knex('item').insert([
        {item_name: 'Salad', claimed: false},
        {item_name: 'Pie', claimed: true},
        {item_name: 'Pizza', claimed : false}
      ]);
    });
};
