const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({

    CategoryName:{
        
        type:String
    }
   
})

module.exports = mongoose.model('category',categorySchema)