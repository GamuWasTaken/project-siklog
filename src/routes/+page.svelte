<script>
  import { appState } from '$lib/state.svelte.js'
  import KeyPad from '$lib/components/KeyPad.svelte';
  import LogPad from '$lib/components/LogPad.svelte';

  const s = appState()

</script>

<KeyPad {s} />
<hr/>
<LogPad {s} />

<style>

</style>
