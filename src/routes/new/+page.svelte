<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	export let data;

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString('fr-FR', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	};
</script>

<svelte:head>
	<title>Nouveauté - Jeunesse Volontaire</title>
	<meta
		name="description"
		content="Restez informé des prochaines actions, projets et événements de Jeunesse Volontaire, une association dédiée à la protection de l'environnement."
	/>
</svelte:head>

<div class="max-w-2xl mx-auto w-full flex flex-col gap-16">
	{#each data.news as newsItem}
		<article class="flex flex-col gap-6">
			<header>
				<h1 class="text-3xl font-extrabold mb-2">{newsItem.title}</h1>
				<time datetime={newsItem.publishedAt} class="text-sm text-gray-600">
					Publié le {formatDate(newsItem.publishedAt)}
				</time>
			</header>

			{#if newsItem.photo}
				<div
					class="w-full rounded-lg border border-neutral border-opacity-55 shadow-lg shadow-gray-300 overflow-hidden"
				>
					<img
						src={newsItem.photo.url}
						alt={newsItem.photo.alt || newsItem.title}
						class="w-full h-full object-cover transform transition duration-300 hover:scale-105"
					/>
				</div>
			{/if}

			<div class="text-neutral text-opacity-90 prose w-full max-w-none">
				<PortableText value={newsItem.content} onMissingComponent={false} />
			</div>
		</article>
	{/each}

	{#if data.news.length === 0}
		<div class="text-center py-12">
			<h2 class="text-2xl font-semibold text-gray-700">Aucune nouveauté pour le moment</h2>
			<p class="text-gray-600 mt-2">Revenez bientôt pour découvrir nos dernières actualités.</p>
		</div>
	{/if}
</div>
