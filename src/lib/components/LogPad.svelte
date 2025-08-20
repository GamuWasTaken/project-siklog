<script>
  import Log from "./Log.svelte";
  import Toggle from "./Toggle.svelte"
  import LogDisplay from "./LogDisplay.svelte"

  const { s } = $props()

  let viewKey = $state()
  let removeMode = $state(false)

</script>

<div class="controls">
  <select bind:value={viewKey}>
  {#each s.keys as key}

    <option value={key.name}>{key.icon}{key.name}</option>

  {/each}
  </select>

  <Toggle bind:toggled={removeMode}/>

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
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
