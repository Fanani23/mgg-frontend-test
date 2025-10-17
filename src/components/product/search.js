import { useRef } from 'react'
import { searchProduct, getProducts } from '../../hooks/products/get'

const SearchProduct = ({ states }) => {
 const debounceRef = useRef(null)

 function handleSubmit(e) {
  e.preventDefault()
  searchProduct({ states })
 }

 function handleChange(e) {
  const value = e.target.value
  states.setQuery(value)

  if (debounceRef.current) clearTimeout(debounceRef.current)

  debounceRef.current = setTimeout(() => {
   if (value.trim() === '') {
    getProducts({ states })
   } else {
    searchProduct({ states })
   }
  }, 2000)
 }

 function handleClear() {
  states.setQuery('')
  getProducts({ states })
 }

 return (
  <div className="card mb-4">
   <div className="card-body">
    <form onSubmit={handleSubmit}>
     <div className="input-group">
      <input
       type="text"
       className="form-control"
       placeholder="Search products by title, vendor, or handle..."
       value={states.query}
       onChange={handleChange}
       disabled={states.isLoading}
      />
      {states.query && (
       <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={handleClear}
        disabled={states.isLoading}
       >
        ✕
       </button>
      )}
      <button
       className="btn btn-primary"
       type="submit"
       disabled={states.isLoading}
      >
       {states.isLoading ? (
        <span className="spinner-border spinner-border-sm" role="status"></span>
       ) : (
        'Search'
       )}
      </button>
     </div>
    </form>
   </div>
  </div>
 )
}

export default SearchProduct
