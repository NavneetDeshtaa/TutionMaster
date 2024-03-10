const mongoose = require("mongoose");

const {Schema} = mongoose;

const StudentSchema = new Schema({
    firstname:{
     type: String,
     require:true
    },

    lastname:{
        type: String,
        require:true
       },

    mothername:{
        type: String,
        require:true
       },

    fathername:{
        type: String,
        require:true
       },

    address:{
        type: String,
        require:true
       },

    gender:{
        type: String,
        require:true
       },
     
    classes:{
        type: Number,
        require:true
       },

    state:{
        type: String,
        require:true
       },
       
    district:{
        type: String,
        require:true
       },

    dob:{
        type: Number,
        require:true
       },

    pincode:{
        type: Number,
        require:true
       },

    contact:{
        type: Number,
        require:true
       },

    email:{
        type: String,
        require:true
       },

    password:{
        type: Number,
        require:true
       },

    repeatpassword:{
        type: Number,
        require:true
       },
  });

  module.exports = mongoose.model('student',StudentSchema)