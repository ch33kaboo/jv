<!-- this component is for the navbar element (when there is no burger menu) -->
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

<div class="navbar-end hidden lg:flex">
	<ul class="flex flex-row w-full justify-around">
		<li
			class="group relative cursor-pointer px-2 hover:opacity-100 {location == '/'
				? 'opacity-100'
				: 'opacity-60'} transition-all"
		>
			<a
				on:click={() => {
					goto('/');
				}}>accueil</a
			>
			<span
				class="absolute -bottom-1 left-0 h-1 {location == '/'
					? 'w-full'
					: 'w-0'} rounded-full bg-slate-900 bg-opacity-90 transition-all group-hover:w-full"
			/>
		</li>
		{#each routes as route}
			<li
				class="group capitalize relative cursor-pointer px-2 hover:opacity-100 {location ==
				`/${route.path}`
					? 'opacity-100'
					: 'opacity-60'} transition-all"
			>
				<a
					on:click={() => {
						goto(`${route.path}`);
					}}>{route.name}</a
				>
				<span
					class="absolute -bottom-1 left-0 h-1 {location == `/${route.path}`
						? 'w-full'
						: 'w-0'} rounded-full bg-slate-900 bg-opacity-90 transition-all group-hover:w-full"
				/>
			</li>
		{/each}
	</ul>
</div>
