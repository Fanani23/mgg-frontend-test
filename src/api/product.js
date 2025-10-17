import axios from 'axios'
import { BASE_URL } from './helper/url/base'
import { endpoints } from './helper/endpoints'

const api = axios.create({
 baseURL: BASE_URL?.v1,
 headers: {
  'Content-Type': 'application/json',
 },
})

export const productAPI = {
 get: () => api.get(endpoints?.product?.main),
 getByID: (id) => api.get(`${endpoints?.product?.main}/${id}`),
 getByVendor: (vendor) =>
  api.get(`${endpoints?.product?.main}/vendor/${vendor}`),
 create: (product) => api.post(endpoints?.product?.main, product),
 update: (id, product) => api.put(`${endpoints?.product?.main}/${id}`, product),
 delete: (id) => api.delete(`${endpoints?.product?.main}/${id}`),
 search: (query) => api.get(`${endpoints?.product?.main}/search?q=${query}`),
}

export default productAPI
