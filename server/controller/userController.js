

const { use } = require('../routes/route');
const User = require('../schema/userSchema');




const addUser =  async (req,res)=>{
    const user = req.body;
    
    const newUser = new User(user);
    console.log("Hello from controller");
    try{
        await newUser.save();
        res.status(201).json(newUser);
    }catch(error){
        res.status(501).json({message : error.message});
    }
}

// module.exports = addUser;