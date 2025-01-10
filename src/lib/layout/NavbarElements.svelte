<!-- this component is for the navbar element (when there is no burger menu) -->
<script lang="ts">
	import { page } from '$app/stores';

	$: location = $page.url.pathname;

	const routes = [
		{
			path: 'projects',
			name: 'Projets',
			children: [
				{ path: 'completed', name: 'Projets Réalisés' },
				{ path: 'ongoing', name: 'Projets en Cours de Réalisation' }
			]
		},
		{ path: 'new', name: 'Nouveauté' },
		{ path: 'join', name: 'Nous Rejoindre' },
		{ path: 'about', name: 'À propos' }
	];

	let navbarElementIsFocused: {
		path: String;
		name: String;
	} | null = null; // Variable to track focus state of navbar element and which one of them is focused
</script>

<div class="navbar-end hidden lg:flex">
	<ul class="flex flex-row w-full justify-around">
		<li
			class="group capitalize relative cursor-pointer px-2 hover:opacity-100 {location == '/'
				? 'opacity-100'
				: 'opacity-60'} transition-all"
		>
			<a data-sveltekit-preload-data="hover" href="/">Accueil</a>
			<span
				class="absolute -bottom-1 left-0 h-1 {location == '/'
					? 'w-full'
					: 'w-0'} rounded-full bg-slate-900 bg-opacity-90 transition-all group-hover:w-full"
			/>
		</li>
		{#each routes as { path, name, children }}
			{#if children}
				<li
					class="group capitalize relative cursor-pointer px-2 hover:opacity-100 {location.startsWith(
						`/${path}`
					) || navbarElementIsFocused?.path == path
						? 'opacity-100'
						: 'opacity-60'} transition-all"
				>
					<div class="dropdown px-2">
						<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label
							tabindex="0"
							class="cursor-pointer"
							on:focus={() => (navbarElementIsFocused = { path, name })}
							on:blur={() => (navbarElementIsFocused = null)}
						>
							{name}
						</label>
						<span
							class="absolute -bottom-1 left-0 h-1 {location.startsWith(`/${path}`) ||
							navbarElementIsFocused?.path == path
								? 'w-full'
								: 'w-0'} rounded-full bg-slate-900 bg-opacity-90 transition-all group-hover:w-full"
						/>
						<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
						<ul
							tabindex="0"
							class="dropdown-content menu p-2 shadow rounded-md w-52 bg-opacity-100 bg-gray-50 border top-8 -left-1 gap-2"
						>
							{#each children as child}
								<li>
									<a
										class="{location == `/${path}/${child.path}`
											? 'bg-gray-200'
											: ''} active:bg-gray-200 focus:bg-gray-200"
										data-sveltekit-preload-data="hover"
										href={`/${path}/${child.path}`}
									>
										{child.name}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</li>
			{:else}
				<li
					class="group capitalize relative cursor-pointer px-2 hover:opacity-100 {location.startsWith(
						`/${path}`
					)
						? 'opacity-100'
						: 'opacity-60'} transition-all"
				>
					<a data-sveltekit-preload-data="hover" href={`/${path}`}>{name}</a>
					<span
						class="absolute -bottom-1 left-0 h-1 {location == `/${path}`
							? 'w-full'
							: 'w-0'} rounded-full bg-slate-900 bg-opacity-90 transition-all group-hover:w-full"
					/>
				</li>
			{/if}
		{/each}
	</ul>
</div>
