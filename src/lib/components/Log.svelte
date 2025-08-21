<script module>
  export function empty() {
    return log(new Date(), '')
  }

  export function log(date, data) {
    return { date, data }
  }

  export function compare(log1, log2) {
    return log2.date - log1.date
  }

  export function equals(log1, log2) {
    return new Date(log1.date).getTime === new Date(log2.date).getTime
  }

  export const DAYS = ['SUN','MON', 'TUES', 'WED', 'THURS', 'FRI', 'SAT']
  export const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  export const dateToText = date => {
    const d = new Date(date)
    return `${DAYS[d.getDay()]} ${padd(d.getDate())}` + ' - ' + 
    `${padd(d.getHours())}:${padd(d.getMinutes())}:${padd(d.getSeconds())}`
  }
  export const padd = number => (number+"").length == 1 ? '0' + number : number
</script>

<script>
  import EditIcon from "./EditIcon.svelte";
  import Modal from "./Modal.svelte";
  import TrashIcon from "./TrashIcon.svelte";

  const { log, canRemove , remove, edit } = $props()

  let note = $state(log.data)
  let showModal = $state(false)

  function save() {
    edit(note)
    note = log.data
    showModal = false
  }

  const dateText = $derived(dateToText(log.date))

</script>

<div>
  <p> {dateText} </p>
  {#if canRemove}

    <button
      class="icon"
      onclick={() => showModal = true}
    ><TrashIcon --color="var(--fg)"/></button>

  {:else}

    <button
      class="icon"
      onclick={() => showModal = true}
    ><EditIcon --color="var(--mg)"/></button>
    
  {/if}
</div>

{#if canRemove}

  <Modal bind:showModal>
    {#snippet header()}
      <h2>
        Seguro que quieres borar
      </h2>  
      <small>{dateText}</small>
    {/snippet}
      <p>Se perderan las notas asociadas</p>
      <span>{log.data}</span>
    <button onclick={remove} class="modal-ok">Borrar</button>
  </Modal>

{:else}

  <Modal bind:showModal>
    {#snippet header()}
      <h2>Añadir nota en</h2>  
      <p>{dateText}</p>
    {/snippet}
    <textarea bind:value={note}></textarea>
    <button onclick={save} class="modal-ok">Guardar</button>
  </Modal>

{/if}

<style>
div {
  padding: 5px;
  height: 50px;
  background-color: var(--bg);
  border: 2px solid var(--mg);
  border-top: none;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  transition: filter ease 250ms;

  &:first-of-type {
    border-top: 2px solid var(--mg);
    border-radius: 15px 15px 0 0;
  }

  &:last-of-type {
    border-radius: 0 0 15px 15px;
  }

  &:only-of-type {
    border-radius: 15px;
  }

  &:active {
    filter: brightness(.8)
  }
}

p {
  font-weight: bold;
  margin: 0;
}

.icon {
  background-color: transparent;
  border: none;
}

textarea {
  background-color: var(--bg);
  border: 1px solid var(--fg);
  resize: vertical;
  width: 100%;
  height: 200px;
  min-height: 150px;
  max-height: 500px;
}

span {
  width: 80%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  border: 1px solid var(--fg);
}

</style>
