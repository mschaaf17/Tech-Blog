const router = require('express').Router()
const { Comment }= require('../../models')

//this route not working
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

// router.get('/:id', (req, res) => {
//     console.log('comment route is running')
//     Comment.findOne({
//         where: {
//             id: req.params.id
//         }
//     })
//     .then(dbCommentData => {
//    if(!dbCommentData) {
//        res.status(404).json({message: 'No comments found with thsi id'})
//        return
//     }
//     res.json(dbCommentData)
//     .catch(err => {
//         console.log(err)
//         res.status(500).json(err)
//     })
// })

router.post('/', (req, res) => {
    //check session
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.post_id
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err)
        res.status(400).json(err)
    })

})

//test this route

router.delete('/:id', (req, res) => {
Comment.destroy({
    where: {
        id: req.params.id
    }
})
.then(dbCommentData => {
    if(!dbCommentData) {
        res.status(404).json({message: 'No comment with this id'})
        return
    }
    res.json(dbCommentData)
})
.catch(err => {
    console.log(err)
    res.status(500).json(err)
})
})

module.exports = router;