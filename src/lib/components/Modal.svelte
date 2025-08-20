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
  min-width: 80%;
  background-color: var(--bg);
  border: none;
  color: var(--fg);
  border-radius: 15px;
}

dialog[open] {
  animation: zoom 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes zoom {
  from { transform: scale(.95); }
  to { transform: scale(1); }
}

dialog > div {
  display: flex;
  flex-direction: column;  
  align-items: center;
}
dialog::backdrop {
  background-color: #0009;
}

:global {
  .modal-ok {
    margin: 10px;
    background-color: var(--bg);
    border: 3px solid var(--mg);
    padding: 15px 50px;
    border-radius: 15px;
    font: inherit;
    font-weight: bold;

    transition: filter 100ms ease;
  }
  .modal-ok:active {
    filter: brightness(.8);
  }
}
</style>
