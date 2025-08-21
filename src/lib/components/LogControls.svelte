<script>
  import Toggle from "./Toggle.svelte"
  import TrashIcon from "./TrashIcon.svelte";

  let { s, logs = $bindable(), removeMode = $bindable() } = $props()

  let selectedKey = $state('')

  let noKeys = $derived(Object.keys(s.keys)?.length === 0)
  let noSelected = $derived(selectedKey === '')
  let noLogs = $derived(logs?.length == 0)

</script>
<div
  class:filled={!noSelected}
>
  <select
    bind:value={selectedKey}
    disabled={noKeys}
    onchange={() => logs = s.getLogs({name: selectedKey})}
  >
      <option value=''>
        {#if noKeys}
          Crea una tecla 👆
        {/if}
      </option>

    {#each s.keys as key}
      <option value={key.name}>{key.icon} {key.name}</option>
    {/each}

  </select>

  {#if !noKeys && !noSelected}
    {#if noLogs}
      <button
        class="icon"
        onclick={() => {
          s.removeKey({name: selectedKey})
          selectedKey = ''
        }}
      ><TrashIcon --color="var(--fg)"/></button>
    {:else}
      <Toggle bind:toggled={removeMode}/>
    {/if}
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

.icon {
  height: 40px;
  :global svg {
    width: 35px;
  }
}

div {
  padding: 10px;
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
