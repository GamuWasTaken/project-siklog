<script>
  let { toggled = $bindable() } = $props()
</script>

<label class:toggled>
  <input type="checkbox" bind:checked={toggled}>
</label>

<style>
input {
  display: none;
}

.toggled {
  --color: var(--fg);
}

label {
  --color: var(--mg);
  background-color: var(--color);
  width: 80px;
  height: 30px;
  position: relative;
  border-radius: 30px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    border-radius: 30px;
    top: 5px;
    left: 5px;
    aspect-ratio: 1 / 1;
    background-color: white;
    transition: translate 250ms cubic-bezier(.68,-0.55,.27,1.55)
  }

}
.toggled::after {
  translate: calc(80px - 5px - 20px - 20px);
}
</style>
