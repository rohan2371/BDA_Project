

const getUser = require('../services/api');
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
            <TableBody>

            </TableBody>
        </Table>
    );
}

export default AllUser;