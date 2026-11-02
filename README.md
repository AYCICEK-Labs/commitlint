# commitlint

The commit message rules of AYÇİÇEK Labs, for [commitlint](https://commitlint.js.org).

| Rule                                                                                     | Why                                                                                                          |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [Conventional Commits](https://www.conventionalcommits.org) (`feat:`, `fix:`, `docs:` …) | Readable history and automatic changelogs.                                                                   |
| Header at most 72 characters, body lines at most 100                                     | Fits in `git log` and on GitHub.                                                                             |
| `no-ai-attribution`                                                                      | Rejects `Co-Authored-By` lines naming Claude or Anthropic, Claude session links and "Generated with Claude". |

## Where it runs

- **Every project:** on pull requests, in CI, with the shared workflow from [`workflows`](https://github.com/AYCICEK-Labs/workflows).
- **Node projects:** also at commit time, through the hooks from [`husky`](https://github.com/AYCICEK-Labs/husky).

## Use it in a Node project

```sh
curl -fsSL https://raw.githubusercontent.com/AYCICEK-Labs/commitlint/main/commitlint.config.js -o commitlint.config.js
npm install --save-dev @commitlint/cli @commitlint/config-conventional
```

Check the last commit:

```sh
npx commitlint --from HEAD~1
```

## License

[MIT](LICENSE) © Yunus Emre AYÇİÇEK
