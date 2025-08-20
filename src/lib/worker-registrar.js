
export const registerServiceWorker = async path => {
  if (!('serviceWorker' in navigator)) return

  try {
    const registration = await navigator.serviceWorker.register(path, {
      scope: '/'
    })

    if (registration.installing) {
      console.log("SW installing")
    } else if (registration.waiting) {
      console.log('SW installed')
    } else if (registration.active) {
      console.log('SW active :)')
    }
  } catch (e) {
    console.error(`SW error: ${e}`)
  }
}
