import { Box, Button, Center, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { addQtyFunction, getItemList, removeItemFunction, sellQtyFunction } from '../Redux/App/actions'
import { TriangleDownIcon,TriangleUpIcon,DeleteIcon } from '@chakra-ui/icons'

const ItemPage = () => {

  const {id} = useParams() ;
  console.log(typeof(id))

  const dispatch = useDispatch() ;
  
  const stock = useSelector((state)=>state.app.itemData)
    console.log(stock) ;

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data,setData] = useState({})
  const [sellFlag,setSellFlag] = useState(false)
  const [addFlag,setAddFlag] = useState(false)
  const [removeFlag,setRemoveFlag] = useState(false)

  const [sellQty,setSellQty] = useState('') ;
  const [addQty,setAddQty] = useState('')

  useEffect(()=>{
    if(stock?.length===0)
    {
      dispatch(getItemList())
    }
  },[stock?.length,dispatch])

   useEffect(()=>{
    if(id){
      const filterItem = stock.find((el)=>el.id===Number(id))
      filterItem && setData(filterItem) ;
    }
  },[stock,id])

  const sellItem =()=>{

    const sellDataQty = {
      qty : (Number(data.qty)-Number(sellQty))
    }
    dispatch(sellQtyFunction(id,sellDataQty))
  }

  const addItem =()=>{
    const addDataQty = {
      qty : (Number(data.qty) + Number(addQty))
    }
    dispatch(addQtyFunction(id,addDataQty))
  }

  const removeItem =()=>{
      dispatch(removeItemFunction(id))
  }
  
  console.log(data)


  return (
   <Box fontFamily={'monospace'} h={800}  bgGradient="linear(to-l, #7928CA, #FF0080)">
      <Text fontSize={'5xl'} textAlign={'center'}> Name : {data.name}</Text>
      <Box display={'flex'} w={"22%"} m={'auto'}>
        <Text fontSize={'2xl'} textAlign={'center'}> Quantity : {data.qty}</Text>
        <Text fontSize={'2xl'} textAlign={'center'}>{data.unit}</Text>
      </Box>

      <Box w={"25%"} pt={8} m={'auto'}>
      <HStack>
        {!sellFlag && !addFlag && !removeFlag && <>
          <Button onClick={()=>setSellFlag(true)} colorScheme='yellow' leftIcon={<TriangleDownIcon/>}>
         SELL
        </Button>
         <Button onClick={()=>setAddFlag(true)} colorScheme='green' leftIcon={<TriangleUpIcon/>}>
         ADD
        </Button>
        <>
      <Button onClick={onOpen} colorScheme='red' leftIcon={<DeleteIcon/>}>Remove</Button>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ALERT</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <Text>Do You Really Want to Remove This Item from Stock...??</Text>
          </ModalBody>

          <ModalFooter>
           <Link to={'/'}><Button colorScheme='blue' onClick={removeItem} mr={3}>
              Yes
            </Button></Link> 
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
        </>
      }
        {sellFlag && <>
                  <Input type={'text'} onChange={(e)=>setSellQty(e.target.value)} placeholder={'enter sell quantity'}  />
                  <Link to={'/'}><Button onClick={sellItem}>SOLD</Button></Link>
                  </>
        }

        {addFlag && <> 
                  <Input type={'text'} onChange={(e)=>setAddQty(e.target.value)} placeholder={'enter add quantity'}  />
                  <Link to={'/'}><Button onClick={addItem}>ADD</Button></Link>
                  </> 
        }

        {removeFlag && <> 
                
            </> 
        }
       
       
      </HStack>

      </Box>
     
      
      

   </Box>
  )
}

export default ItemPage