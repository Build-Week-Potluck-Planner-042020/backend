
exports.seed = function(knex) {
  return knex('item').del()
  .truncate()
    .then(function () {
      return knex('item').insert([
        {item_name: 'Salad', claimed: false, potluck_id: 1},
        {item_name: 'Pie', claimed: true, potluck_id: 2},
        {item_name: 'Pizza', claimed : false, potluck_id: 2}
      ]);
    });
};
