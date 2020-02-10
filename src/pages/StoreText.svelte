<script>
    import {input_values} from '../components/StoreTest/stores';
    import Reader from "../components/StoreTest/Reader.svelte";
    import Writer from "../components/StoreTest/Writer.svelte";
    import Container from "../components/Container.svelte";

    let values;
    const unsubscribe = input_values.subscribe(v => values = v);
</script>

<Container>
    <p>
        This is a demonstration of massive state / state update performance using a store in Svelte.
    </p>
    <p>
        Our current Forms implementation is very similar to how this is implemented; a single massive state that updates
        every time you write in a box.
    </p>
    <hr/>
    <ul>
        {#each values as v, i}
            <li>
                <label>
                    <span>Input #{i}</span>
                    <Writer index={i}/>
                    {v}
                </label>
            </li>
        {/each}
    </ul>
</Container>

<style>
    ul {
        font-size: 0.9em;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    }

    li {
        min-width: 32%;
        margin-bottom: 0.5em;
        margin-right:1em;
        line-height: 2em;
        height: 2em;
    }

    label > span {
        width: 10ch;
        display: block;
        float: left;
    }

    hr {
        margin: 1em;
        border: none;
        border-top: 1px solid #676778;
    }
</style>