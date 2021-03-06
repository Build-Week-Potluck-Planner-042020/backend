const db = require('../config/dbConfig');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
};

function find() {
    return db('item')
}

function findById(id) {
    return db('item')
    .where({ id })
    .first();
}

function add(item) {
    return db('item')
        .insert(item)
        .then(ids => {
        return findById(ids[0]);
    });
}

function update(changes, id){
    return db('item')
    .where({ id })
    .update(changes);
}

async function remove(id) {
    try {
        const potluck = await findById(id)
        await db("item")
        .where({ id })
        .del()
        return potluck
    } catch (err) {
        console.log(err)
        return null;
    }
}