import { ref } from 'vue'

function loadCart() {
  try {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]')
    return Array.isArray(storedCart) ? storedCart : []
  } catch {
    return []
  }
}

const cart = ref(loadCart())

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart.value))
}

function addToCart(fish) {
  const existingItem = cart.value.find((item) => item.id === fish.id)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.value.push({
      ...fish,
      quantity: 1,
    })
  }

  saveCart()
}

function clearCart() {
  cart.value = []
  localStorage.removeItem('cart')
}

export function useCart() {
  return { cart, addToCart, clearCart }
}
