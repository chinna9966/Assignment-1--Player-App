import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    margin-left: 0px;
    background-color : #000; 
`
const Tabs = styled(NavLink)`
 margin-left: 50px;
 font-size : 20px;
 color:#fff;
 text-decoration: none;
`
const Logo = styled('h1')`
    font-size: 20px;
    text-transform: uppercase;
`

function Navbar() {
    return (
        <div>
            <Header position='static' >
                <Toolbar>
                    <Logo>Syntax_errors_happen</Logo>
                    <Tabs to='/'>Home</Tabs>
                    <Tabs to='/all'>Show user</Tabs>
                    <Tabs to='/add'>Insert User</Tabs>

                </Toolbar>
            </Header>

        </div>
    )
}

export default Navbar
