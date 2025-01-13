<script lang="ts">
	import { client } from '$lib/sanityClient';

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

<svelte:head>
	<title>Projets - Jeunesse Volontaire</title>
	<meta
		name="description"
		content="Explorez les projets menés par Jeunesse Volontaire pour préserver l'environnement, soutenir la biodiversité et promouvoir des actions sociales durables."
	/>
</svelte:head>

{#await load()}
	<div class="w-full text-center">
		<span class="loading loading-spinner loading-lg" />
	</div>
{:then res}
	<ul>
		{#each res.projects as project}
			<li>this is {project.name}</li>
		{/each}
	</ul>
{/await}
