<script lang="ts">
	export let mission =
		"Notre mission est de promouvoir un modèle de société durable en préservant l’environnement et la biodiversité, tout en encourageant l'engagement des jeunes à travers des actions concrètes de solidarité et de sensibilisation.";
	export let vision =
		"Nous aspirons à créer un avenir où les jeunes sont les acteurs clés du changement, en œuvrant pour la protection des écosystèmes et l'amélioration du cadre de vie à travers des initiatives écoresponsables et collaboratives.";
</script>

<section class="py-20">
	<div class="container mx-auto px-4">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-3xl font-bold mb-4">Notre Mission</h2>
				<p class="text-lg text-gray-600 mb-6">
					{mission}
				</p>
				<a
					href="/about"
					class="inline-block px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
				>
					En savoir plus
				</a>
			</div>
			<div>
				<h2 class="text-3xl font-bold mb-4">Notre Vision</h2>
				<p class="text-lg text-gray-600">
					{vision}
				</p>
			</div>
		</div>
	</div>
</section>
