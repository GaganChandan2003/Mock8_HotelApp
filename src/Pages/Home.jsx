import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from '../Styles/Home.module.css'

const Home = () => {

    let nav=useNavigate();
    const handleAdmin=()=>
    {
        let adminlogin=localStorage.getItem('adminlogin');
        if(adminlogin===true)
        {
            nav('/admin')
        }
        else{
            nav('/adminlogin')
        }
    }

    const handleUser=()=>
    {
        nav('/userlogin')
    }
    return (
        <>
        <Text className={css.text}>Welcome To Hotel!</Text>
            <Box className={css.box}>
                <Button colorScheme='teal' variant='solid' onClick={handleAdmin}>Admin</Button>
                <Button colorScheme='teal' variant='solid' onClick={handleUser}>User</Button>
            </Box>
        </>
    )
}

export default Home