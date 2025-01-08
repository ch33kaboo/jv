<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';

	export let data: PageData;

	// Client API:
	const { form, errors, enhance } = superForm(data.form);

	function formatPhoneNumber(phoneNumber: string = '') {
		// Remove all non-numeric characters from the input
		let cleanPhoneNumber = phoneNumber.replace(/[^0-9]+/g, '');
		// Add a space between each two digits
		let formattedPhoneNumber = cleanPhoneNumber.replace(/(\d{2})(?=\d)/g, '$1 ');
		// Limit the input to 10 digits
		phoneNumber = formattedPhoneNumber.substring(0, 14);
		return phoneNumber;
	}

	$: $form.phoneNumber = formatPhoneNumber($form.phoneNumber);
</script>

<div class="w-full h-full flex flex-col justify-center items-center">
	<div class="max-w-2xl flex flex-col gap-2 mb-6 w-full">
		<h1 class="text-3xl font-extrabold">Rejoignez Notre Association!</h1>
		<p class="text-neutral text-opacity-90">
			Ensemble, agissons pour un avenir durable.<br />
			Remplissez le formulaire ci-dessous pour devenir membre de notre Association.
		</p>
	</div>
	<form
		use:enhance
		method="POST"
		class="w-full max-w-2xl bg-white shadow-lg rounded px-8 pt-6 pb-8 border-primary border-[1px] border-opacity-50"
	>
		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					for="grid-last-name"
				>
					nom
				</label>
				<input
					aria-invalid={$errors.lastName ? 'true' : undefined}
					name="lastName"
					bind:value={$form.lastName}
					class="appearance-none block w-full bg-gray-200 text-gray-700 border {$errors.lastName
						? 'border-red-500 mb-3'
						: 'border-gray-200'} rounded px-4 py-3 leading-tight focus:outline-none focus:bg-white"
					id="grid-last-name"
					type="text"
					placeholder="Nom"
				/>
				{#if $errors.lastName}
					<p class="text-red-500 text-xs italic">{$errors.lastName}</p>
				{/if}
			</div>
			<div class="w-full md:w-1/2 px-3">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					for="grid-first-name"
				>
					prénom
				</label>
				<input
					aria-invalid={$errors.firstName ? 'true' : undefined}
					name="firstName"
					bind:value={$form.firstName}
					class="appearance-none block w-full bg-gray-200 text-gray-700 border {$errors.firstName
						? 'border-red-500 mb-3'
						: 'border-gray-200'} rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					id="grid-first-name"
					type="text"
					placeholder="Prénom"
				/>
				{#if $errors.firstName}
					<p class="text-red-500 text-xs italic">{$errors.firstName}</p>
				{/if}
			</div>
		</div>
		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full px-3">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					for="grid-email"
				>
					E-mail
				</label>
				<input
					aria-invalid={$errors.email ? 'true' : undefined}
					name="email"
					bind:value={$form.email}
					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 {$errors.email
						? 'border-red-500 mb-3'
						: 'border-gray-200'} leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					id="grid-email"
					type="email"
					placeholder="exemple@gmail.com"
				/>
				{#if $errors.email}
					<p class="text-red-500 text-xs italic">{$errors.email}</p>
				{/if}
			</div>
		</div>
		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					for="grid-age"
				>
					Age
				</label>
				<input
					aria-invalid={$errors.age ? 'true' : undefined}
					name="age"
					bind:value={$form.age}
					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 {$errors.age
						? 'border-red-500 mb-3'
						: 'border-gray-200'}"
					id="grid-age"
					type="number"
				/>
				{#if $errors.age}
					<p class="text-red-500 text-xs italic">{$errors.age}</p>
				{/if}
			</div>
			<div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					for="grid-phone"
				>
					Téléphone
				</label>
				<input
					aria-invalid={$errors.phoneNumber ? 'true' : undefined}
					name="phoneNumber"
					bind:value={$form.phoneNumber}
					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 {$errors.phoneNumber
						? 'border-red-500 mb-3'
						: 'border-gray-200'}"
					id="grid-phone"
					type="tel"
					placeholder="0* ** ** ** **"
				/>
				{#if $errors.phoneNumber}
					<p class="text-red-500 text-xs italic">{$errors.phoneNumber}</p>
				{/if}
			</div>
		</div>
		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full px-3">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					for="grid-function"
				>
					Fonction <span class="lowercase italic opacity-90 font-medium"
						>(ce champ est facultatif)</span
					>
				</label>
				<input
					aria-invalid={$errors.function ? 'true' : undefined}
					name="function"
					bind:value={$form.function}
					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 {$errors.function
						? 'border-red-500 mb-3'
						: 'border-gray-200'} leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					id="grid-function"
					type="text"
					placeholder="Fonction"
				/>
				{#if $errors.function}
					<p class="text-red-500 text-xs italic">{$errors.function}</p>
				{/if}
			</div>
		</div>
		<div class="flex items-center justify-end">
			<button class="btn btn-primary"> Soumettre </button>
		</div>
	</form>
</div>
