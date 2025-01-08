<script>
	export let data;
</script>

<ul>
	{#each data.users as user}
		<li>{user.lastName}</li>
	{/each}
</ul>
