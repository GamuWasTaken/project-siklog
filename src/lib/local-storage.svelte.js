
import { onMount } from "svelte";

export function localStore(key, initial) {
  let state = $state(initial)

  onMount(() => {
    const stored = localStorage[key]
    if(stored) state = JSON.parse(stored)

    $effect(() => {
      localStorage[key] = JSON.stringify(state)
    })
  })

  return () => state
}
