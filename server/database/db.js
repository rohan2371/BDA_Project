const mongoose = require('mongoose');

const Connection = async ()=>{
    const URL = 'mongodb://localhost:27017/bookStore';
    try{
        await mongoose.connect(URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            family: 4});
            console.log("Connected successfully");
    } catch(error){
        console.log("Error while Connecting to database",error);
    }
}

export default Connection;