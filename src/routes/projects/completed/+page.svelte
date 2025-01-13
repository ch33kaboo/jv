<script lang="ts">
	export let data;
</script>

<h1 class="text-3xl font-extrabold">Completed Projects</h1>

<div class="projects-grid">
	{#each data.projects as project}
		<div class="project-card">
			<h2>{project.name}</h2>
		</div>
	{/each}
</div>
