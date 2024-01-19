import React from 'react'
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import { TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
import { getUser } from '../service/api.js'



function Alluser() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getAllUsers()
    }, [])
    const getAllUsers = async () => {
        const res = await getUser()
        setUsers(res.data)
        console.log(res.data)
    }
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>UserName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Country</TableCell>
                    <TableCell>Team</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map((item) =>
                        <TableRow>
                            <TableCell>{item._id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.userName}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.country}</TableCell>
                            <TableCell>{item.team}</TableCell>

                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    )
}

export default Alluser
