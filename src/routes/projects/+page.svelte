<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	onMount(() => {
		goto('/projects/completed');
	});
</script>

<svelte:head>
	<title>Projets - Jeunesse Volontaire</title>
	<meta
		name="description"
		content="Explorez les projets menés par Jeunesse Volontaire pour préserver l'environnement, soutenir la biodiversité et promouvoir des actions sociales durables."
	/>
</svelte:head>
