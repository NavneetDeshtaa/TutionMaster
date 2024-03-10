const mongoose = require("mongoose");

const {Schema} = mongoose;

const MentorSchema = new Schema({
    firstname:{
        type: String,
        require:true
       },
   
       lastname:{
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
        
       education:{
           type: String,
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

        distance:{
            type: Number,
            require:true
           },

   
       experience:{
           type: Number,
           require:true
          },
        
        imageurl:{
            type:String
          },
   
       contact:{
           type: Number,
           require:true
          },
   
       email:{
           type: String,
           require:true
          },

          imageurl:{
            type: String,
            require:true
           },

        

        aboutyou:{
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

  module.exports = mongoose.model('mentor',MentorSchema)