<script>
    import { scale } from 'svelte/transition';
    import {todo_items} from './stores.js';
    export let item;
    let other_items;
    const unsubscribe = todo_items.subscribe(items=>other_items = items.filter(i=>i.id!==item.id));

    function removeSelf(){
        todo_items.update(v => v = other_items)
    }
    function toggleSelf(){
        item.done = !item.done;
        todo_items.update(v => v = [...other_items, item]);
    }
</script>

<div transition:scale class:complete={item.done}>
	<span on:click={toggleSelf}>
	{#if item.done}✅{:else}❎{/if}
        {item.name}
	</span>
    <button type="button" on:click={removeSelf} title="Delete">❌</button>
</div>
<style>
    *{box-sizing:border-box;}
    button{
        padding: 0;
        border: none;
        background-color: white;
        cursor:pointer;
        width:2em;
        transition:0.2s;
        height:2em;
        align-self:flex-start;
    }
    button:hover{
        box-shadow:0px 0px 8px rgba(0,0,0,0.5);
    }
    div{
        display:flex;
        width:100%;
        justify-content:space-between;
        border-radius:5px;
        background-color:white;
        padding:0.5em 0.5em;
        min-height:3em;
        border:1px solid #CC5533;
    }
    div.complete{
        border-color:#55CC33;
    }
    div > * {
        min-height:1em;
        line-height:2em;
    }
    span{
        text-align:left;
        width:75%;
        cursor:pointer;
        align-self: center;
    }
</style>