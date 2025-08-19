<script>
  import Key, * as Keys from './Key.svelte';
    import KeyBuilder from './KeyBuilder.svelte';
  const { s } = $props()

  const addKey = key => {
    if(!Keys.isValid(s, key)) return
    s.keys.push(key)
  }

  const addLog = log => s.logs[log]().push(new Date())

</script>
<div class="keypad">
  <KeyBuilder saveKey={addKey}/>
  {#each s.keys as key}

    <Key saveLog={() => addLog(key.name)} {key} />

  {/each}
</div>
<style>

.keypad {
  border: 2px solid var(--fg);
  display: flex;
  flex-direction: row;
  flex-wrap:  wrap;
  justify-content: space-around;
  padding: 10px;
  gap: 10px 5px;
}

</style>
