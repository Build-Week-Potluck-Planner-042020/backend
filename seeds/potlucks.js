exports.seed = function(knex) {
  return knex('potlucks').del()
  .truncate()
    .then(function () {
      return knex('potlucks').insert([
        {id: 1, name: "Jim's Potluck", date: '05-27-2020', time: '2:00', location: 'River Park'},
        {id: 2, name: "John's Potluck", date: '05-28-2020', time: '6:00', location: "Claylock Beach"},
        {id: 3, name: "Joe's Potluck", date: '05-24-2020', time: '11:00', location: 'South Bay'}
      ]);
    });
};
