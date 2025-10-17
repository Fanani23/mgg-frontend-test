import React, { useState } from 'react'
import ProductsPage from '../../components/product/page'

const Products = () => {
 const [product, setProduct] = useState({
  title: '',
  handle: '',
  vendor: '',
  image: '',
  price: '',
 })
 const [products, setProducts] = useState([])
 const [isLoading, setIsLoading] = useState(false)
 const [errors, setErrors] = useState('')
 const [error, setError] = useState('')

 const [query, setQuery] = useState('')

 const states = {
  product,
  setProduct,
  products,
  setProducts,
  isLoading,
  setIsLoading,
  error,
  setError,
  errors,
  setErrors,
  query,
  setQuery,
 }

 return (
  <>
   <ProductsPage states={states} />
  </>
 )
}

export default Products
