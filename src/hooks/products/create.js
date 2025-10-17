import productAPI from '../../api/product'
import { getProducts } from './get'

export async function createProduct({ states }) {
 states.setError('')

 try {
  await productAPI.create(states.product)
  await getProducts({ states })
 } catch (e) {
  console.error(e)
  states.setError(
   e?.response?.data || 'Failed to create product. Please try again.'
  )
 } finally {
  states.setProduct({
   title: '',
   handle: '',
   vendor: '',
   image: '',
   price: '',
  })
 }
}
