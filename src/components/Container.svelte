<script>
    import {fade} from 'svelte/transition';
</script>

<div transition:fade>
    <slot/>
</div>

<style>
    div{
        box-sizing:border-box;
        width:50%;
        margin:0 auto;
    }
</style>