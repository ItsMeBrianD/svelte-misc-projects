<script>
	import {fade,slide} from 'svelte/transition';
	import NavBar from "./components/NavBar.svelte";
	import {Route, Router} from 'svelte-routing';
	import Home from "./pages/Home.svelte";
	import Todo from "./pages/Todo.svelte";
	import StateTest from "./pages/StateTest.svelte";
	import StoreText from "./pages/StoreText.svelte";
	import DynamicState from "./pages/DynamicState.svelte";
	import ComponentExamples from "./pages/ComponentExamples.svelte";

	const inOptions = {
		delay:500
	}
	const outOptions ={
		duration:200
	}
</script>


<header>
    <NavBar/>
</header>

<main>
    <Router>
        <Route path="/">
			<div in:slide={inOptions} out:fade={outOptions}>
				<Home/>
			</div>
	        </Route>
		<Route path="/todo">
			<div in:slide={inOptions} out:fade={outOptions}>
				<Todo/>
			</div>
		</Route>
		<Route path="/state">
			<div in:slide={inOptions} out:fade={outOptions}>
				<StateTest/>
			</div>
		</Route>
		<Route path="/store">
			<div in:slide={inOptions} out:fade={outOptions}>
				<StoreText/>
			</div>
		</Route>
		<Route path="/dynamicstate">
			<div in:slide={inOptions} out:fade={outOptions}>
				<DynamicState/>
			</div>
		</Route>
		<Route path="/componentExamples">
			<div in:slide={inOptions} out:fade={outOptions}>
				<ComponentExamples/>
			</div>
		</Route>
    </Router>
</main>

<style>
	main{
		width:100vw;
	}
</style>
