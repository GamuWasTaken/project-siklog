<script module>
  export function empty() {
    return { icon: '', name: '' }
  }

  export function key(icon, name) {
    return { icon, name }
  }

  export function compare(key1, key2) {
    return key1.name === key2.name
  }

  export function isValid(state, key) {
    return ! (!key.name || state.keys.some(k => compare(k, key)))
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
    <h2>Guardar log de {key.name}?</h2>
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

    font: inherit;
    font-weight: bold;

    padding: 10px;
    border-radius: 10px;
    width: 120px;
    aspect-ratio: 1 / 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

i {
  font-size: 2em;
}
</style>
