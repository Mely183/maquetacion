const mongoose = require('mongoose')
const URI = process.env.URI

mongoose.set('strictQuery', false)

module.exports = {
    connect: () => {
        //console.log(URI)
        try {
            mongoose.connect(URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            console.log('Connected to database')
        } catch (error) {
            console.log('Error connecting to database')
            console.log(error)
        }
    },
    disconnect: (done) => {
        mongoose.disconnect(done)
    }
}
