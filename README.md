```shell
pnpm add -D @commitlint/cli @commitlint/config-conventional husky

echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js

npx husky init

echo "npx commitlint --edit \$1" > .husky/commit-msg
```