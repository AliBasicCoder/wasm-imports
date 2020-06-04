# wasm-imports

convert a wasm module to an a ts file to import

## Features

- easily import wasm files

## Usage

see the example (here)[https://github.com/AliBasicCoder/wasm-imports/tree/master/example]

```
deno run https://deno.land/x/wasm_imports/index.ts <wasm_file> <ts_file>
```

use the generated file:

```ts
import { load } from "./out.ts";

const object = load<Your_Typing>();

// for example
type Your_Typing = {
  add: (x: number, y: number) => number;
};

console.log(object.instance.exports.add(1, 1)); // => 2
```

or:

```ts
import { object } from "./out.ts";

// for example
console.log(object.instance.exports.add(1, 1)); // => 2
```

## License

copyrights (c) AliBasicCoder 2020
