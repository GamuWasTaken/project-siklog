<script>
  import Key, * as Keys from './Key.svelte';
  import KeyBuilder from './KeyBuilder.svelte';

  const { s } = $props()

</script>
<div class="keypad">
  <KeyBuilder {s} />
  {#each s.keys as key}

    <Key {key} />

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
