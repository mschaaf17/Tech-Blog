const router = require('express').Router()
const { Comment, User, Post }= require('../../models')

router.get('/', (req, res) => {
    console.log('comment route is running')
    Comment.findAll()
    //     include: [
    //         {
    //             model: User
    //         },
    //         {
    //             model: Post
    //         }
    //     ]
    // })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router;