const db = require('../config/dbConfig');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
};

function find() {
    return db('potlucks').select("id", "name", "date", "time", "location")
}

function findById(id) {
    return db('potlucks')
    .where({ id })
    .first();
}

function add(item) {
    return db('potlucks')
        .insert(item)
        .then(ids => {
        return findById(ids[0]);
    });
}

function update(changes, id){
    return db('potlucks')
    .where({ id })
    .update(changes);
}

async function remove(id) {
    try {
        const potluck = await findById(id)
        await db("potlucks")
        .where({ id })
        .del()
        return potluck
    } catch (err) {
        console.log(err)
        return null;
    }
}