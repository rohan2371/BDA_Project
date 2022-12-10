
const express = require('express');

const router = express.Router();
const user  = requ

const addUser = require('../controller/userController');


router.post('/add',async (req,res)=>{
    const user = req.body;
    
    const newUser = new User(user);
    // console.log("Hello from controller");
    try{
        await newUser.save();
        res.status(201).json(newUser);
    }catch(error){
        res.status(501).json({message : error.message});
    }
})



module.exports = router;