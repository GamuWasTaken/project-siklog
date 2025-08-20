<script>
  import Key, * as Keys from './Key.svelte';
  import * as Logs from './Log.svelte';
  import KeyBuilder from './KeyBuilder.svelte';
  const { s } = $props()

  const addKey = key => {
    if(!Keys.isValid(s, key)) return
    s.keys.push(key)
  }

  const addLog = log => {
    s.logs[log]().unshift(Logs.empty())
  }

</script>
<div class="keypad">
  <KeyBuilder saveKey={addKey}/>
  {#each s.keys as key}

    <Key saveLog={() => addLog(key.name)} {key} />

  {/each}
</div>
<style>

.keypad {
  display: flex;
  flex-direction: row;
  flex-wrap:  wrap;
  justify-content: center;
  padding: 10px;
  gap: 10px 2%;
}

</style>
