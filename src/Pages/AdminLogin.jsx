import React, { useState } from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const toast = useToast();
    let nav = useNavigate();
    let handleLogin = () => {
        if (email && password) {
            if (email === "admin@gmail.com" && password === "masai") {
                toast({
                    title: 'Login Success',
                    description: " Login Successfull",
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                })
                localStorage.setItem('adminlogin', true);
                nav('/admin');
            }
            else {
                toast({
                    title: 'Invalid credentials',
                    description: " Wrong email or password",
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                })
            }
        }
        else {
            toast({
                title: 'Enter you email and password',
                description: " email or password missing!",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Login in to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" onChange={(e) => setemail(e.target.value)} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" onChange={(e) => setpassword(e.target.value)} />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'blue.400'}>Forgot password?</Link>
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }} onClick={handleLogin}>
                                Login in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}

export default AdminLogin