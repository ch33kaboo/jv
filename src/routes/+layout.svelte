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
<div class="w-full h-full px-3 py-14 md:px-16 md:py-24">
	<slot />
</div>
{#if !isStudio}
	<Footer />
{/if}
