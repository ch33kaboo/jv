<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} - {$page.error?.message || 'Page non trouvée'} - Jeunesse Volontaire</title>
</svelte:head>

<div class="flex flex-col items-center justify-center h-full p-8 text-center">
	<h1>{$page.status}</h1>
	<h2 class="mb-4">{$page.error?.message || 'Page non trouvée'}</h2>
	<p class="text-lg">Désolé, nous n'avons pas trouvé la page que vous recherchez.</p>
	<a href="/" class="py-2 link"> Retour à l'accueil </a>
</div>
