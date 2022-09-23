import React, { useEffect,useState } from 'react'
import { filterApi, getApi,sortApi } from '../Store/Admin/action';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, Image, Flex, Text, Button,Select, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useToast } from '@chakra-ui/react';
const Hotel = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch();
  let data = useSelector((state) => state.admindata.data);
const [modaldata, setmodaldata] = useState({});
const toast = useToast();
console.log(data);
  const handleChange=(filter)=>
  {
    dispatch(filterApi(filter))
  }

  const handleSort=(sort)=>
  {
      dispatch(sortApi(sort));
  }
  const handleBook=()=>
  {
    toast({
      title: 'Booked Sucessfully',
      description: "Room Booked",
      status: 'success',
      duration: 4000,
      isClosable: true,
  })
  onClose();
  }
  useEffect(() => {
    dispatch(getApi());
  }, [])

 const handleClick=()=>
 { 
  onOpen();

 }
  return (
    <>
      <Flex padding="20px" w="100%"  direction="row" justifyContent="space-between">
        <Select placeholder='Filter' w="30%" onChange={(e)=>handleChange(e.currentTarget.value)}>
          <option value='family'>Family</option>
          <option value='deluxe'>Deluxe</option>
          <option value='suite'>Suite</option>
        </Select>
        <Select placeholder='Sort' w="30%" onChange={(e)=>handleSort(e.target.value)}>
          <option value='asc'>Low To Hign</option>
          <option value='desc'>High To Low</option>
        </Select>
      </Flex>
      <Grid templateColumns='repeat(2,1fr)' gap="30px">
        {data.map((el) => {
          return <Flex w="100%" key={el.id} borderRadius={"8px"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Box><Image width='400px' borderRadius={"8px"} h="250px" src={el.image_url} /></Box>
            <Box display="flex" justifyContent="left" alignitems="center" padding="20px">
              <Flex direction='column' gap='15px'>
                <Box><Text fontWeight={600} color='blue'>{(el.category).toUpperCase()} Room</Text></Box>
                <hr />
                <Box fontWeight="600" textAlign="left">
                  <Text><span>Adults: </span> {el.no_of_persons}</Text>
                  <Text><span>Capacity: </span>{el.capacity}</Text>
                  <Text><span>Bed Type: </span>{el.bed_type}</Text>
                  <Text><span>Price: </span>{el.cost}</Text>
                </Box>
                <Box>
                  <Button colorScheme="telegram" onClick={()=>{onOpen(),setmodaldata(el)}}>Book Now</Button>
                </Box>
              </Flex>
            </Box>
          </Flex>
        })}
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody padding="20px" fontSize="15px" fontWeight="600" lineHeight="30px">
            <Text>Name : XYZ</Text>
            <Text>Mobile No: 1234567890</Text>
            <Text>JD Proff: Aadhar Card - 1234 1234 1234</Text>
            <Text>Room Type: {modaldata.type_of_room}</Text>
            <Text>No of Persond : {modaldata.no_of_persons}</Text>
            <Text>Days of stay: 3</Text>
            <Text>Sub total: {modaldata.cost}/-</Text>
            <Text>GST: 200/-</Text>
            <Text>Total: {modaldata.cost+200}/-</Text>
            <Button colorScheme="telegram" marginTop="20px" onClick={handleBook}>Book</Button>
          </ModalBody>
          {/* <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  )
}

export default Hotel