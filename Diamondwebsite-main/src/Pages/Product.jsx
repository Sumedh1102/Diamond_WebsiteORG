import { div } from 'framer-motion/client'
import React from 'react'
import Header from '../Product/Header'
import Products from '../Product/Products'
import Grid from '../Product/Grid'    
import Shop from '../Home/Shop'    
    
const Product = () => {
  return (
    <div>
    <Header/>
    <Products/>
    <Shop/>
    <Grid/>
    </div>
  )
}

export default Product