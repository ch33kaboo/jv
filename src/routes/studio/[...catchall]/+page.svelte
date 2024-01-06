<script lang="ts">
	import { renderStudio, defineConfig } from 'sanity';
	import { deskTool } from 'sanity/desk';
	import { visionTool } from '@sanity/vision';
	import { onMount } from 'svelte';
	import { schemaTypes } from '../../../../sanity/schemas';

	const config = defineConfig({
		projectId: 'u1b2ghmt',
		title: 'jvCMS',
		dataset: 'production',
		apiVersion: '2023-12-18',
		useCdn: false,
		name: 'default',
		plugins: [deskTool(), visionTool()],
		schema: {
			types: schemaTypes
		}
	});

	let studioPage: HTMLElement;
	function renderSanityStudio() {
		renderStudio(studioPage, config);
	}

	onMount(renderSanityStudio);
</script>

<div class="h-screen" bind:this={studioPage} />
