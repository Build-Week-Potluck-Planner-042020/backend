exports.seed = function(knex) {
  return knex('user').del()
  .truncate()
    .then(function () {
      return knex('user').insert([
        {username: 'Jim Jennings', password: 'test123'},
        {username: 'John Johnson', password: 'test123'},
        {username: 'Joe Jensen', password: 'test123'}
      ]);
    });
};
