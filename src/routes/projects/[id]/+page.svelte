<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { onMount } from 'svelte';
	export let data;

	const replaceSpecialChars = () => {
		const proseElements = document.querySelectorAll('.prose');
		proseElements.forEach((prose) => {
			prose.innerHTML = prose.innerHTML.replaceAll('&lt;', '<').replaceAll('&gt;', '>');
		});
	};

	const modifyIframes = () => {
		const iframes = document.querySelectorAll('iframe');
		iframes.forEach((iframe) => {
			// Remove width and height attributes
			iframe.removeAttribute('width');
			iframe.removeAttribute('height');
			// Add classes
			iframe.classList.add('w-full', 'aspect-video', 'shadow-md', 'rounded-lg');
		});
	};

	// this is done to render youtube video's iframes (since admin will add videos as youtube videos iframes)
	onMount(() => {
		replaceSpecialChars();
		modifyIframes();
	});
</script>

<svelte:head>
	<title>{data.project.name} - Jeunesse Volontaire</title>
	<meta name="description" content={data.project.name} />
</svelte:head>

<div class="container mx-auto prose lg:prose-xl">
	{#if data.project.photo}
		<div class="not-prose w-full h-96 relative mb-8 rounded-lg overflow-hidden">
			<img
				src={data.project.photo.url}
				alt={data.project.name}
				class="w-full h-full object-cover"
			/>
			<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
				<h1 class="text-4xl font-bold text-white mb-2">{data.project.name}</h1>
				<div class="badge badge-primary p-3 font-medium">
					{data.project.status === 'completed' ? 'Projet Réalisé' : 'Projet en Cours'}
				</div>
			</div>
		</div>
	{:else}
		<h1>{data.project.name}</h1>
		<div class="badge badge-primary mb-8">
			{data.project.status === 'completed' ? 'Projet Réalisé' : 'Projet en Cours'}
		</div>
	{/if}

	<div class="mb-12">
		<h2>Description du Projet</h2>
		<PortableText value={data.project.description} onMissingComponent={false} />
	</div>

	{#if data.project.actions && data.project.actions.length > 0}
		<div class="mb-12">
			<h2>Actions liées à ce projet</h2>
			<p>
				Pour assurer la réussite de ce projet, l'association "Jeunesse Volontaire" a réalisé
				différentes actions. Voici une liste de ces actions ainsi que leurs détails.
			</p>
			<div class="not-prose flex flex-col gap-6">
				{#each data.project.actions as action}
					<div class="card bg-base-100 shadow-md border">
						{#if action.photo}
							<figure>
								<img src={action.photo.url} alt={action.name} class="w-full h-48 object-cover" />
							</figure>
						{/if}
						<div class="card-body">
							<h3 class="card-title text-xl text-slate-800">{action.name}</h3>
							<div class="prose max-w-none">
								<PortableText value={action.description} onMissingComponent={false} />
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	<div class="not-prose">
		<a
			href="/projects/{data.project.status === 'completed' ? 'completed' : 'ongoing'}"
			class="btn btn-primary"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				class="w-4 h-4 mr-2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 19l-7-7m0 0l7-7m-7 7h18"
				/>
			</svg>
			Retour aux projets
		</a>
	</div>
</div>
