const mongoose = require('mongoose')

if(process.argv.length <= 0){
    console.log('gives the arguments in cli')
    process.exit(1);
}

console.log(process.argv)
const id = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]
const password = process.argv[5]

const url = `mongodb+srv://sharad:${password}@cluster0.at9thxi.mongodb.net/new_phone_diary?retryWrites=true&w=majority`
mongoose.set('strictQuery', false)
mongoose.connect(url)

const newSchema = new mongoose.Schema({
    id: Number,
    name: String,
    phone: Number,
})

const newPhone = mongoose.model('newphone',newSchema);

const data = new newPhone({
    id: id,
    name: name,
    phone: number
})

data.save().then((result)=>{
    console.log(result)
    console.log('the data is saved in mongodb database')
    mongoose.connection.close()
})