const mongoose = require("mongoose");

const {Schema} = mongoose;

const UserSchema = new Schema({
    email:{
        type: String,
        require:true
       },

    password:{
        type: Number,
        require:true
       },
  });

  module.exports = mongoose.model('User',UserSchema)