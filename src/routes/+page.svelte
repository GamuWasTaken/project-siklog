<script>
  import { appState } from '$lib/state.svelte.js'
  import { registerServiceWorker } from '$lib/worker-registrar'
  import KeyPad from '$lib/components/KeyPad.svelte';
  import LogPad from '$lib/components/LogPad.svelte';
    import { onMount } from 'svelte';

  const s = appState()

  onMount(registerServiceWorker)

</script>

<KeyPad {s} />
<hr/>
<LogPad {s} />

<style>

hr {
  margin: 10px 30px;
}

</style>
