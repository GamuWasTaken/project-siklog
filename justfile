
init:
    nix-shell -p pnpm nodejs_22 svelte-language-server

run:
    pnpm run dev --open

build:
    pnpm run build

[working-directory: './build']
update-gh-pages: build
    git worktree repair
    git add -A
    git commit -am "Updated gh-pages"
    git push
