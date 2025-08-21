<script>
  import * as Keys from './Key.svelte';
  import Log from "./Log.svelte";
  import LogDisplay from "./LogDisplay.svelte"
  import TrashIcon from "./TrashIcon.svelte";
  import LogControls from "./LogControls.svelte";
  import EmptyAnimation from './EmptyAnimation.svelte'

  const { s } = $props()

  let logs = $state()
  let removeMode = $state(false)

</script>

<LogControls {s} bind:logs bind:removeMode />

<LogDisplay {logs} {removeMode}/>

{#if !logs}
  <EmptyAnimation/>
{/if}
