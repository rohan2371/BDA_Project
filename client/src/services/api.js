import axios from 'axios';

const URL = 'http://localhost:5001';
export const addUser = async(data)=>{
    console.log("Hello from adduser");
    console.log(data);
        try{
           return await axios.post('http://localhost:5001/add',data);
        }catch(error){
            console.log('Error while calling add User API ',error);
        }
}

export const getUser = async()=>{
    try{
        return await axios.get('http://localhost:5001/all')

    }catch(error){
        console.log("Error while fetching the data",error);
    
    }
}