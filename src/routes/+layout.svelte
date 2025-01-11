<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import Navbar from '$lib/layout/Navbar.svelte';
	import Footer from '$lib/layout/Footer.svelte';
	import { afterNavigate } from '$app/navigation';

	let path = '/';
	onMount(() => {
		path = window.location.pathname;
	});

	afterNavigate(() => {
		path = window.location.pathname;
	});

	$: isStudio =
		path.startsWith('/studio') || path.startsWith('/structure') || path.startsWith('/vision');
</script>

{#if !isStudio}
	<Navbar />
{/if}
<div class="w-full h-full {!isStudio ? 'px-3 pt-14 pb-28 md:px-16 md:pt-[70px] md:pb-28' : ''}">
	<slot />
</div>
{#if !isStudio}
	<Footer />
{/if}
