import React, { useState } from 'react'
import { Tabs, TabPanel, TabList, Tab, TabPanels, useToast } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const UserAuth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setusername] = useState("");
    const [useremail, setuseremail] = useState("");
    const [userpassword, setuserpassword] = useState("");
    const [userpassword2, setuserpassword2] = useState("");

    const [loginemail, setloginemail] = useState("");
    const [loginpassword, setloginpassword] = useState("");
    
    

    const toast = useToast();
const nav=useNavigate();
    const handleLogin=(e)=>
    {
        e.preventDefault();
        let logindata=JSON.parse(localStorage.getItem("signup"));
        if(loginemail===logindata.email&&loginpassword===logindata.password)
        {
            toast({
                title: 'Login Success',
                description: "Logged in successfully",
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
            nav('/hotel');
            
        }
        else{
            toast({
                title: 'Invalid credentials',
                description: " Wrong email or password",
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
        }

    }

    const handleSignup = (e) => {
        e.preventDefault();
        console.log(username,useremail,userpassword,userpassword2)
        if(userpassword===userpassword2)
        {
            let data={
                name:username,
                email:useremail,
                password:userpassword
            }
            toast({
                title: 'Sign Up Success',
                description: "Please Login",
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
            data=JSON.stringify(data);
            localStorage.setItem('signup',data);
            

        }
        else{
            toast({
                title: 'Passsword doesnt match',
                description: " Wrong password",
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
        }
    }

    return (
        <>
            <Tabs isFitted variant='unstyled' >
                <TabList mb='1em' >
                    <Tab _selected={{ color: 'white', bg: 'blue.500', borderRadius: "20px" }} borderRadius="20px" >Sign Up</Tab>
                    <Tab _selected={{ color: 'white', bg: 'blue.500', borderRadius: "20px" }} borderRadius="20px">Login</Tab>
                </TabList>
                <TabPanels >
                    <TabPanel>
                        <Flex
                            minH={'100vh'}
                            align={'center'}
                            justify={'center'}
                            bg={useColorModeValue('gray.50', 'gray.800')}>
                            <Stack spacing={8} mx={'auto'} maxW={'lg'} w="40%" py={12} px={6}>
                                <Stack align={'center'}>
                                    <Heading fontSize={'4xl'} textAlign={'center'}>
                                        Sign up
                                    </Heading>
                                    <Text fontSize={'lg'} color={'gray.600'}>
                                        to enjoy all of our cool features ✌️
                                    </Text>
                                </Stack>
                                <Box

                                    rounded={'lg'}
                                    bg={useColorModeValue('white', 'gray.700')}
                                    boxShadow={'lg'}
                                    p={8}>
                                    <Stack spacing={4}>
                                        <form action="" onSubmit={(e)=>handleSignup(e)}>
                                            <HStack>
                                                <Box width="100%">
                                                    <FormControl id="firstName" isRequired >
                                                        <FormLabel>User Name</FormLabel>
                                                        <Input type="text" onChange={(e)=>setusername(e.target.value)} />
                                                    </FormControl>
                                                </Box>
                                            </HStack>
                                            <FormControl isRequired  >
                                                <FormLabel>Email address</FormLabel>
                                                <Input type="email" onChange={(e)=>setuseremail(e.target.value)} />
                                            </FormControl>
                                            <FormControl isRequired>
                                                <FormLabel>Password</FormLabel>
                                                <InputGroup>
                                                    <Input type={showPassword ? 'text' : 'password'} onChange={(e)=>setuserpassword(e.target.value)} />
                                                    <InputRightElement h={'full'}>
                                                        <Button
                                                            variant={'ghost'}
                                                            onClick={() =>
                                                                setShowPassword((showPassword) => !showPassword)
                                                            }>
                                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                                        </Button>
                                                    </InputRightElement>
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl isRequired>
                                                <FormLabel> Repeat Password</FormLabel>
                                                <InputGroup>
                                                    <Input type={showPassword ? 'text' : 'password'} onChange={(e)=>setuserpassword2(e.target.value)} />
                                                    <InputRightElement h={'full'}>
                                                        <Button
                                                            variant={'ghost'}
                                                            onClick={() =>
                                                                setShowPassword((showPassword) => !showPassword)
                                                            }>
                                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                                        </Button>
                                                    </InputRightElement>
                                                </InputGroup>
                                            </FormControl>

                                            <Stack spacing={10} pt={2}>
                                                <Button
                                                type='submit'
                                                    loadingText="Submitting"
                                                    size="lg"
                                                    bg={'blue.400'}
                                                    color={'white'}
                                                    _hover={{
                                                        bg: 'blue.500',
                                                    }}>
                                                    Sign up
                                                </Button>
                                            </Stack>
                                        </form>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Flex>

                    </TabPanel>
                    <TabPanel>
                        <Flex
                            minH={'100vh'}
                            align={'center'}
                            justify={'center'}
                            bg={useColorModeValue('gray.50', 'gray.800')}>
                            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                                <Stack align={'center'}>
                                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
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
                                        <form action="" onSubmit={(e)=>handleLogin(e)}>
                                        <FormControl >
                                            <FormLabel>Email address</FormLabel>
                                            <Input type="email" onChange={(e)=>setloginemail(e.target.value)} />
                                        </FormControl>
                                        <FormControl >
                                            <FormLabel>Password</FormLabel>
                                            <Input type="password" onChange={(e)=>setloginpassword(e.target.value)} />
                                        </FormControl>
                                        <Stack spacing={10}>
                                            <Button
                                            type='submit'
                                                bg={'blue.400'}
                                                color={'white'}
                                                _hover={{
                                                    bg: 'blue.500',
                                                }}>
                                                Sign in
                                            </Button>
                                        </Stack>
                                        </form>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default UserAuth






