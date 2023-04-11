const app = require('./app')
const mongoose = require('mongoose')
require('dotenv').config()

const PORT = process.env.PORT || 9999
const MONGO_URI = process.env.MONGO_URI

app.listen(PORT, () => console.log('server running ' + PORT))

mongoose.connect(MONGO_URI)
    .then(() => console.log('Du har nu connectad servern och det fungerar'))
    .catch(err => console.log(err.message))