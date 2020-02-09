<script>
    import SvelteLogo from "../components/SvelteLogo.svelte";
    import {fade} from 'svelte/transition';
</script>
<div transition:fade>
    <SvelteLogo/>
    <h1>Brian's Svelte Misc Projects</h1>
</div>

<style>
    div{
        text-align:center;
    }
    h1{
        font-weight:lighter;
    }
</style>