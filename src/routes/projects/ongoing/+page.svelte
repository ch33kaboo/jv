<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { goto } from '$app/navigation';
	export let data;
</script>

<svelte:head>
	<title>Projets en Cours de Réalisation - Jeunesse Volontaire</title>
	<meta
		name="description"
		content="Explorez les projets en cours de réalisation par Jeunesse Volontaire pour préserver l'environnement, soutenir la biodiversité et promouvoir des actions sociales durables."
	/>
</svelte:head>

<div class="container mx-auto">
	<h1 class="text-3xl font-extrabold text-start mb-2">Projets en Cours de Réalisation</h1>
	<p class="text-neutral text-opacity-90 mb-6">
		Voici les projets actuellement en cours de réalisation par l'Association Jeunesse Volontaire.
	</p>

	<div class="grid gap-6">
		{#each data.projects as project}
			<div class="card lg:card-side bg-base-100 shadow-xl animate-fade border border-base-200">
				{#if project.photo}
					<figure class="lg:w-1/3">
						<img src={project.photo.url} alt={project.name} class="h-full w-full object-cover" />
					</figure>
				{/if}
				<div class="card-body w-full lg:max-w-none lg:w-2/3">
					<h2 class="card-title">{project.name}</h2>
					<div class="prose max-w-none max-h-72 lg:max-h-56 overflow-hidden relative">
						<div
							class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-base-100 to-transparent"
						/>
						<PortableText value={project.description} onMissingComponent={false} />
					</div>
					<div class="mt-4 flex flex-col items-start md:flex-row md:justify-between gap-5">
						{#if project.actions && project.actions.length > 0}
							<div>
								<h3 class="font-semibold mb-2">Actions liées à ce projet:</h3>
								<div class="flex flex-wrap gap-2">
									{#each project.actions.slice(0, 5) as action}
										<span class="badge badge-primary p-3 font-medium h-auto">{action.name}</span>
									{/each}
									{#if project.actions.length > 5}
										<span class="badge badge-secondary p-3 font-medium"
											>Cliquez sur "voir les détails du projet" pour voir toutes les actions</span
										>
									{/if}
								</div>
							</div>
						{/if}
						<button
							class="btn btn-primary self-end"
							on:click={() => goto(`/projects/${project._id}`)}>voir les détails du projet</button
						>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
