import productAPI from '../../api/product'
import { getProducts } from './get'

export async function deleteProduct({ states }) {
 console.log(states.product)
 states.setError('')

 try {
  await productAPI.delete(states.product?.id)
  await getProducts({ states })
 } catch (e) {
  console.error(e)
  states.setError('Failed to delete product. Please try again.')
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
