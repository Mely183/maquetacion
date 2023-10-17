const Posts = require('../models/postsModels')

module.exports = {
    // get all posts from mongDB
    getAll: async (req, res) => {

        const posts = await Posts.find({}).sort()
        res.status(200).send({ msg: 'Success!, posts found', data: posts })

    },
}