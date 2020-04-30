const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../dash/potluckModel");
const { jwtSecret } = require("../config/secrets.js");

router.get('/', (req,res ) => {
    Users.find()
    .then(potlucks => {
        res.json(potlucks)
    })
    .catch(err => res.status(500).json(err))
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Users.findById(id)
    .then(potluck => {
        if (potluck) {
            res.json(potluck);
        } else {
            console.log(potluck)
            res.status(404).json({ message: 'Could not find potluck with given id.' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get potlucks', err });
    });
});

router.post('/', (req, res) => {
    const potluckData = req.body;

    Users.add(potluckData)
        .then(potluck => {
            res.status(201).json(potluck);
        })
        .catch (err => {
            res.status(500).json({ message: 'Failed to create new potluck', err });
        });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Users.findById(id)
    .then(potluck => {
        if (potluck) {
        Users.update(changes, id)
        .then(updatedpotluck => {
            res.json(updatedpotluck);
        });
        } else {
        res.status(404).json({ message: 'Could not find potluck with given id' });
        }
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to update potluck' });
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Users.remove(id)
    .then(deleted => {
        if (deleted) {
            res.json({ removed: deleted });
        } else {
            res.status(404).json({ message: 'Could not find potluck with given id' });
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete potluck', err });
    });
});

module.exports = router;