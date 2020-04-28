const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../dash/dashModel");
const { jwtSecret } = require("../config/secrets.js");

router.get('/', (req, res) => {
    res.send('server is working')
})

router.post("/register", (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;
    
    Users.add(user)
    .then((saved) => {
        res.status(201).json(saved);
    })
    .catch((err) => {
        res.status(500).json({ err });
    });
});

router.post("/login", (req, res) => {
    let { username, password } = req.body

    Users.findBy({ username })
    .first()
    .then(users => {
        if (users && bcrypt.compareSync(password, users.password)){
            const token = generateToken(users)
            res.status(201).json({
                message: `Welcome ${users.username}`,
                token: token
            })
        } else {
            res.status(404);
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
        });
})

function generateToken(users){
    const payload = {
        subject: users.id,
        username: users.username,
        password: users.password,
        role: users.role || 'undefined'
    }
    const options = {
        expiresIn: '2h'
    } 
    return jwt.sign(payload, jwtSecret, options)
}

module.exports = router