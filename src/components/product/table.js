import { deleteProduct } from '../../hooks/products/delete'
import { getProductByID } from '../../hooks/products/get'

const TableProducts = ({ states }) => {
 function handleEdit(id) {
  states.setError('')
  states.product.id = id
  getProductByID({ states })
 }

 function handleDelete(id) {
  states.product.id = id
  if (window.confirm('Are you sure you want to delete this product?')) {
   deleteProduct({ states })
  }
 }

 return (
  <>
   <div className="table-responsive">
    <table className="table table-hover mb-0">
     <thead className="table-light">
      <tr>
       <th width="80">Image</th>
       <th>Title</th>
       <th>Vendor</th>
       <th>Price</th>
       <th>Handle</th>
       <th width="120">Actions</th>
      </tr>
     </thead>
     <tbody>
      {states.products?.map((product) => (
       <>
        <tr key={product?.id}>
         <td>
          {product?.image ? (
           <img
            src={product?.image}
            alt={product?.title}
            className="product-image"
            onError={(e) => {
             e.target.src = 'https://via.placeholder.com/50x50?text=No+Image'
            }}
           />
          ) : (
           <div className="product-placeholder">No Image</div>
          )}
         </td>
         <td>
          <div>
           <strong>{product?.title}</strong>
          </div>
         </td>
         <td>
          <span className="badge bg-secondary">{product?.vendor}</span>
         </td>
         <td>
          <strong className="text-success">${product?.price}</strong>
         </td>
         <td>
          <code>{product?.handle}</code>
         </td>
         <td>
          <div className="btn-group btn-group-sm" role="group">
           <button
            className="btn btn-outline-primary"
            onClick={() => handleEdit(product.id)}
            title="Edit Product"
           >
            ✏️
           </button>
           <button
            className="btn btn-outline-danger"
            onClick={() => handleDelete(product.id)}
            title="Delete product"
           >
            🗑️
           </button>
          </div>
         </td>
        </tr>
       </>
      ))}
     </tbody>
    </table>
   </div>
  </>
 )
}

export default TableProducts
