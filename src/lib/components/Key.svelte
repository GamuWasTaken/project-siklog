<script module>
  export function empty() {
    return key('', '')  
  }

  export function key(icon, name) {
    return { icon, name, logs: [] }
  }

  export function equals(key1, key2) {
    return key1.name === key2.name
  }

  export function isValid(keys, key) {
    return ! (!key.name || keys.some(k => equals(k, key)))
  }

</script>

<script>
  import Modal from "./Modal.svelte";
  import AppState from "$lib/state.svelte"

  const { key } = $props()

  let showModal = $state(false)

</script>

<button onclick={() => (showModal = true)} class="key">
  <i>{key.icon}</i>
  <p>{key.name}</p>
</button>

<!-- Log creation check -->
<Modal bind:showModal>
  {#snippet header()}
    <h2>Guardar log de<br><i>{key.icon}</i>{key.name}?</h2>
  {/snippet}

  <button
    class="modal-ok"
    onclick={() => {
      showModal = false
      AppState.addLog(key)
    }}
  >
    Si
  </button>
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
    width: 30vw;
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
