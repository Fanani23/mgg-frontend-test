import { createProduct } from '../../hooks/products/create'
import { validateForm } from '../../utils/product/validateForm'

const ProductForm = ({ states }) => {
 function handleChange(e) {
  const { name, value } = e.target

  states.setProduct((prev) => ({
   ...prev,
   [name]: value ?? '',
  }))

  if (states.errors?.[name]) {
   states.setErrors((prev) => ({ ...prev, [name]: '' }))
  }
 }

 function handleSubmit(e) {
  e.preventDefault()

  if (!validateForm({ states })) {
   return
  }

  states.product.price = parseFloat(states.product?.price)

  createProduct({ states })
 }

 function generateHandle() {
  if (states.product?.title && !states.product?.handle) {
   const handle = states.product.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

   states.setProduct((prev) => ({ ...prev, handle }))
  }
 }

 function handleCancel() {
  states.setError('')
  states.setProduct({
   title: '',
   handle: '',
   vendor: '',
   image: '',
   price: '',
  })
 }

 return (
  <>
   <div className="card">
    <div className="card-header bg-light">
     <h5 className="card-title mb-0">
      {states.isUpdate ? 'Edit Product' : 'Add New Product'}
     </h5>
    </div>
    <div className="card-body">
     <form onSubmit={handleSubmit}>
      <div className="mb-3">
       <label htmlFor="title" className="form-label">
        Product Title *
       </label>
       <input
        type="text"
        className={`form-control ${states.errors?.title ? 'is-invalid' : ''}`}
        id="title"
        name="title"
        value={states.product?.title}
        onChange={handleChange}
        onBlur={generateHandle}
        placeholder="Enter product title"
        disabled={states.isLoading}
       />
       {states.errors?.title && (
        <div className="invalid-feedback">{states.errors?.title}</div>
       )}
      </div>

      <div className="mb-3">
       <label htmlFor="handle" className="form-label">
        Handle *
       </label>
       <input
        type="text"
        className={`form-control ${states.errors?.handle ? 'is-invalid' : ''}`}
        id="handle"
        name="handle"
        value={states.product?.handle}
        onChange={handleChange}
        placeholder="product-handle-name"
        disabled={states.isLoading}
       />
       {states.errors?.handle && (
        <div className="invalid-feedback">{states.errors?.handle}</div>
       )}
       <div className="form-text">
        Unique URL-friendly identifier (lowercase, numbers, hyphens)
       </div>
      </div>

      <div className="mb-3">
       <label htmlFor="vendor" className="form-label">
        Vendor *
       </label>
       <input
        type="text"
        className={`form-control ${states.errors?.vendor ? 'is-invalid' : ''}`}
        id="vendor"
        name="vendor"
        value={states.product?.vendor}
        onChange={handleChange}
        placeholder="Enter vendor name"
        disabled={states.isLoading}
       />
       {states.errors?.vendor && (
        <div className="invalid-feedback">{states.errors?.vendor}</div>
       )}
      </div>

      <div className="mb-3">
       <label htmlFor="image" className="form-label">
        Image URL
       </label>
       <input
        type="url"
        className="form-control"
        id="image"
        name="image"
        value={states.product?.image}
        onChange={handleChange}
        placeholder="https://example.com/image.jpg"
        disabled={states.isLoading}
       />
      </div>

      <div className="mb-3">
       <label htmlFor="price" className="form-label">
        Price *
       </label>
       <div className="input-group">
        <span className="input-group-text">$</span>
        <input
         type="number"
         step="0.01"
         min="0"
         className={`form-control ${states.errors?.price ? 'is-invalid' : ''}`}
         id="price"
         name="price"
         value={states.product?.price}
         onChange={handleChange}
         placeholder="0.00"
         disabled={states.isLoading}
        />
        {states.errors?.price && (
         <div className="invalid-feedback">{states.errors?.price}</div>
        )}
       </div>
      </div>

      <div className="d-grid gap-2">
       <button
        type="submit"
        className="btn btn-primary"
        disabled={states.isLoading}
       >
        {states.isLoading ? (
         <>
          <span
           className="spinner-border spinner-border-sm me-2"
           role="status"
          ></span>
          {states.isUpdate ? 'Updating...' : 'Creating...'}
         </>
        ) : states.isUpdate ? (
         'Update Product'
        ) : (
         'Create Product'
        )}
       </button>

       {states.product.id && (
        <button
         type="button"
         className="btn btn-secondary"
         onClick={handleCancel}
         disabled={states.isLoading}
        >
         Cancel
        </button>
       )}
      </div>
     </form>
    </div>
   </div>
  </>
 )
}

export default ProductForm
