<script>
  import Modal from "./Modal.svelte";
  import * as Keys from "./Key.svelte"
  import PlusIcon from "./PlusIcon.svelte";

  const { saveKey } = $props()

  let showModal = $state(false)
  let newKey = $state(Keys.empty())

  function save() {
    showModal = false
    saveKey(newKey)
    newKey = Keys.empty()
  }
</script>

<button class="key" onclick={() => showModal = true}>
  <PlusIcon --color="var(--mg)"/>
</button>


<Modal bind:showModal>
  {#snippet header()}
    <h2>Nuevo log</h2>
  {/snippet}

  <div class="key">
    <input
       placeholder="&#x270F;&#xFE0F;"
       bind:value={newKey.icon}
       maxlength="2"
    >
    <input
      placeholder="Nuevo log"
      bind:value={newKey.name}
    >
  </div>

  <button class="modal-ok" onclick={save}>Guardar</button>
</Modal>

<style>

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;


  input {
    background: transparent;
    border: none;
    border-bottom: 2px solid var(--fg);
    border-radius: 4px;
    width: 100%;
    text-align: center;
  }

  input:first-of-type {
    width: 2ch;
    font-size: 2em;
  }
}

</style>
