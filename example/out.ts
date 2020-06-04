interface WebAssemblyModuleTyped<T extends object>{module:WebAssembly.Module;instance:WebAssembly.Instance<T>;};const str="AGFzbQEAAAABBgFgAX8BfwMCAQAHCgEGc3F1YXJlAAAKCgEIACAAIABsDws=";const arr=Uint8Array.from(atob(str),c=>c.charCodeAt(0));export const object=await WebAssembly.instantiate(arr);
//@ts-ignore
export function load<T extends object>():WebAssemblyModuleTyped<T>{return object;}