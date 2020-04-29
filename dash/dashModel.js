const knex = require('knex');
const knexConfig = require('../knexfile');

const db = require('../config/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
};

function find() {
    return db('user')
}

function findBy(filter) {
    console.log(filter)
    return db('user').where(filter)
}


async function add(user) {
    const [ id ] = await db("user")
    .insert(user)
    return findById(id)
}

function findById(id) {
    return db('user')
    .where({ id })
    .first();
}