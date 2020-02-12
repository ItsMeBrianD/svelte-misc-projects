<script>
    import Incrementer from "./Incrementer.svelte";
    import Decrementer from "./Decrementer.svelte";
    export let count = 0;
</script>

<div>
    <h4>Current Count</h4>
    <Incrementer bind:count/>
    <input type="number" bind:value={count}/>
    <Decrementer bind:count/>

</div>

<style>
    input{
        display:inline-block;
        width:5ch;
        text-align:center;
    }
</style>