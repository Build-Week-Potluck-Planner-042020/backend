const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../dash/foodModel");
const { jwtSecret } = require("../config/secrets.js");

router.get('/', (req,res ) => {
    Users.find()
    .then(foods => {
        res.json(foods)
    })
    .catch(err => res.status(500).json(err))
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Users.findById(id)
    .then(foods => {
        if (foods) {
            res.json(foods);
        } else {
            console.log(foods)
            res.status(404).json({ message: 'Could not find foods with given id.' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get foodss', err });
    });
});

router.post('/', (req, res) => {
    const foodsData = req.body;

    Users.add(foodsData)
        .then(foods => {
            res.status(201).json(foods);
        })
        .catch (err => {
            res.status(500).json({ message: 'Failed to create new foods', err });
        });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Users.findById(id)
    .then(foods => {
        if (foods) {
        Users.update(changes, id)
        .then(updatedfoods => {
            res.json(updatedfoods);
        });
        } else {
        res.status(404).json({ message: 'Could not find foods with given id' });
        }
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to update foods' });
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Users.remove(id)
    .then(deleted => {
        if (deleted) {
            res.json({ removed: deleted });
        } else {
            res.status(404).json({ message: 'Could not find foods with given id' });
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete foods', err });
    });
});

module.exports = router;