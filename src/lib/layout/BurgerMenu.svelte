<!-- this component is the burger menu for small screen -->
<script>
	import { page } from '$app/stores';

	$: location = $page.url.pathname;

	let routes = [
		{
			path: 'projects',
			name: 'projets',
			children: [
				{ path: 'completed', name: 'projets réalisé' },
				{ path: 'ongoing', name: 'projets en cours de réalisation' }
			]
		},
		{ path: 'new', name: 'nouveauté' },
		{ path: 'join', name: 'Nous Rejoindre' },
		{ path: 'about', name: 'À propos' }
	];
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<ul
	tabindex="0"
	class="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
>
	<li class="font-medium capitalize">
		<a class={location == '/' ? 'bg-primary' : ''} href="/">accueil</a>
	</li>
	{#each routes as route}
		{#if route.children}
			{#each route.children as child}
				<li class="font-medium capitalize">
					<a
						class={location == `/${route.path}/${child.path}` ? 'bg-primary' : ''}
						href={`/${route.path}/${child.path}`}
					>
						{child.name}
					</a>
				</li>
			{/each}
		{:else}
			<li class="font-medium capitalize">
				<a class={location == `/${route.path}` ? 'bg-primary' : ''} href={`/${route.path}`}>
					{route.name}
				</a>
			</li>
		{/if}
	{/each}
</ul>
