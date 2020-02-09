<script>
    import TodoItem from './TodoItem.svelte';
    import { flip } from 'svelte/animate';
    import { fade } from 'svelte/transition';

    import {todo_items} from './stores.js';
    let items;
    const unsubscribe = todo_items.subscribe(v=>items=v);
</script>
<div class="container">

    <div class="sublist">
        <h2>
            Incomplete items
        </h2>
        <hr/>
        <ul>
            {#each items.filter(i=>!i.done) as item (item.id)}
                <li animate:flip transition:fade|local>
                    <TodoItem {item}/>
                </li>
            {/each}
        </ul>
    </div>

    <div class="sublist">
        <h2>
            Complete Items
        </h2>
        <hr/>
        <ul>
            {#each items.filter(i=>i.done) as item (item.id)}
                <li animate:flip transition:fade|local>
                    <TodoItem {item}/>
                </li>
            {/each}
        </ul>
    </div>

</div>

<style>
    *{box-sizing:border-box;}
    div.container{
        display: flex;
        width:100%;
        justify-content:space-around;
    }
    div.sublist{
        text-align:center;
        flex:1;
        transition:1s;
    }
    li{
        list-style:none;
        padding:0.5em 1em;
    }
    ul{
        padding:0;
        margin:0;
    }
    hr{
        width:80%;
    }
</style>