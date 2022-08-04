# @yeepay/eslint-config

[![npm](https://img.shields.io/npm/v/@jackjo/eslint-config)](https://npmjs.com/package/@jackjo/eslint-config)

## Usage

### Install

```bash
pnpm add -D eslint @jackjo/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": [
    "@jackjo"
  ]
}
```

### Config `.eslintignore`

```txt
dist
public
```

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint \"**/*.{vue,ts,js}\""
  }
}
```

### Config VSCode auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
