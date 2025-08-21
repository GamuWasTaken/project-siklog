<script>
  import Log from "./Log.svelte";
  import Toggle from "./Toggle.svelte"
  import LogDisplay from "./LogDisplay.svelte"
  import TrashIcon from "./TrashIcon.svelte";

  const { s } = $props()

  let viewKey = $state()
  let removeMode = $state(false)

  let noKeys = $derived(Object.keys(s.logs)?.length === 0)
  let noLogs = $derived(!s.logs[viewKey]?.()?.length > 0)


</script>

<div
  class="controls"
  class:filled={!noKeys}
>
  <select
    bind:value={viewKey}
    disabled={noKeys}
  >
    {#if noKeys}
      <option>Crea una tecla 👆</option>
    {/if}

    {#each s.keys as key}
      <option value={key.name}>{key.icon}{key.name}</option>
    {/each}

  </select>

  {#if !noKeys}
    {#if noLogs}
      <button><TrashIcon --color="var(--fg)"/></button>
    {:else}
      <Toggle bind:toggled={removeMode}/>
    {/if}
  {/if}

</div>

<LogDisplay logs={s.logs[viewKey] ?? (() => [])} {removeMode}/>

<style>
select {
  background-color: var(--bg);
  border: 2px solid var(--mg);
  border-radius: 15px;
  padding: 10px;
  width: 100%;
}

div {
  padding: 10px;
}

.controls {
  display: grid;
  grid-template-columns: 100% auto;
  align-items: center;
  gap: 10px;
  transition: grid 500ms ease;

  &.filled {
      grid-template-columns: 80% auto;
  }
}

</style>
