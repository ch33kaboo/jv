<!-- this component is the burger menu for small screen -->
<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	$: location = $page.url.pathname;

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
	<li class="font-medium capitalize">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-missing-attribute -->
		<a
			class={location == '/' ? 'bg-primary' : ''}
			on:click={() => {
				goto('/');
			}}>accueil</a
		>
	</li>
	{#each routes as route}
		<li class="font-medium capitalize">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-missing-attribute -->
			<a
				class={location == `/${route.path}` ? 'bg-primary' : ''}
				on:click={() => {
					goto(`${route.path}`);
				}}>{route.name}</a
			>
		</li>
	{/each}
</ul>
