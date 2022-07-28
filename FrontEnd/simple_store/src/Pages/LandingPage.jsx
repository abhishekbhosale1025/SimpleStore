import React from "react";
import { Box, Button, Image, requiredChakraThemeKeys } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/login")
    }

    const handleSignUp = () => {
        navigate("/signup")
    }
	return (
		<>
            <Box display="flex" justifyContent="space-around" alignItems="center" >
                
				<Box fontSize={"4xl"} fontFamily={" sans-serif"}>Simple Store</Box>
				<Box width={200} display="flex" justifyContent="space-around">
					<Button onClick={handleSignIn} colorScheme="red">Sign-In</Button>
					<Button onClick={handleSignUp} colorScheme="red">Sign-Up</Button>
				</Box>
			</Box>

            <Box display="flex" >
                <Box>
                    <Box fontSize="30px" fontWeight={"700"} w={600} mt={"80px"} ml={"100px"} textAlign={"center"}>
                        Are You Tired of Managing Your Inventory/Resources?
                    </Box>
                    <Box fontSize="24px" fontWeight={"500"} w={600} mt={"40px"} ml={"100px"} textAlign={"center"}>
                        Here We Brings The Solution For Your Resource Management 
                    </Box>

                    {/* Solutions */}

                    <Box display="flex" w={"600px"} ml={"90px"} mt="30px" fontSize="16px" fontWeight={"600"} alignItems="center">
                        <Image  h={"30px"} w={"30px"} mr={5} src="https://cdn-icons.flaticon.com/png/512/4436/premium/4436481.png?token=exp=1659023040~hmac=340aea941fb245090c50354d7cd0251d" />
                        
                        Spend No More Time To Re-evaluate Your Inventory/Stock
                    </Box>
                    <Box display="flex" w={"600px"} ml={"90px"} mt="10px" fontSize="16px" fontWeight={"600"} alignItems="center">
                        <Image  h={"30px"} w={"30px"} mr={5} src="https://cdn-icons.flaticon.com/png/512/4436/premium/4436481.png?token=exp=1659023040~hmac=340aea941fb245090c50354d7cd0251d" />
                        Get Automated & Latest Inventory Requirement as per Current Stock Requirement 
                    </Box>
                    <Box display="flex" w={"600px"} ml={"90px"} mt="10px" fontSize="16px" fontWeight={"600"} alignItems="center">
                        <Image  h={"30px"} w={"30px"} mr={5} src="https://cdn-icons.flaticon.com/png/512/4436/premium/4436481.png?token=exp=1659023040~hmac=340aea941fb245090c50354d7cd0251d" />
                        Get an Alert When Stocks Goes Below Minimum Requirement
                    </Box>
                </Box>
                <Box ml={"50px"} mt={"80px"}>

                    <Image h={400} src="https://media.istockphoto.com/photos/3d-render-man-cartoon-character-with-growing-chart-green-arrow-goes-picture-id1279138405?b=1&k=20&m=1279138405&s=170667a&w=0&h=NFuIV8X3NumGrYeqfiV1ipA7iDnPg0VhU5qXOK8tu0U="/>
                </Box>
            </Box>

            <Box display="flex" w={"600px"} ml={"90px"} mt="10px" fontSize="20px" fontWeight={"600"} alignItems="center">
                Click On The Button To Grow Faster
                <Button onClick={handleSignUp} ml={2} colorScheme="red">Sign-Up</Button>
            </Box>
		</>
	);
};

export default LandingPage;
