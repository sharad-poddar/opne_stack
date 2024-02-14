const mongoose = require('mongoose')


// user - Schema
// contains password field for CURD operations in its database
const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    passwordHash: String,
    // store the refrence id of notes
    notes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Note'
        }
    ],
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        // the passwordHash should not be revealed
        delete returnedObject.passwordHash
    } 
})

// Users created as of collection
const User = mongoose.model('user', userSchema);

module.exports = User
