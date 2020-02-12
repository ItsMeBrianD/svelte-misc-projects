<script>
    import Container from "../components/Container.svelte";
    import CountController from "../components/DynamicState/CountController.svelte";

    let count = 1;
        let inputValues = [{
            created: new Date().getMilliseconds(),
            message: "I am state #0"
        }];
    $: {
        if(inputValues.length > count) inputValues = inputValues.slice(0,count);
        else{
            for(let i=inputValues.length; i<count; i++){
                inputValues.push(
                        {
                            created: new Date().getMilliseconds(),
                            message: "I am state #" + inputValues.length,
                        }
                );
            }
            inputValues = inputValues;
        }
    }

    function getRenderTime(x){
        if(!x.rendered)
            x.rendered = new Date().getMilliseconds();
        return x.rendered
    }

</script>


<Container>
    <div>
    <CountController bind:count/>
    </div>
    <div>
        <ul>
            {#each inputValues as value}
                <li>
                    <input bind:value={value.message}/>
                    <span class="meta">
                        <span>Created at {value.created}ms</span>
                        <span>Rendered at {getRenderTime(value)}ms</span>
                        <span>{value.message}</span>
                    </span>
                </li>
            {/each}
        </ul>
    </div>
</Container>

<style>
    li{
        list-style:none;
        height: 2em;
        display: flex;
        align-items: center;
    }
    li:nth-child(2n){
        background-color:rgba(0,0,0,0.1);
    }
    input{
        width:15%;
        float:left;
    }
    span.meta{
        width:80%;
        display:flex;
        justify-content: space-between;
        text-align:center;
        float:right;
    }
    span.meta span{
        width:33%;

        height: 2em;
        line-height: 2em;
    }
    span.meta *:nth-child(2n) {
        background-color:rgba(0,0,0,0.1);
    }

</style>