const router = require('express').Router();
const Dash = require('../dash/dashModel');
// const restricted = require('../auth/restricted-middleware');

router.get('/', (req,res ) => {
    Dash.find()
    .then(dash => {
        res.json(dash)
    })
    .catch(err => res.send(err))
})

module.exports = router;