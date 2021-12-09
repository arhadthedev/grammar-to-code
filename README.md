# grammar-to-code

Generate code of recursive descent parser from a grammar file.

## Highlights

- Supports Grammarkdown as an input; exact format is detected automatically
- Generates self-sufficient recursive descent parsers written in ECMAScript
- Can generate multiple parsers per grammar, one per a specified goal symbol

## Install

```
$ npm install -g grammar-to-code
```

## Usage

The package provides two flavors, a global command and a library. Both variants support Grammarkdown as an input.

### CLI

If installed with `npm -g` or called from `scripts` section of `package.json`, a CLI wrapper around the library is available:

```
$ grammar2code < grammar > code
```

### API

#### `PositionalError`

When returned, indicates that an error happened and gives its location and description.

#### `convertGrammarToCode(grammar: string): string | PositionalError`

A wrapper around the conversion machinery that allows to do everything in a single call in a style of the CLI.
