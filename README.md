# doc-giggle

> Give me a docx/xlsx/pptx, I'll give you a pdf.

[![Build Status](https://travis-ci.com/Jeff-Tian/doc-giggle.svg?branch=master)](https://travis-ci.com/Jeff-Tian/doc-giggle)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=Jeff-Tian_doc-giggle)](https://sonarcloud.io/dashboard?id=Jeff-Tian_doc-giggle)

## Installation

```shell
npm i doc-giggle --save
```

## Usage

### Get pdf file stream directly

```typescript
import { convert } from "doc-giggle";
import fs from "fs";

const pdfResponse = await convert("https://your-word/excel/ppt/url");

fs.writeFileSync("test.pdf", pdfResponse.body);
```

### Get pdf download link

**Caution**: The download link is temporary and will be deleted by arbitrary time, so you should download and save it to your storage as quickly as you can.

```typescript
import { convertByFcDocRotary } from "doc-giggle";

const { sourceFileUrl, pdfUrl } = await convertByFcDocRotary(
  "https://your-word/excel/ppt/url"
);
```

## How

There are several backend servers work behind the scene, which use `libreoffice`'s command line to convert the the office document into pdf file.

### They are

- [doc-rotary](https://github.com/Jeff-Tian/doc-rotary)
- [fc-doc-rotary](https://github.com/Jeff-Tian/fc-doc-rotary)

## Credits

> This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).

## Local Development

Below is a list of commands you will probably find useful.

### `npm start` or `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

<img src="https://user-images.githubusercontent.com/4060187/52168303-574d3a00-26f6-11e9-9f3b-71dbec9ebfcb.gif" width="600" />

Your library will be rebuilt if you make edits.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

<img src="https://user-images.githubusercontent.com/4060187/52168322-a98e5b00-26f6-11e9-8cf6-222d716b75ef.gif" width="600" />

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.
