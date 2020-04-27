exports.seed = function(knex) {
  return knex('users').del()
  .truncate()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'Jim Jennings', password: 'test123', organizer: true },
        {id: 2, username: 'John Johnson', password: 'test123', organizer: false },
        {id: 3, username: 'Joe Jensen', password: 'test123', organizer: true }
      ]);
    });
};
