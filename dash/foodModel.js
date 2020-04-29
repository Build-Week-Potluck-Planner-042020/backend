const db = require('../config/dbConfig');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
};

function find() {
    return db('items')
}

function findById(id) {
    return db('items')
    .where({ id })
    .first();
}

function add(item) {
    return db('items')
        .insert(item)
        .then(ids => {
        return findById(ids[0]);
    });
}

function update(changes, id){
    return db('items')
    .where({ id })
    .update(changes);
}

async function remove(id) {
    try {
        const potluck = await findById(id)
        await db("items")
        .where({ id })
        .del()
        return potluck
    } catch (err) {
        console.log(err)
        return null;
    }
}