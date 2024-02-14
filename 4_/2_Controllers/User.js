const bcrypt = require('bcrypt')
const userRouter = require('express').Router;
const User = require('../1_Model/User')


// using async js
userRouter.post('/',async(req, res)=>{
    const {username, name, password} = req.body;
    const passwordHash = bcrypt.hash(password, 10);

    const user = new User({
        username,
        name,
        passwordHash
    })

    const savedUser = await user.save()
    res.status(200).json(savedUser)
})

module.exports = userRouter