
import { dev } from '$app/environment'
import { asset } from '$app/paths'

export const registerServiceWorker = () => {
  navigator.serviceWorker.register(asset('./cache-worker.js'), {
    type: dev ? 'module' : 'classic'
  })
}
