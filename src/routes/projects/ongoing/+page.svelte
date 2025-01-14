<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	export let data;
</script>

<div class="container mx-auto">
	<h1 class="text-4xl font-bold text-center mb-8">Ongoing Projects</h1>

	<div class="grid gap-6">
		{#each data.projects as project}
			<div class="card lg:card-side bg-base-100 shadow-xl">
				{#if project.photo}
					<figure class="lg:w-1/3">
						<img src={project.photo.url} alt={project.name} class="h-full w-full object-cover" />
					</figure>
				{/if}
				<div class="card-body w-full sm:max-w-max lg:max-w-none lg:w-2/3">
					<h2 class="card-title">{project.name}</h2>
					<div class="prose max-w-none max-h-72 lg:max-h-64 overflow-hidden relative">
						<div
							class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-base-100 to-transparent"
						/>
						<PortableText value={project.description} />
					</div>
					<div class="mt-4 flex flex-col items-start md:flex-row md:justify-between gap-5">
						{#if project.actions && project.actions.length > 0}
							<div>
								<h3 class="font-semibold mb-2">Related Actions:</h3>
								<div class="flex flex-wrap gap-2">
									{#each project.actions as action}
										<span class="badge badge-primary">{action.name}</span>
									{/each}
								</div>
							</div>
						{/if}
						<button
							class="btn btn-primary self-end"
							on:click={() => console.log(`here show modal with id ${project._id}`)}
							>see project details</button
						>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
