import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Select, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const HomeNav = () => {
    const navigate = useNavigate();

    const shopName = JSON.parse(localStorage.getItem("ShopName"))

    // const handleSignIn = () => {
    //     navigate("/login")
    // }

    // const handleSignUp = () => {
    //     navigate("/signup")
    // }
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p={2} pl={8} pr={8} bg={"transperent"} >
                <img width={"280px"} style={{margin:"20px"}} src={require("../Utils/images/logo.png")} alt={''} />
				{/* <Box fontSize={"4xl"} fontFamily={" sans-serif"}>Simple Store</Box> */}
				<Box width={200} display="flex" justifyContent="space-around">
        <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {shopName}
        </MenuButton>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <Link to={'/'}><MenuItem>Logout</MenuItem></Link>
        </MenuList>
</Menu>
          {/* //<Text fontSize={'2xl'} fontWeight={'bold'}>{shopName}</Text> */}
					{/* <Button onClick={handleSignIn} colorScheme="red">Sign-In</Button>
					<Button onClick={handleSignUp} colorScheme="red">Sign-Up</Button> */}
				</Box>
	</Box>
  )
}

export default HomeNav