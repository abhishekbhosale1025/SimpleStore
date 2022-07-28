import { Box, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ItemList = ({id,name,qty,unit,status}) => {

  useEffect(()=>{

  },[])

   
  return (
    <Link to={`/item/${id}`}>
    <Box rounded={8} bg={'whiteAlpha.800'} p={3} mt={5} ml={-14} w={400} display={'flex'} justifyContent={'space-between'} gap={3}>
        <Text>{name}</Text>
        <Box display={'flex'} >
            <Text>{qty}</Text> -
            <Text>{unit}</Text>
            <Box ml={14} display={'flex'}>
            {status==="red"  ? <Box m={1} h={5} bg={'red'} w={5} rounded={'50%'}></Box>
                              : <Box m={1} h={5} bg={'white'} w={5} rounded={'50%'}></Box> }
                              
            {status==="yellow" ? <Box m={1}  h={5} bg={'yellow'} w={5} rounded={'50%'}></Box>
                              : <Box m={1} h={5} bg={'white'} w={5} rounded={'50%'}></Box> }

            {status==="green" ? <Box m={1} h={5} bg={'green'} w={5} rounded={'50%'}></Box>
                              : <Box m={1} h={5} bg={'white'} w={5} rounded={'50%'}></Box> }
          </Box>
        </Box>
    </Box>
    </Link>
  )
}

export default ItemList