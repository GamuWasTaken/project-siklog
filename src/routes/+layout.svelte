<script>
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<style>

@import url('https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Cursive:wght@400..700&display=swap');
@import "https://www.nerdfonts.com/assets/css/webfont.css";

:global(body) {
  background-color: var(--bg);
  color: var(--fg);
  font-family: 'Edu NSW ACT Cursive', 'Helvetica';
  margin: 0;

  display: block;
  height: 100vh;
}
:global(*) {
  box-sizing: border-box;
}

:global(:root) {
  --bg: #e0d3aa;
  --mg: #b29468;
  --fg: #420061;
}
</style>
