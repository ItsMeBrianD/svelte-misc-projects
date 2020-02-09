<script>
	import {fade} from 'svelte/transition';
	import NavBar from "./components/NavBar.svelte";
	import {Route, Router} from 'svelte-routing';
	import Home from "./pages/Home.svelte";
	import Todo from "./pages/Todo.svelte";
	import StateTest from "./pages/StateTest.svelte";
</script>


<header>
    <NavBar/>
</header>

<main>
    <Router>
        <Route path="/">
			<div in:fade={{delay:600}} out:fade={{duration:400}}>
            	<Home/>
			</div>
        </Route>
		<Route path="/todo">
			<div in:fade={{delay:600}} out:fade={{duration:400}}>
				<Todo/>
			</div>
		</Route>
		<Route path="/state">
			<div in:fade={{delay:600}} out:fade={{duration:400}}>
				<StateTest/>
			</div>
		</Route>
    </Router>
</main>
