
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

        potlucks.integer('potluck_id')
    })

    .createTable('items', (items) => {
        items.increments();

        items.string('item_name', 256)
        .unique()
        .notNullable();

        items.integer('potluck_id')
        .references('id')
        .inTable('potlucks')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })

    .createTable('user-potlucks', (table) => {
        table.integer('potluck_id')
            .unsigned()
            .references('id')
            .inTable('potlucks')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        
        table.integer('users_id')
            .unsigned()
            .references('id')
            .inTable("users")
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};


exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('potlucks')
    .dropTableIfExists('items')
    .dropTableIfExists('user-potlucks');
};
