import React from 'react'
import { FormControl, FormGroup, Typography, styled, Input, Button } from '@mui/material';
import { InputLabel } from '@mui/material';
import { useState } from 'react';
import { addUser } from '../service/api';

const Container = styled(FormGroup)`
    width:50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top:20px;
    }
`

const defaultValue = {
    name: '',
    userName: '',
    email: '',
    country: '',
    team: ''
}

function AddUser() {
    const [users, setUser] = useState(defaultValue)


    const onvalueChange = (e) => {
        // console.log(e.target.value, e.target.name)
        setUser({ ...users, [e.target.name]: e.target.value })
        console.log(users)
    }
    const addUserDetails = async () => {
        console.log("Its happen")
        await addUser(users)
    }
    return (
        <Container>
            <Typography variant='h3'>Add users</Typography>
            <FormControl >
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onvalueChange(e)} name='name' />
            </FormControl>
            <FormControl >
                <InputLabel>PlayerName</InputLabel>
                <Input onChange={(e) => onvalueChange(e)} name='userName' />
            </FormControl>
            <FormControl >
                <InputLabel>PlayerEmail</InputLabel>
                <Input onChange={(e) => onvalueChange(e)} name='email' />
            </FormControl>
            <FormControl >
                <InputLabel>Country</InputLabel>
                <Input onChange={(e) => onvalueChange(e)} name='country' />
            </FormControl>
            <FormControl >
                <InputLabel>Team</InputLabel>
                <Input onChange={(e) => onvalueChange(e)} name='team' />
            </FormControl>
            <FormControl>
                <Button variant='contained' onClick={() => addUserDetails()}>Submit</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser
