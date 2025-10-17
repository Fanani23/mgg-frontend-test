import ProductForm from './form'
import ProductList from './list'
import SearchProduct from './search'

const ProductsPage = ({ states }) => {
 function handleClose() {
  states.setError('')
 }

 return (
  <>
   <div className="App">
    <div className="container-fluid">
     <div className="row">
      <div className="col-12">
       <header className="bg-primary text-white p-3 mb-4">
        <h1 className="h3 mb-0">Product Management System</h1>
        <p className="mb-0">
         Full-Stack CRUD Application with Spring Boot & React
        </p>
       </header>
      </div>
     </div>

     {states.error && (
      <div className="row">
       <div className="col-12">
        <div
         className="alert alert-danger alert-dismissible fade show"
         role="alert"
        >
         {states.error}
         <button
          type="button"
          className="btn-close"
          onClick={handleClose}
         ></button>
        </div>
       </div>
      </div>
     )}

     <div className="row">
      <div className="col-md-4 mb-4">
       <ProductForm states={states} />
      </div>

      <div className="col-md-8">
       <SearchProduct states={states} />
       <ProductList states={states} />
      </div>
     </div>
    </div>
   </div>
  </>
 )
}

export default ProductsPage
