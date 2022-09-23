import React, { useState } from 'react';
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
    Select,
    RadioGroup,
    Radio,
    TableContainer,
    Table,
    TableCaption,
    Thead,
    Tr,
    Th,
    Tbody,
    Td

} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { postApi, getApi,deleteApi } from '../Store/Admin/action';
import { useEffect } from 'react';

const Admin = () => {

    const [category, setcategory] = useState("");
    const [image, setimage] = useState("");
    const [room_type, setroom_type] = useState();
    const [bedtype, setbedtype] = useState("");
    const [adults, setadults] = useState(0);
    const [capacity, setcapacity] = useState(0);
    const [cost, setcost] = useState(0);




    let dispatch = useDispatch();
    let data = useSelector((state) => state.admindata.data);
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            "category": category,
            "image_url": image,
            "type_of_room": room_type,
            "bed_type": bedtype,
            "no_of_persons": +adults,
            "capacity": +capacity,
            "cost": +cost,
            "booked": false,
        }
        dispatch(postApi(data)).then(() => dispatch(getApi()))
    }

    const handleDelete=(id)=>
    {
        dispatch(deleteApi(id)).then(() => dispatch(getApi()));
    }

    useEffect(() => {
        dispatch(getApi());
    }, [])


    return (
        <>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} width="40%" py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Admin Side</Heading>
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
                            <form action="" onSubmit={(e) => handleSubmit(e)}>
                                <FormControl id="category">
                                    <FormLabel>Category</FormLabel>
                                    <Select placeholder='Category' required onChange={(e) => setcategory(e.target.value)}>
                                        <option value='family'>Family</option>
                                        <option value='deluxe'>Deluxe</option>
                                        <option value='suite'>Suite</option>
                                    </Select>
                                </FormControl>
                                <FormControl id="image" onChange={(e) => setimage(e.target.value)}>
                                    <FormLabel>Image</FormLabel>
                                    <Input type="text" required />
                                </FormControl>
                                <RadioGroup required onChange={(e) => setroom_type(e)}>
                                    {/* onChange={setValue} value={value} */}
                                    <Stack direction='row'>
                                        <Radio value='ac'>Ac</Radio>
                                        <Radio value='non ac'>Non Ac</Radio>
                                    </Stack>
                                </RadioGroup>
                                <FormControl id="bed" >
                                    <FormLabel>Bed Type</FormLabel>
                                    <Select placeholder='Bed Type' required onChange={(e) => setbedtype(e.target.value)}>
                                        <option value='single'>Single</option>
                                        <option value='double'>Double</option>
                                    </Select>
                                </FormControl>
                                <FormControl id="no_of_adults">
                                    <FormLabel>No of Adults</FormLabel>
                                    <Input required type="number" onChange={(e) => setadults(e.target.value)} />
                                </FormControl>
                                <FormControl id="capacity">
                                    <FormLabel>Max Capacity</FormLabel>
                                    <Input required type="number" onChange={(e) => setcapacity(e.target.value)} />
                                </FormControl>
                                <FormControl id="cost">
                                    <FormLabel>Cost per night</FormLabel>
                                    <Input required type="number" onChange={(e) => setcost(e.target.value)} />
                                </FormControl>
                                <Stack spacing={10}>
                                    <Button
                                    marginTop="20px"
                                        type='submit'
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                        }}>
                                        Submit
                                    </Button>
                                </Stack>
                            </form>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            <Th>Category</Th>
                            <Th>Type of Room</Th>
                            <Th>Bed type</Th>
                            <Th>No of persons</Th>
                            <Th>Capacity</Th>
                            <Th>Cost</Th>
                            <Th>Status</Th>
                            <Th>Edit</Th>
                            <Th>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            data.map((el) => {
                                return <Tr key={el.id}>
                                    <Td>{el.id}</Td>
                                    <Td>{el.category}</Td>
                                    <Td>{el.type_of_room}</Td>
                                    <Td>{el.bed_type}</Td>
                                    <Td>{el.no_of_persons}</Td>
                                    <Td>{el.capacity}</Td>
                                    <Td>{el.cost}</Td>
                                    <Td>{el.booked}</Td>
                                    <Td><Button>Edit</Button></Td>
                                    <Td><Button onClick={()=>handleDelete(el.id)}>Delete</Button></Td>
                                </Tr>
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>

        </>);

}

export default Admin