<script lang="ts">
	import { onMount } from 'svelte';

	// Get all hero section photos
	const photos = [
		'/photos/heroSectionPhotos/femmes.jpeg',
		'/photos/heroSectionPhotos/groupe_lac.jpeg',
		'/photos/heroSectionPhotos/children_smiling.jpeg',
		'/photos/heroSectionPhotos/president_au_lac.jpeg',
		'/photos/heroSectionPhotos/group_photo_litma.jpeg',
		'/photos/heroSectionPhotos/jeune_fille_au_lac.jpeg',
		'/photos/heroSectionPhotos/plantant_une_arbre.jpeg',
		'/photos/heroSectionPhotos/fleurs_place_carnot.jpeg',
		'/photos/heroSectionPhotos/group_photo_smiling.jpeg',
		'/photos/heroSectionPhotos/group_photo_smiling2.jpeg',
		'/photos/heroSectionPhotos/action_sidi_yacoub.jpg',
		'/photos/heroSectionPhotos/lac_sidi_mohamed_benali.jpeg',
		'/photos/heroSectionPhotos/trash.jpeg'
	];

	let sliderContainer: HTMLDivElement;

	onMount(() => {
		const duration = 25000; // Duration for one complete cycle
		const animate = () => {
			if (!sliderContainer) return;

			const firstItem = sliderContainer.firstElementChild as HTMLElement;
			const itemWidth = firstItem.offsetWidth;

			sliderContainer.style.transition = `transform ${duration}ms linear`;
			sliderContainer.style.transform = `translateX(-${itemWidth}px)`;

			setTimeout(() => {
				sliderContainer.style.transition = 'none';
				sliderContainer.style.transform = 'translateX(0)';
				sliderContainer.appendChild(firstItem.cloneNode(true));
				firstItem.remove();
				requestAnimationFrame(animate);
			}, duration);
		};

		requestAnimationFrame(animate);
	});
</script>

<div class="relative w-full h-[490px] overflow-hidden rounded-xl sm:rounded-none -mt-5 md:-mt-8">
	<!-- Gradient overlays for fade effect -->
	<div
		class="absolute inset-y-0 left-0 hidden sm:block w-40 bg-gradient-to-r from-[#F9FFFC] to-transparent z-10"
	/>
	<div
		class="absolute inset-y-0 right-0 hidden sm:block w-40 bg-gradient-to-l from-[#F9FFFC] to-transparent z-10"
	/>

	<!-- Image slider -->
	<div class="flex h-full" bind:this={sliderContainer}>
		{#each photos as photo}
			<div class="flex-none h-full px-2">
				<img
					src={photo}
					alt="Jeunesse Volontaire activities"
					class="w-full h-full object-cover rounded-xl"
					loading="lazy"
				/>
			</div>
		{/each}
	</div>

	<!-- Text overlay -->
	<div
		class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-950 to-transparent pb-4 pt-56 flex items-center justify-center z-20 text-white text-center rounded-b-xl"
	>
		<div class="max-w-3xl">
			<h1 class="text-3xl md:text-5xl font-bold mb-3">Association Jeunesse&nbsp;Volontaire</h1>
			<p class="text-xl md:text-2xl">
				Ensemble, agissons pour un avenir durable et une société solidaire.
			</p>
		</div>
	</div>
</div>
