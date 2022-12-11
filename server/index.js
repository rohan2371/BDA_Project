
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Routes = require( './routes/route');




const app = express();
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({ extended:true}))
app.use(cors());
app.use('/',Routes);




app.listen(5001,()=>{
    console.log("on port 5001 !!")

})








// Connection db 
function connRohan(){
    
    try{
        mongoose.connect("mongodb://localhost:27017/employeeManagement",{
            useNewUrlParser:true,useUnifiedTopology:true,
            family: 4}) 
            console.log("Database Connected Successfully");
    } catch(error){
        console.log('Error while connecting with database ',error);
    }
       
};
connRohan();


    









