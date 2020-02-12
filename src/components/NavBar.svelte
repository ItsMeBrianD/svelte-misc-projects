<script>
    import {Router, Link} from "svelte-routing";
</script>

<Router>
    <nav>
        <Link to="/"><span class="link">Home</span></Link>
        <Link to="/todo"><span class="link">Todo List</span></Link>
        <Link to="/state"><span class="link">State Example</span></Link>
        <Link to="/store"><span class="link">Store Example</span></Link>
        <Link to="/dynamicstate"><span class="link">Dynamic State Example</span></Link>
	<Link to="/componentExamples"><span class="link">Component Examples</span></Link>
    </nav>
</Router>


<style>
    span.link {
        padding:1em;
        color:#676778;
        text-decoration:none;
        letter-spacing:0.1em;
        display:block;
        transition:0.1s;
        line-height:2em;
        height:4em;

    }
    span.link:hover{
        box-shadow:0px 0px 5px rgba(0,0,0,0.5);
    }
    nav{
        display:flex;
        width:100%;
        padding:0 5em;
    }
</style>
