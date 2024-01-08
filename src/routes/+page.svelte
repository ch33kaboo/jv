<script lang="ts">
	import { createClient } from '@sanity/client';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const client = createClient({
		projectId: 'u1b2ghmt',
		dataset: 'production',
		apiVersion: '2023-12-18',
		useCdn: false
	});

	let load = async () => {
		const data = await client.fetch(`*[_type == "project"]`);

		if (data) {
			return {
				projects: data
			};
		}
		return {
			status: 500,
			body: new Error('Internal Server Error')
		};
	};
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#await load()}
	wait bro
{:then res}
	<ul>
		{#each res.projects as project}
			<li>this is {project.name}</li>
		{/each}
	</ul>
{/await}
