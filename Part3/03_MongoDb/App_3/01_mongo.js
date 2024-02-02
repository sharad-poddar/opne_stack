// Organisation -> clusters -> database -> collections -> data
const mongoose = require('mongoose')

// taking the password as an argument
// length of array of process.argv array
if(process.argv.length<3){
    console.log('give the password as argument');
    process.exit(1)
}

console.log(process.argv);
// accessing the command line parameter by this
// 0. node location
// 1. file(this) location
// 2. password or parameter
const password = process.argv[2];

console.log(password);

// url contains username, password, database name which we can change anytime or delete
const url = `mongodb+srv://sharad:${password}@cluster0.at9thxi.mongodb.net/phone_diary?retryWrites=true&w=majority`
mongoose.set('strictQuery',false)
mongoose.connect(url)

// in which the data stores in database
const phoneSchema = new mongoose.Schema({
    id: Number,
    name: String,
    phone: Number
})

// first parameter is singula name which convert into plural, name of collection
const Phone = mongoose.model('phone', phoneSchema);

// making one schema object or model
const note = new Phone({
    id: 3,
    name: 'Ronak',
    phone: 123456789
})

// saving the model
note.save().then(()=>{
    console.log('note has been saved!')
    // for execution the connection must be closed
    mongoose.connection.close();
})



// The idea behind Mongoose is that the data stored in the database is given a 
// schema at the level of the application that defines the shape of the documents 
// stored in any given collection.
