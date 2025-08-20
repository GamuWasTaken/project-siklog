<script module>
  export function empty() {
    return key('', '')  
  }

  export function key(icon, name) {
    return { icon, name }
  }

  export function equals(key1, key2) {
    return key1.name === key2.name
  }

  export function isValid(state, key) {
    return ! (!key.name || state.keys.some(k => equals(k, key)))
  }

</script>

<script>
  import Modal from "./Modal.svelte";

  const { saveLog, key } = $props()

  let showModal = $state(false)

  function save() {
    showModal = false
    saveLog()
  }
</script>

<button onclick={() => (showModal = true)} class="key">
  <i>{key.icon}</i>
  <p>{key.name}</p>
</button>

<Modal bind:showModal>
  {#snippet header()}
    <h2>Guardar log de<br><i>{key.icon}</i>{key.name}?</h2>
  {/snippet}

  <button class="modal-ok" onclick={save}>Si</button>
</Modal>

<style>
:global{
  .key {
    background-color: var(--bg);
    border: 4px solid var(--mg);
    color: var(--fg);

    box-shadow: 2px 2px 2px 2px #0003;
    transition: box-shadow 100ms ease;

    font: inherit;
    font-weight: bold;

    padding: 10px;
    border-radius: 10px;
    width: 32%;
    aspect-ratio: 1 / 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:active {
      box-shadow: 0 0 0 0 #0003;
    }
  }
}

i {
  font-style: normal;
  font-size: 2em;
  margin: 0;
}
p {
  margin: 0;
}
</style>
