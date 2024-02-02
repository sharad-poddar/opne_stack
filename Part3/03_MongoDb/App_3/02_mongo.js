const mongoose = require('mongoose');

if(process.argv.length < 3){
    console.log('adding the password')
    // exiting the proccessing
    process.exit(1);
}

console.log(process.argv);
const password = process.argv[2];

const url = `mongodb+srv://sharad:${password}@cluster0.at9thxi.mongodb.net/phone_diary?retryWrites=true&w=majority`;
mongoose.set('strictQuery', false);
mongoose.connect(url);

const newSchema = new mongoose.Schema({
    id: Number,
    name: String,
    phone: Number
})

// this is model
const Phone = mongoose.model('phone', newSchema);

// finding the details of id: 2
Phone.find({name: 'Rahul'}).then(result => {
    result.length>0?result.forEach(phone => {
        console.log(phone);
    }):(console.log('data has not been found in database!'));
    mongoose.connection.close()
})

