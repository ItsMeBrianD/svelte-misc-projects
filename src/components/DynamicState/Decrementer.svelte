<script>
    export let count;
</script>

<button on:click={() => count -= 1}>➖</button>


<style>
    button{
        box-sizing:border-box;
        border:none;
        background-color:#676778;
        transition:0.2s;
        height:2em;
        width:2em;
    }
    button:hover{
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
</style>