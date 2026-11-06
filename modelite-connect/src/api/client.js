import axios from 'axios'

// Frontend phase: this client is deliberately pointed at a local mock boundary.
// Replace baseURL and mock functions when the Django API is introduced.
export const api = axios.create({ baseURL: '/api', timeout: 8000, headers: { 'Content-Type': 'application/json' } })

export const demoAuth = {
  async signIn(email, role) { await new Promise(resolve => setTimeout(resolve, 350)); return { email, role } },
}
