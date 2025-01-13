<script lang="ts">
	export let data;
</script>

<div class="container mx-auto p-4">
	<h1 class="text-4xl font-bold text-center mb-8">Ongoing Projects</h1>

	<div class="grid gap-6">
		{#each data.projects as project}
			<div class="card lg:card-side bg-base-100 shadow-xl">
				{#if project.photo}
					<figure class="lg:w-1/3">
						<img src={project.photo.url} alt={project.name} class="h-full w-full object-cover" />
					</figure>
				{/if}
				<div class="card-body lg:w-2/3">
					<h2 class="card-title">{project.name}</h2>
					<div class="prose">
						{#if typeof project.description === 'string'}
							<p>{project.description}</p>
						{:else}
							{@html project.description}
						{/if}
					</div>
					{#if project.actions && project.actions.length > 0}
						<div class="mt-4">
							<h3 class="font-semibold mb-2">Related Actions:</h3>
							<div class="flex flex-wrap gap-2">
								{#each project.actions as action}
									<span class="badge badge-primary">{action.name}</span>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
