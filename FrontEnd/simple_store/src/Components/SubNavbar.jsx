import { Box, Button } from '@chakra-ui/react'
import React from 'react'


const SubNavbar = () => {
    
  return (
    <Box display="flex" justifyContent="space-between"  p={2} pl={8} bg={"lightgreen"} >
                <img width={"280px"} style={{margin:"20px"}} src={require("../Utils/images/logo.png")} />
				{/* <Box fontSize={"4xl"} fontFamily={" sans-serif"}>Simple Store</Box> */}
	</Box>
  )
}

export default SubNavbar