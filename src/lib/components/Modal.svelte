<script>
  let { showModal = $bindable(), header, children } = $props()

  let dialog = $state()

  $effect(() => {
    if(showModal) dialog.showModal()
    else dialog.close()
  })
</script>

<dialog
  bind:this={dialog}
  onclose={() => (showModal = false)}
  onclick={e => { if(e.target === dialog) dialog.close() }}
>
  <div>
    {@render header?.()}

    {@render children?.()}
  </div>
</dialog>

<style>
dialog {
  min-width: 100vw;
  background-color: var(--mg);
  border: none;
}
dialog > div {
  display: flex;
  flex-direction: column;  
  align-items: center;
}
dialog::backdrop {
  background-color: #0003;
}

:global {
  .modal-ok {
    margin: 20px;
    background-color: var(--bg);
    border: none;
    padding: 5px 30px;
    border-radius: 5px;
    font: inherit;
    font-weight: bold;
  }
  .modal-ok:active {
    filter: brightness(.8);
  }
}
</style>
