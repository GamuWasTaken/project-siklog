<script>
    import TrashIcon from "./TrashIcon.svelte";

  const { date, remove } = $props()

  // 02:30 10 12 mon 2025

  const DAYS = ['SUN','MON', 'TUES', 'WED', 'THURS', 'FRI', 'SAT']
  const dateToText = d =>
    `${padd(d.getHours())}:${padd(d.getMinutes())}:${padd(d.getSeconds())} - ` +
    `${DAYS[d.getDay()]} ${padd(d.getDate())}, ${padd(d.getMonth())} ${d.getFullYear()}`

  const padd = number => (number+"").length == 1 ? '0' + number : number

</script>

<div>
  <p> {dateToText(date)} </p>
  <button onclick={remove}> <TrashIcon --color="var(--mg)"/> </button>
</div>

<style>
div {
  padding: 5px;
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

button {
  background-color: transparent;
  border: none;
}

</style>
