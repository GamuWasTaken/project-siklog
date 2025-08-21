<script>
  import AppState from '$lib/state.svelte';
  import Log, * as Logs from './Log.svelte'

  const { logs, removeMode } = $props()

  const logTree = $derived.by(() => {
    if(!logs) return
    let tree = {}

    for(const log of logs) {
      const logDate = new Date(log.date)
      const yearMonth = Logs.yearMonth(log.date)

      if(!tree[yearMonth]) tree[yearMonth] = []
      tree[yearMonth].push(log)
    }

    return Object.entries(tree)
      .toSorted(([ak, av], [bk, bv]) => Logs.compare(av[0], bv[0]))
  })

</script>

<div>
{#if logs}
  {#each logTree as [key, month]}
    <h3>{key}</h3>
    <div>
    {#each month as log, i}
    <Log
      {log}
      edit={note => log.data = note}
      remove={() => AppState.removeLog(logs, log)}
      canRemove={removeMode}
    />
    
    {/each}
    </div>
  {/each}
{/if}

</div>

<style>
div {
  padding: 10px;
}
h3 {
  margin: 0;
}
</style>
