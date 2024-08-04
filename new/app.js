


const express = require('express')

const app = express()

// const mongoose = require(id:string):any
const mongoose = require('mongoose');

const blog = require('./blogModel')
// hostname = mongodb+srv
// user = 689
// password = 04RJ6Bd3grFU
// clusterName= cluster0.
// dbname = blog

mongoose.connect('mongodb+srv://collegenp:Gookha910@app.qjbi4om.mongodb.net/?retryWrites=true&w=majority&appName=app')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err))

app.get('/', (req,res)=>{
    res.json({
        name:'manish',
        age: 20,
        email: 'hellomanish@gmail.com'
    })
})

let data = {
    title: "post 1",
    content: "asdwasda asdasd awdasda wdasda wdasdawdda s"
}

new blog(data).save()

app.listen(3000)