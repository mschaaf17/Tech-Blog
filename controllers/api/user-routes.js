const router = require('express').Router()
const { User, Comment, Post } = require('../../models')


//get all users
router.get('/', (req, res) => {
    User.findAll({
        //attributes like password
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})


//in the router.post('/') use the .then from 14.2.5

module.exports = router