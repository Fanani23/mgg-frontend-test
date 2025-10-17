import productAPI from '../../api/product'
import { getProducts } from './get'

export async function updateProduct({ states }) {
 states.setError('')

 try {
  await productAPI.update(states.product?.id, states.product)
  await getProducts({ states })
 } catch (e) {
  console.error(e)
  states.setError(
   e?.response?.data || 'Failed to update product. Please try again.'
  )
 } finally {
  states.setProduct({
   title: '',
   handle: '',
   vendor: '',
   image: '',
   price: '',
  })
  states.setIsUpdate(false)
 }
}
