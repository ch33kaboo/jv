<script lang="ts">
	import HeroSection from '$lib/components/HeroSection.svelte';
	import MissionVision from '$lib/components/home/MissionVision.svelte';
	import JoinUs from '$lib/components/home/JoinUs.svelte';
</script>

<svelte:head>
	<title>Accueil - Jeunesse Volontaire</title>
</svelte:head>

<div class="flex flex-col gap-12">
	<HeroSection />
	<MissionVision />
	<JoinUs />
</div>
