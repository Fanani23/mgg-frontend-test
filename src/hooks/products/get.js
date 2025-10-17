import productAPI from '../../api/product'

export async function getProducts({ states }) {
 states.setIsLoading(true)
 states.setError('')

 try {
  let products = await productAPI.get()
  products = products?.data

  states.setProducts(products)
 } catch (e) {
  console.error(e)
  states.setError('Failed to get products. Please try again.')
 } finally {
  states.setIsLoading(false)
 }
}

export async function getProductByID({ states }) {
 states.setIsLoading(true)
 states.setError('')

 try {
  let product = await productAPI.getByID(states.product.id)
  product = product?.data

  states.setProduct(product)
 } catch (e) {
  console.error(e)
  states.setError('Failed to get product by ID. Please try again.')
 } finally {
  states.setIsLoading(false)
 }
}

export async function searchProduct({ states }) {
 if (states.query === '') {
  setTimeout(() => getProducts({ states }), 0)
  return
 }

 states.setIsLoading(true)
 states.setError('')

 try {
  let products = await productAPI.search(states.query)
  products = products?.data || []

  states.setProducts(products)
 } catch (e) {
  console.error(e)
  states.setError('Failed to search products. Please try again.')
 } finally {
  states.setIsLoading(false)
 }
}
