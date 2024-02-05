
module.exports = {
  branches: ["master"], // 指定在哪个分支下要执行发布操作
  plugins: [
    "@semantic-release/commit-analyzer", // 解析 commit 信息，默认就是 Angular 规范
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md", // 把发布日志写入该文件
      },
    ],
  ],
};
