import axios from 'axios';

const URL = 'http://localhost:5001';
export const addUser = async(data)=>{
        try{
           return await axios.post('http://localhost:5001/add',data);
        }catch(error){
            console.log('Error while calling add User API ',error);
        }
}