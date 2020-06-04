import { join } from "https://deno.land/std/path/mod.ts";

function Uint8ToBase64(u8Arr: Uint8Array) {
  let CHUNK_SIZE = 0x8000;
  let index = 0;
  let length = u8Arr.length;
  let result = "";
  let slice: Uint8Array;
  while (index < length) {
    slice = u8Arr.subarray(index, Math.min(index + CHUNK_SIZE, length));
    // @ts-ignore
    result += String.fromCharCode.apply(null, slice);
    index += CHUNK_SIZE;
  }
  return btoa(result);
}

if (Deno.args[0] === "--help" || Deno.args[0] === "-h") {
  console.log(`Usage: <in> <out> [options]

Options:
  -h, --help  display help for command`);
  Deno.exit();
}

if (Deno.args.length !== 2) {
  console.log("please provide 2 args");
  Deno.exit(1);
}

const base64Str = Uint8ToBase64(
  Deno.readFileSync(join(Deno.cwd(), Deno.args[0])),
);

const res =
  `interface WebAssemblyModuleTyped<T extends object>{module:WebAssembly.Module;instance:WebAssembly.Instance<T>;};const str="${base64Str}";const arr=Uint8Array.from(atob(str),c=>c.charCodeAt(0));export const object=await WebAssembly.instantiate(arr);
//@ts-ignore
export function load<T extends object>():WebAssemblyModuleTyped<T>{return object;}`;

Deno.writeTextFileSync(join(Deno.cwd(), Deno.args[1]), res);
