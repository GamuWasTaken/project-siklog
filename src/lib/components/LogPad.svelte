<script>
  const { s } = $props()

  let viewKey = $state()
  const removeLog = (log, i) => log().splice(i, 1)  
</script>

<div>
  <select bind:value={viewKey}>
  {#each s.keys as key}

    <option value={key.name}>{key.icon}{key.name}</option>

  {/each}
  </select>

  {#if s.logs[viewKey]}
    {#each s.logs[viewKey]() as date, i}
      <Log date={new Date(date)} remove={() => removeLog(s.logs[viewKey], i)}/>
    {/each}
  {/if}
</div>
