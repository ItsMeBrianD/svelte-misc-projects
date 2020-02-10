<script>
	import {fade} from 'svelte/transition';
	import NavBar from "./components/NavBar.svelte";
	import {Route, Router} from 'svelte-routing';
	import Home from "./pages/Home.svelte";
	import Todo from "./pages/Todo.svelte";
	import StateTest from "./pages/StateTest.svelte";
	import StoreText from "./pages/StoreText.svelte";
</script>


<header>
    <NavBar/>
</header>

<main>
    <Router>
        <Route path="/">
			<div in:fade={{delay:200}} out:fade={{duration:100}}>
            	<Home/>
			</div>
        </Route>
		<Route path="/todo">
			<div in:fade={{delay:200}} out:fade={{duration:100}}>
				<Todo/>
			</div>
		</Route>
		<Route path="/state">
			<div in:fade={{delay:200}} out:fade={{duration:100}}>
				<StateTest/>
			</div>
		</Route>
		<Route path="/store">
			<div in:fade={{delay:200}} out:fade={{duration:100}}>
				<StoreText/>
			</div>
		</Route>
    </Router>
</main>

<style>
	main{
		width:100vw;
	}
</style>