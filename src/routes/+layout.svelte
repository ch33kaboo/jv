<script>
	import { onMount } from 'svelte';
	import '../app.css';
	let path = '/';
	onMount(() => {
		path = window.location.pathname;
	});

	$: isStudio = path === '/studio';
</script>

{#if !isStudio}
	here add navbar
{/if}
<slot />
{#if !isStudio}
	here add footer
{/if}
