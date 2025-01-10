<script>
	export let data;
</script>

<svelte:head>
	<title>Members - Jeunesse Volontaire</title>
</svelte:head>

<ul>
	{#each data.users as user}
		<li>{user.lastName}</li>
	{/each}
</ul>
