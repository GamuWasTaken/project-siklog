<script>
  import Log from "./Log.svelte";
  import Toggle from "./Toggle.svelte"

  const { s } = $props()

  let viewKey = $state()
  const removeLog = (log, i) => log().splice(i, 1)  
  const editLog = (log, i, note) => log()[i].data = note

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
<div class="logs">
{#if s.logs[viewKey]}
  {#each s.logs[viewKey]() as log, i}
    <Log
      {log}
      edit={note => editLog(s.logs[viewKey], i, note)}
      remove={() => removeLog(s.logs[viewKey], i)}
      canRemove={removeMode}
    />
  {/each}
{/if}

</div>
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
