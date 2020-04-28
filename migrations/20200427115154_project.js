
exports.up = function(knex) {
    return knex.schema

    .createTable('users', (users) => {
        users.increments();

        users.string('username', 256)
        .notNullable()
        .unique()

        users.string('password', 256)
        .notNullable();

        users.boolean('organizer').defaultTo(false)
    })

    .createTable('potlucks', (potlucks) => {
        potlucks.increments();

        potlucks.string('name', 256)
        .notNullable()
        .unique()

        potlucks.string('date', 256)
        .notNullable();

        potlucks.string('time', 256)
        .notNullable();

        potlucks.string('location', 256)
        .notNullable();
    })

    .createTable('items', (items) => {
        items.increments();

        items.string('items', 256)
        .unique()
        .notNullable();
    })

};


exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('potlucks')
    .dropTableIfExists('items');
};
