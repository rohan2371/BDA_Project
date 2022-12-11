

<<<<<<< HEAD
import {Table, TableBody, TableHead} from '@mui/material';
const AllUser = ()=>{
    return(
        <Table>
            <TableHead>

            </TableHead>
            
=======
import { getUser } from '../services/api';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useEffect } from 'react';

const AllUser = ()=>{
    useEffect(()=>{

    },[]);

    const getAllUsers = async () =>{
        await getUser();
    }
    return(
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>UserName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                </TableRow>
            </TableHead>
>>>>>>> e01f64ebe33bc42eed6fc93cbffe0fb62a673e7f
            <TableBody>

            </TableBody>
        </Table>
    );
}

export default AllUser;