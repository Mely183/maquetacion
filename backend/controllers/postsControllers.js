const Posts = require('../models/postsModels')
const Users = require ('../models/usersModels')
const auth = require ('../middlewares/auth')


module.exports = {
    // get all posts from mongDB
    getAll: async (req, res) => {
        const posts = await Posts.find({}).sort()
        res.status(200).send({ msg: 'Success!, posts found', data: posts })
    },

    // Get by id a post from MongoDB
    getById: async (req, res) => {
        const idPost = req.params.id
        if (!idPost) return res.status(404).send({ msg: 'Error!, Id post does not exist' })

        const post = await Posts.findOne({ _id: idPost })
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

    // Delete: Delete a post from MongoDB
    delete: async (req, res) => {
        const idPost = req.params.id
        if (!idPost) return res.status(404).send({ msg: 'Error!, Id post does not exist' })

        const post = await Posts.findOne({ _id: idPost })
        if (!post) return res.status(404).send({ msg: 'Error!, post does not exist' })

        const deletedPost = await Posts.deleteOne({ _id: idPost })
        if (!deletedPost) return res.status(404).send({ msg: 'Error!, post not deleted' })

        res.status(200).send({ msg: 'Success!, post deleted' })
    },

    // Put: Update a post from MongoDB
    put: async (req, res) => {
        const idPost = req.params.id
        if (!idPost) return res.status(404).send({ msg: 'Error!, Id post does not exist' })

        const post = await Posts.findOne({ _id: idPost })
        if (!post) return res.status(404).send({ msg: 'Error!, post does not exist' })

        const postToUpdate = req.body
        const updatedPost = await Posts.updateOne({ _id: idPost }, postToUpdate)
        if (!updatedPost) return res.status(404).send({ msg: 'Error!, post not updated' })

        res.status(200).send({ msg: 'Success!, post updated', data: postToUpdate })
    }


}
