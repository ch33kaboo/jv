<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { onMount } from 'svelte';
	export let data;

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString('fr-FR', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	};

	const alignArabicRight = () => {
		const proseElements = document.querySelectorAll('.prose');
		const arabicRegex = /^[\u0600-\u06FF]/; // Regex to detect Arabic characters at the start

		proseElements.forEach((proseElement) => {
			const allChildren = proseElement.querySelectorAll('*'); // Get all inner tags

			allChildren.forEach((child) => {
				if (child.textContent.trim() && arabicRegex.test(child.textContent.trim())) {
					child.classList.add('text-right'); // Add the alignment class if Arabic is detected
				}
			});
		});
	};

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

	onMount(() => {
		replaceSpecialChars();
		modifyIframes();
		alignArabicRight();
	});
</script>

<svelte:head>
	<title>Nouveauté - Jeunesse Volontaire</title>
	<meta
		name="description"
		content="Restez informé des prochaines actions, projets et événements de Jeunesse Volontaire, une association dédiée à la protection de l'environnement."
	/>
</svelte:head>

<div class="max-w-2xl mx-auto w-full flex flex-col gap-14">
	<h1 class="capitalize text-4xl font-extrabold">Découvrez nos dernières actualités</h1>
	{#each data.news as newsItem}
		<hr />
		<article class="flex flex-col gap-7">
			<header>
				<h1 class="text-3xl font-extrabold mb-2">{newsItem.title}</h1>
				<div class="flex flex-row justify-start items-center">
					<svg
						class="w-5 h-5 mr-1 text-gray-600"
						data-slot="icon"
						fill="none"
						stroke-width="1.5"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
						/>
					</svg>
					<time datetime={newsItem.publishedAt} class="text-sm text-gray-600">
						Publié le {formatDate(newsItem.publishedAt)}
					</time>
				</div>
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
