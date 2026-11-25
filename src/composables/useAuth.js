import { ref } from 'vue'

const loggedIn = ref(localStorage.getItem('loggedIn') === 'true')

function login() {
  loggedIn.value = true
  localStorage.setItem('loggedIn', 'true')
}

function logout() {
  loggedIn.value = false
  localStorage.removeItem('loggedIn')
}

export function useAuth() {
  return { loggedIn, login, logout }
}
