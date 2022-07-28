import {
  Box,
  Button,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToList, getItemList } from "../Redux/App/actions";
import ItemList from "./ItemList";

const HomePage = () => {

    const stock = useSelector((state)=>state.app.itemData)
    console.log(stock) ;

  const [name, setName] = useState("");
  const [qty, setQty] = useState(0);
  const [unit, setUnit] = useState("");

  const dispatch = useDispatch();

  useEffect(()=>{
        dispatch(getItemList())
  },[dispatch])

  const handleAdd = () => {

    console.log(typeof(qty))
    let itemData = {
      name: name,
      qty: qty,
      unit: unit,
    };

    dispatch(addItemToList(itemData));
    setName("")
    setQty(0)
    setUnit("")
  };

  const handleChange = (qty) => setQty(qty)

  return (
    <>
      <Box
        display={"flex"}
        height="auto"
        width="100%"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
      >
        <Box width={"75%"}>
          <Text fontSize="5xl" textAlign={"center"}>
            SimpleStore
          </Text>
          <Box>
            <Input
              width={300}
              mt={10}
              ml={"320px"}
              color="teal"
              placeholder="search here..."
              _placeholder={{ color: "inherit" }}
            />
          </Box>
          <Box w={"50%"} display={"flex"} ml={60} mt={19} gap={2}>
            <Input
              onChange={(e) => setName(e.target.value)}
              width={200}
              m={"auto"}
              type={"text"}
              placeholder={"write name..."}
            />
             <NumberInput size="md"  placeholder={"write quantity..."}  width={220}  onChange={handleChange} defaultValue={qty} min={1}>
                <NumberInputField />
                <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            {/* <NumberInput
                max={4}
                defaultvalue={qty}
                placeholder={"write quantity..."}
                keepWithinRange={false}
                clampValueOnBlur={false}
                width={220}
                onChange={handleChange}
                >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput> */}
            {/* <NumberInput
              }
             
              m={"auto"}
              type={"number"}
              
            /> */}
             <Select variant='outline' onChange={(e)=>setUnit(e.target.value)} placeholder='Select Unit'>
                <option value={'KG'}>KG</option>
                <option value={'LTR'}>LTR</option>
                <option value={'PCS'}>PCS</option>
            </Select>            {/* <Input
              onChange={(e) => setUnit(e.target.value)}
              width={150}
              m={"auto"}
              type={"text"}
              placeholder={"write unit..."}
            /> */}
            <Button onClick={handleAdd} colorScheme="whatsapp">
              ADD
            </Button>
          </Box>
            <Box w={'32%'} mt={5} ml={320}>
                <Text fontSize={'2xl'} textAlign={'center'}>YOUR ITEMS</Text>
                {stock?.map((el)=>(
                     <ItemList key={el.id} {...el} />
                ))}
                
            </Box>
        </Box>

        <Box>
          <Text pl={9} pt={10} fontSize={"large"}>
            {" "}
            STOCK STATUS
          </Text>
          <RadioGroup ml={2} mt={5} defaultValue="4">
            <Stack spacing={5} direction="column">
              <Radio size={"lg"} colorScheme="white" value="1">
                All List
              </Radio>
              <Radio size={"lg"} colorScheme="red" value="2">
                Minimum Stock List
              </Radio>
              <Radio size={"lg"} colorScheme="yellow" value="3">
                Running Stock List
              </Radio>
              <Radio size={"lg"} colorScheme="green" value="4">
                Full Stock List
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
