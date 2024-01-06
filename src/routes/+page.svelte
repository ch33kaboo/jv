<script lang="ts">
	export let data: any;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#if data.projects && data.projects.length}
	<ul>
		{#each data.projects as project}
			<li>this is {project.name}</li>
		{/each}
	</ul>
{:else}
	<p>No data.projects found.</p>
{/if}
