exports.seed = function(knex) {
  return knex('potluck').del()
  .truncate()
    .then(function () {
      return knex('potluck').insert([
        {name: "Jim's Potluck", date: '05-27-2020', time: '2:00', location: 'River Park', host: "Jim Jennings"},
        {name: "John's Potluck", date: '05-28-2020', time: '6:00', location: "Claylock Beach", host: "John Johnson" },
        {name: "Joe's Potluck", date: '05-24-2020', time: '11:00', location: 'South Bay', host: "Joe Jensen"}
      ]);
    });
};
