<svelte:head>
	<title>Admin - Jeunesse Volontaire</title>
	<meta
		name="description"
		content="Accès à l'administration de Jeunesse Volontaire pour gérer le contenu et les fonctionnalités du site."
	/>
</svelte:head>

<div class="flex flex-row justify-start items-center gap-2 mb-4">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="icon icon-tabler icons-tabler-outline icon-tabler-settings"
		><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
			d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
		/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /></svg
	>
	<h2 class="text-lg sm:text-2xl font-medium">Liens utiles pour l'administrateur :</h2>
</div>
<ul class="list-disc flex flex-col gap-2 ml-12">
	<li>
		<a href="/structure" class="link-hover">Tableau de bord du système de gestion de contenu</a>
	</li>
	<li>
		<a href="https://statcounter.com/p13076518/summary" target="_blank" class="link-hover"
			>Statistiques du site web</a
		>
	</li>
	<li><a href="/members" class="link-hover">Page des membres</a></li>
</ul>
