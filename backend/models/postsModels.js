const { Schema, model } = require('mongoose')

const postSchema = new Schema({
    description: { type: String, required: true },
    tags: { type: [String] },
    titulo: { type: String, required: true },
    url: { type: String, required: true }
},
    {
        timestamps: true
    })

const Post = model('post', postSchema)

module.exports = Post


// {
//     "_id": {
//       "$oid": "652df192027bcee4be837e40"
//     },
//     "description": "Python permite varios paradigmas de programación, incluyendo la programación orientada a objetos (POO). La POO es una manera de estructurar el código que le hace especiamente efectivo organizando y reutilizando código, aunque su naturaleza abstracta hace que no sea muy intuitivo cuando se empieza.\n\nCAMBIO REALOIZAD",
//     "tags": [
//       "python",
//       "tutorial",
//       "programming"
//     ],
//     "titulo": "Poo en python",
//     "url": "https://cosasdedevs.com/media/posts/photos/poo-python.png"
//   }