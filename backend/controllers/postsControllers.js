const Posts = require('../models/postsModels')

module.exports = {
    // get all posts from mongDB
    getAll: async (req, res) => {
        const posts = await Posts.find({}).sort()
        res.status(200).send({ msg: 'Success!, posts found', data: posts })
    },

    // Get by id an user from MongoDB
    getById: async (req, res) => {
        const idUser = req.params.id
        if (!idUser) return res.status(404).send({ msg: 'Error!, Id post does not exist' })

        const post = await Posts.findOne({ _id: idUser })
        if (!post) return res.status(404).send({ msg: 'Error!, post does not exist' })

        res.status(200).send({ msg: 'Success!, post found', data: post })
    },

    // Post: Create a new post and save it to MongoDB
    post: async (req, res) => {
        const post = await Posts.create(req.body)

        if (!post) {
            return res.status(404).send({ msg: 'Error!, post not created', err: post })
        }

        const newPost = await post.save()
        res.status(201).send({ msg: 'Success!, post created', data: newPost }
        )
    },
}