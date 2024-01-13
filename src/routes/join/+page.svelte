<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';

	function formatPhoneNumber(phoneNumber: string = '') {
		// Remove all non-numeric characters from the input
		let cleanPhoneNumber = phoneNumber.replace(/[^0-9]+/g, '');
		// Add a space between each two digits
		let formattedPhoneNumber = cleanPhoneNumber.replace(/(\d{2})(?=\d)/g, '$1 ');
		// Limit the input to 10 digits
		phoneNumber = formattedPhoneNumber.substring(0, 14);
		return phoneNumber;
	}

	export let data: PageData;

	// Client API:
	const { form } = superForm(data.form);
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
					bind:value={$form.lastName}
					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
					id="grid-last-name"
					type="text"
					placeholder="Nom"
				/>
				<p class="text-red-500 text-xs italic">Please fill out this field.</p>
			</div>
			<div class="w-full md:w-1/2 px-3">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					for="grid-first-name"
				>
					prénom
				</label>
				<input
					bind:value={$form.firstName}
					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					id="grid-first-name"
					type="text"
					placeholder="Prénom"
				/>
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
					bind:value={$form.email}
					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					id="grid-email"
					type="email"
					placeholder="exemple@gmail.com"
				/>
				<p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
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
					bind:value={$form.age}
					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					id="grid-age"
					type="number"
				/>
			</div>
			<div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					for="grid-phone"
				>
					Téléphone
				</label>
				<input
					bind:value={$form.phoneNumber}
					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					id="grid-phone"
					type="tel"
					placeholder="0* ** ** ** **"
				/>
			</div>
		</div>
		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full px-3">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					for="grid-function"
				>
					Fonction
				</label>
				<input
					bind:value={$form.function}
					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					id="grid-function"
					type="text"
					placeholder="Fonction"
				/>
				<p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
			</div>
		</div>
		<div class="flex items-center justify-end">
			<button class="btn btn-primary" type="button"> Soumettre </button>
		</div>
	</form>
</div>
