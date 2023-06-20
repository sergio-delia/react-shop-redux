import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

import axios from 'axios';
import { useEffect } from 'react';

function ProductListing() {

    const products = useSelector((state) => state);
    console.log("Prodotti", products);

    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => console.log(err))
        console.log(response.data);
        dispatch(setProducts(response.data))
    }


    useEffect(() => {
        fetchProducts()
    }, [])
    


  return (
    <>
    <div className='ui grid container'>
        <ProductComponent />
    </div>
    </>
  )
}

export default ProductListing