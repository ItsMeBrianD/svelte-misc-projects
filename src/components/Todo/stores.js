import { writable } from 'svelte/store';
const items = [
    {name: "Learn Svelte", complete: false, id: 0},
    {name: "Win 🎊🎊",		complete: false, id: 1},
    {name: "This is my multiline item, it takes up multiple lines ⭐⭐⭐", complete: false, id:2}
];

export const todo_items = writable(items);
