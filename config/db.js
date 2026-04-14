const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected to database");
        
    } catch (error) {
        console.error(' DB connection error:', err.message); 
        process.exit(1);
    }
}

module.exports = connectDB;