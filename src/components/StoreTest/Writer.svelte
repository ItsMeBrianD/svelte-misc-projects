<script>
    import {input_values} from './stores';
    export let index = -1;
    let values;
    const unsubscribe = input_values.subscribe(v => values = v);
</script>

<label>
    <input bind:value={$input_values[index]} type="text"/>
</label>