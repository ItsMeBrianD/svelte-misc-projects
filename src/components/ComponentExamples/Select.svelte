<script>
	import {slide} from 'svelte/transition';
	export let items = [];
	export let name;
	export let selected = items[0] || "";
	
	let active = false;
	function changeSelected(i){
		selected = items[i];
		active = false;
	}
</script>

<div on:blur={() => active = false}>
	
	<div on:click={()=>active = !active} class="innerContainer">
		<input bind:value={selected} {name}>
		<span class="wrapper">{selected}</span>
		<span class="drop">🔽</span>
	</div>
	{#if active}
	<ul transition:slide>
		{#each items as item, i}
		<li on:click={()=>changeSelected(i)}>{item}</li>
		{/each}
	</ul>
	{/if}
</div>

<style>
	*{box-sizing:border-box;}
	input{display:none;}
	div.innerContainer{
		border-radius:5px;
		border: 1px solid rgba(0,0,0,0.5);
		padding:0.5em;
		width:20ch;
		cursor:pointer;
		display:flex;
		justify-content:space-between;
	}
	ul{
		padding:0;
		margin:0;
		width:20ch;
		border-radius:5px;
		border: 1px solid rgba(0,0,0,0.5);
	}
	li{
		list-style:none;
		padding:0.5em 1em;
		width:100%;
		cursor:pointer;
	}
	li:nth-child(2n){
		background-color:rgba(0,0,0,0.1);
	}
</style>
