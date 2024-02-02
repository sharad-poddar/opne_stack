const mongoose = require('mongoose')

if(process.argv.length <= 0){
    console.log('gives the arguments in cli')
    process.exit(1);
}

console.log(process.argv)
const name = process.argv[2].toLowerCase()
const password = process.argv[3]

const url = `mongodb+srv://sharad:${password}@cluster0.at9thxi.mongodb.net/new_phone_diary?retryWrites=true&w=majority`
mongoose.set('strictQuery', false)
mongoose.connect(url)

const newSchema = new mongoose.Schema({
    id: Number,
    name: String,
    phone: Number,
})

const NewPhone = mongoose.model('newphone',newSchema);
console.log(NewPhone);


// we have find name from model
NewPhone.find({name: name}).then((result)=>{
    result? result.forEach((e)=>{
        console.log(e)
    }):console.log('cant find anything in db')

    // we have to close the connection for completion of execution
    // it will call after the find
    // if it is outside the both will execute simultaneously our db gets dissconnects
    mongoose.connection.close();
})
