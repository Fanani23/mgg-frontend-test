import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Products from '../pages/product'

const Router = () => {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Navigate to="/products" replace />} />
    <Route path="/products" element={<Products />} />
   </Routes>
  </BrowserRouter>
 )
}

export default Router
