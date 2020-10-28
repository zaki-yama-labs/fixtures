// get-content ディレクトリのコピー
const env = require("../../../lib/env");

// https://developer.github.com/v3/repos/contents/#get-contents
// empty path returns README file if present
module.exports = [
  {
    method: "get",
    url: "/repos/zaki-yama-labs/octokit-fixtures-playground/contents/",
    headers: {
      accept: "application/vnd.github.v3+json",
      Authorization: `token ${env.MY_TOKEN}`,
    },
  },
  {
    method: "get",
    url: "/repos/zaki-yama-labs/octokit-fixtures-playground/contents/README.md",
    headers: {
      accept: "application/vnd.github.v3.raw",
      Authorization: `token ${env.MY_TOKEN}`,
    },
  },
];
