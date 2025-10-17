export function validateForm({ states }) {
 const newErrors = {}

 if (!states.product?.title?.trim()) {
  newErrors.title = 'Title is required'
 }

 if (!states.product?.handle?.trim()) {
  newErrors.handle = 'Handle is required'
 } else if (!/^[a-z0-9-]+$/.test(states.product?.handle)) {
  newErrors.handle =
   'Handle can only contain lowercase letters, numbers, and hyphens'
 }

 if (!states.product?.vendor.trim()) {
  newErrors.vendor = 'Vendor is required'
 }

 if (!states.product?.price || parseFloat(states.product?.price) <= 0) {
  newErrors.price = 'Valid price is required'
 }

 states.setErrors(newErrors)
 return Object.keys(newErrors).length === 0
}
