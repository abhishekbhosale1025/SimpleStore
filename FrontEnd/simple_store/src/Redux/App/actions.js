import { ADD_ITEM_FAILURE, ADD_ITEM_REQUEST, ADD_ITEM_SUCCESS, SOLD_ITEM_FAILURE, SOLD_ITEM_REQUEST, SOLD_ITEM_SUCCESS } from "./actionTypes";
import axios from 'axios';

export const addItemRequest = ()=>({
    type : ADD_ITEM_REQUEST 
})

export const addItemSuccess = (data)=>({
    type : ADD_ITEM_SUCCESS,
    payload : data
})
export const addItemFailure = ()=>({
    type : ADD_ITEM_FAILURE
})

export const soldItemRequest = ()=>({
    type : SOLD_ITEM_REQUEST 
})

export const soldItemSuccess = (data)=>({
    type : SOLD_ITEM_SUCCESS,
    payload : data
})
export const soldItemFailure = ()=>({
    type : SOLD_ITEM_FAILURE
})


export const addItemToList = (payload) => (dispatch)=>{
    dispatch(addItemRequest())
    axios.post('http://localhost:5050/items',payload)
    .then((r)=>{
        console.log(r.data)
        dispatch(addItemSuccess(r.data))
        dispatch(getItemList())
    })
    .catch((e)=>{
        console.log(e) ;
        dispatch(addItemFailure())
    })
}

export const getItemList =(payload) => (dispatch)=>{
    dispatch(addItemRequest())
    axios.get('http://localhost:5050/items')
    .then((r)=>{
        console.log(r.data)
        dispatch(addItemSuccess(r.data))
    })
    .catch((e)=>{
        console.log(e) ;
        dispatch(addItemFailure())
    })
}

export const sellQtyFunction=(id,sellqty)=>(dispatch)=>{
    dispatch(soldItemRequest())
    axios.patch(`http://localhost:5050/items/${id}`,sellqty)
    .then((r)=>{
        //dispatch(soldItemSuccess(r.data))
        dispatch(getItemList())
    })
    .catch((e)=>{
        console.log(e)
        dispatch(soldItemFailure())
    })
}

export const addQtyFunction=(id,addqty)=>(dispatch)=>{
    dispatch(addItemRequest())
    axios.patch(`http://localhost:5050/items/${id}`,addqty)
    .then((r)=>{
        //dispatch(soldItemSuccess(r.data))
        dispatch(getItemList())
    })
    .catch((e)=>{
        console.log(e)
        dispatch(addItemFailure())
    })
}

export const removeItemFunction =(id)=>(dispatch)=>{

    axios.delete(`http://localhost:5050/items/${id}`)
    .then((r)=>{
        dispatch(getItemList())
    })
    .catch((e)=>{
        console.log(e)
    })
}
