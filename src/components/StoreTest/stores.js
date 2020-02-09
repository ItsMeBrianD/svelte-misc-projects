import { writable } from 'svelte/store';
let inputValues = [];
for(let i=0; i<1002; i++){
    inputValues.push( Math.random().toString(36).substring(2, 12) + Math.random().toString(36).substring(2, 12));
}

export const input_values = writable(inputValues);
