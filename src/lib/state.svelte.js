
import { localStore } from '$lib/local-storage.svelte.js'

export const appState = () => {

  const keys = localStore('__keys', [])

  const logs = $derived(keys().reduce(
    (acc, key) => {
      acc[key.name] = localStore(key.name, [])
      return acc
    },
    {}
  ))

  return {
    get keys() { return keys() },
    get logs() { return logs },
  }
}
