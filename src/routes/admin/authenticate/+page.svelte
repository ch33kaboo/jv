<script lang="ts">
	export let form;
</script>

<div class="login">
	<h1>Admin Authentication</h1>

	<form method="POST">
		<div class="form-group">
			<label for="password">Password:</label>
			<input type="password" id="password" name="password" required />
		</div>

		{#if form?.incorrect}
			<p class="error">Incorrect password</p>
		{/if}

		<button type="submit">Authenticate</button>
	</form>
</div>

<style>
	.login {
		max-width: 400px;
		margin: 2rem auto;
		padding: 2rem;
	}

	.form-group {
		margin-bottom: 1rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
	}

	input {
		width: 100%;
		padding: 0.5rem;
		margin-bottom: 1rem;
	}

	.error {
		color: red;
		margin-bottom: 1rem;
	}

	button {
		width: 100%;
	}
</style>
