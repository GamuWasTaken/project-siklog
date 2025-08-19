
init:
    nix-shell -p pnpm nodejs_22 svelte-language-server

run:
    pnpm run dev --open
