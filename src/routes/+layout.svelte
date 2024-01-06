<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import Navbar from '$lib/layout/Navbar.svelte';
	import Footer from '$lib/layout/Footer.svelte';
	let path = '/';
	onMount(() => {
		path = window.location.pathname;
	});

	$: isStudio = path === '/studio';
</script>

{#if !isStudio}
	<Navbar />
{/if}
<slot />
{#if !isStudio}
	<Footer />
{/if}
