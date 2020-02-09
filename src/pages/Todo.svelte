<script>
    import TodoList from '../components/Todo/TodoList.svelte';
    import {todo_items} from '../components/Todo/stores.js';
    let newTask = "";
    let items;
    $: nextId = items.length;
    const unsubscribe = todo_items.subscribe(v => items = v);

    function addItem(e){
        e.preventDefault();
        if(!newTask) return;
        let newItem = {
            name: newTask,
            complete: false,
            id: nextId
        };
        todo_items.update(i => i = [...i, newItem]);
        newTask = "";
    }
</script>

<div>
    <form on:submit={addItem}>
        <input placeholder="What to do next" bind:value={newTask}/>
        <button on:click={addItem} title="Add new To-Do Item">
            📒
        </button>
    </form>
    <TodoList/>
</div>

<style>
    div{
        width:100%;
        padding:0 5ch;
        box-sizing:border-box;
    }
    form{
        display:flex;
    }
    input{
        border-radius:5px;
        width:100%;
        padding:0.5em 2em;
        margin-right:1em;
    }
    button{
        padding: 0 1em;
        border: none;
        background-color: lime;
        transition:0.2s;
        border-radius:5px;
    }
    button:hover{
        box-shadow:0px 0px 8px rgba(0,0,0,0.5);
    }

</style>
