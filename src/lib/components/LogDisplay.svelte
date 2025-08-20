
<script>
  import Log, * as Logs from './Log.svelte'

  const { logs, removeMode } = $props()

  const removeLog = log => {
    const i = logs().findIndex(Logs.equals)
    logs().splice(i, 1)  
  }
  const editLog = (i, note) => logs()[i].data = note

  const logTree = $derived.by(() => {
    let tree = {}

    for(const log of logs()) {
      const logDate = new Date(log.date)
      const monthYear = `${Logs.padd(logDate.getMonth() + 1)} - ${logDate.getFullYear()}`

      if(!tree[monthYear]) tree[monthYear] = []
      tree[monthYear].unshift(log)
    }

    return tree
  })

</script>

<div>

{#each Object.entries(logTree) as [key, month]}
  <h3>{key}</h3>
  <div>
  {#each month as log}
  <Log
    {log}
    edit={note => editLog(log, note)}
    remove={() => removeLog(log)}
    canRemove={removeMode}
  />
    
  {/each}
  </div>
{/each}

</div>

<style>
div {
  padding: 10px;
}
h3 {
  margin: 0;
}
</style>
