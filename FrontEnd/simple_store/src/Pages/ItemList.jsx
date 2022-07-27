import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const ItemList = ({name,qty,unit}) => {

   
  return (
    <Box bg={'whiteAlpha.500'} p={2} mt={5}  w={300} h={10} display={'flex'} justifyContent={'space-between'} gap={3}>
        <Text>{name}</Text>
        <Box display={'flex'} >
            <Text>{qty}</Text> -
            <Text>{unit}</Text>
        </Box>
       
    </Box>
  )
}

export default ItemList