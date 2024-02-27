```shell
pnpm add -Dw @commitlint/cli @commitlint/config-conventional husky

echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js

npx husky init

echo "npx commitlint --edit \$1" > .husky/commit-msg


# semantic-release 及 相关组件
pnpm add -Dw semantic-release @semantic-release/changelog @semantic-release/git @semantic-release/github @semantic-release/npm @semantic-release/release-notes-generator


```