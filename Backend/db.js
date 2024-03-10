const mongoose = require("mongoose");

const mongo_uri = "mongodb+srv://deshtanavneet:deshtadeshta@cluster10.th4jzrq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster10";

const mongoDB =async ()=>{
    try {
      await mongoose.connect(mongo_uri);
      console.log("Successfully connected to Database")
        
    }
    
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
        console.error(error.stack);
        throw error;
    }
}


module.exports = mongoDB;