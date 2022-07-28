import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ItemPage from '../Pages/ItemPage'

const Mainroutes = () => {
  return (
    
    <Routes>
        <Route path='/' element={<HomePage></HomePage>} />
        <Route path='/item/:id' element={<ItemPage></ItemPage>} />
    </Routes>
  )
}

export default Mainroutes