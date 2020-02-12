<script>
	import Select from '../components/ComponentExamples/Select.svelte';
	import Container from '../components/Container.svelte';
	let name = 'world';
	const items = [
		"Blake",
		"David",
		"Henri",
	];
	
	let selection = "";
</script>
<Container>
	<h1>Hello {selection}!</h1>

	<Select {items} bind:selected={selection}/>
</Container>
