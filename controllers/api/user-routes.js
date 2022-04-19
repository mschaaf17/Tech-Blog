const router = require('express').Router()
const { User, Comment, Post } = require('../../models')


//get all users
router.get('/', (req, res) => {
    console.log('user route is running')
    User.findAll({
     attributes: {exclude: ['password']}
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password']},
        where: {
            id: req.params.id
        }
    }) 
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404)({message: 'No user found with this id'})
        return
        }
        res.json(dbUserData)
    })
    .catch(err=> {
        console.log(err)
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData[0]) {
            res.status(404).json({message: 'No user found with this id'})
            return
        }
        res.json(dbUserData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.delete('/:id', (req, res)=> {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
    if (!dbUserData) {
        res.status(404).json({message: 'No user found with this id'})
        return
    }
    res.json(dbUserData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})


//in the router.post('/') use the .then from 14.2.5
//13.1.6 to set up post put and delete routes
module.exports = router