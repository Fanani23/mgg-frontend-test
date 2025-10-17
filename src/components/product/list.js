import { useEffect } from 'react'
import TableProducts from './table'
import { getProducts } from '../../hooks/products/get'

const ProductList = ({ states }) => {
 useEffect(() => {
  if (states.isFetch) {
   getProducts({ states })
   states.setIsFetch(false)
  }
 }, [states, states.products])

 if (states.isLoading) {
  return (
   <>
    <div className="card">
     <div className="card-body text-center">
      <div className="spinner-border" role="status">
       <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-2 mb-0">Loading products...</p>
     </div>
    </div>
   </>
  )
 }

 return (
  <>
   <div className="card">
    <div className="card-header bg-light">
     <div className="d-flex justify-content-between align-items-center">
      <h5 className="card-title mb-0">Product List</h5>
      <span className="badge bg-primary">
       {states.products?.length} Products
      </span>
     </div>
    </div>
    <div className="card-body p-0">
     {states.products?.length === 0 ? (
      <>
       <div className="text-center p-4">
        <p className="text-muted mb-0">No products found.</p>
       </div>
      </>
     ) : (
      <>
       <TableProducts states={states} />
      </>
     )}
    </div>
   </div>
  </>
 )
}

export default ProductList
