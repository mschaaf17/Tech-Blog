const router = require('express').Router()
const { User, Post, Comment }= require('../../models')

router.get('/', (req, res) => {
    Post.findAll({
        include: [
            {
                model: User
            }
        ]
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router;