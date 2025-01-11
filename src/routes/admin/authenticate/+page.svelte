<script lang="ts">
	export let form;
</script>

<div class="border max-w-2xl mx-auto bg-white shadow-md border-gray-200 rounded-lg p-5 sm:p-10">
	<h1 class="text-xl font-medium text-gray-900 mb-5">Authentification Admin</h1>

	<form method="POST">
		<div class="form-group">
			<label for="password" class="text-base font-medium text-gray-900 block my-1"
				>Mot de passe :</label
			>
			<!-- svelte-ignore a11y-autofocus -->
			<input
				type="password"
				id="password"
				name="password"
				placeholder="••••••••"
				class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 my-1"
				required
				autofocus
			/>
		</div>

		{#if form?.incorrect}
			<p class="text-error my-1">Mot de passe incorrect</p>
		{/if}

		<button
			type="submit"
			class="w-full text-white bg-emerald-700 hover:bg-opacity-90 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-1"
			>S'authentifier</button
		>
	</form>
</div>
