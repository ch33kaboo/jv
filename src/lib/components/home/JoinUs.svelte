<script lang="ts">
	export let title = 'Rejoignez-Nous';
	export let description =
		'Vous souhaitez faire la différence dans votre communauté ?<br/>Rejoignez Jeunesse Volontaire et participez à nos projets passionnants.';
</script>

<section
	class="py-16 bg-gradient-to-b from-green-700 via-green-800 to-green-700 text-white relative rounded-xl overflow-hidden shadow-lg"
>
	<!-- Background image with overlay -->
	<div class="absolute inset-0 bg-gradient-to-b from-green-700 via-green-800 to-green-700">
		<img
			src="/photos/handsHoldingTrees.jpg"
			alt="Background"
			class="w-full h-full object-cover opacity-20"
		/>
	</div>

	<!-- Content -->
	<div class="container mx-auto px-4 text-center relative z-10">
		<h2 class="text-3xl font-bold mb-4">{title}</h2>
		<p class="text-lg mb-8 max-w-2xl mx-auto">
			{@html description}
		</p>
		<a
			href="/join"
			class="inline-block px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
		>
			Devenir Membre
		</a>
	</div>
</section>
