 const mongoose = require('mongoose');
 const {Schema} = mongoose;
const RecipientSchema = require('./Recipient')

 const surveySchema = new Schema({
     title : String , 
     body : String , 
     subject : String,
     recipients : [RecipientSchema],
     yes: {type : Number, default : 0},
     no : {type : Number, default : 0},
     createdAt : {type : Date, default : Date.now()},
     _user : {type : Schema.Types.ObjectId, ref : 'Survey Users'}
 })

 mongoose.model ('surveys', surveySchema)