<!-- this component is the burger menu for small screen -->
<script>
	let routes = [
		{ path: 'projects', name: 'projets' },
		{ path: 'join', name: 'Rejoindre' },
		{ path: 'about', name: 'À propos' }
	];
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<ul
	tabindex="0"
	class="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
>
	<li class="font-medium capitalize"><a href="/">accueil</a></li>
	{#each routes as route}
		<li class="font-medium capitalize"><a href={route.path}>{route.name}</a></li>
	{/each}
</ul>
