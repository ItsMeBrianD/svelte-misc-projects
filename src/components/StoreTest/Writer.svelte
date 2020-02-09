<script>
    import {input_values} from './stores';
    export let index = -1;
</script>

<label>
    <input bind:value={$input_values[index]} type="text"/>
</label>
