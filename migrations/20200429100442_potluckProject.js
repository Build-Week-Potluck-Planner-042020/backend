exports.up = function(knex) {
    return knex.schema

    .createTable('user', (users) => {
        users.increments();

        users.string('username', 256)
        .notNullable()
        .unique()

        users.string('password', 256)
        .notNullable();
    })

    .createTable('potluck', (potlucks) => {
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

        potlucks.string('host', 256)
        .unsigned()
        .references('id')
        .inTable('user')
        .notNullable()
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })

    .createTable('item', (items) => {
        items.increments();

        items.string('item_name', 256)
        .notNullable();

        items.boolean('claimed')
        .defaultTo(false)
    })

    .createTable('linked', (table) => {
        table.integer('item_id')
            .unsigned()
            .references('id')
            .inTable('item')
            .notNullable()
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        
        table.integer('user_id')
            .unsigned()
            .references('id')
            .inTable('user')
            .notNullable()
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.integer('potluck_id')
            .unsigned()
            .references('id')
            .inTable('potluck')
            .notNullable()
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('linked')
    .dropTableIfExists('item')
    .dropTableIfExists('potluck')
    .dropTableIfExists('user')
};