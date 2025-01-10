<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	onMount(() => {
		goto('/structure');
	});
</script>

<svelte:head>
	<title>Admin - Jeunesse Volontaire</title>
</svelte:head>
