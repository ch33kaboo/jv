<script>
	export let data;
	let showFilterModal = false;
	let selectedStatus = 'all';
	let tempSelectedStatus = 'all';
	$: filteredUsers =
		selectedStatus === 'all'
			? data.users
			: data.users.filter((user) => user.applicationStatus === selectedStatus);
</script>

<svelte:head>
	<title>Membres - Jeunesse Volontaire</title>
	<meta name="description" content="Consultez la liste des membres de Jeunesse Volontaire." />
</svelte:head>

<div class="text-start mb-8">
	<h1 class="text-3xl font-bold text-gray-800 mb-2">Gestion des Membres</h1>
	<p class="text-gray-600">
		{selectedStatus === 'all'
			? 'Liste complète des candidatures et membres de Jeunesse Volontaire'
			: selectedStatus === 'pending'
			? 'Liste des candidatures en attente'
			: selectedStatus === 'accepted'
			? 'Liste des candidatures acceptées'
			: 'Liste des candidatures rejetées'}
	</p>
</div>
<div class="overflow-x-auto">
	<table class="table border bg-white shadow-md border-gray-200 rounded-lg">
		<thead>
			<tr>
				<th>Nom</th>
				<th>Prénom</th>
				<th>Email</th>
				<th>Âge</th>
				<th>Téléphone</th>
				<th>Fonction</th>
				<th>Date de candidature</th>
				<th>Statut</th>
			</tr>
		</thead>
		<tbody>
			{#each filteredUsers as member}
				<tr>
					<td>{member.lastName}</td>
					<td>{member.firstName}</td>
					<td>{member.email}</td>
					<td>{member.age}</td>
					<td>{member.phoneNumber.replace(/ /g, '\u00A0')}</td>
					<td class={member.function ? '' : 'opacity-60'}>{member.function || 'Non renseigné'}</td>
					<td>{new Date(member.created_at).toLocaleDateString('fr-FR')}</td>
					<td
						class={member.applicationStatus === 'pending'
							? 'text-blue-800'
							: member.applicationStatus === 'accepted'
							? 'text-green-800'
							: 'text-red-800'}
						>{member.applicationStatus === 'pending'
							? 'En attente'.replace(/ /g, '\u00A0') // to avoid breaking the text (non-breaking space)
							: member.applicationStatus === 'accepted'
							? 'Accepté'
							: 'Rejeté'}</td
					>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<div class="flex flex-col sm:flex-row gap-4 mt-6 justify-end">
	<button class="btn btn-primary" on:click={() => (showFilterModal = true)}>
		Filtrer par statut
	</button>
	<a
		href="https://supabase.com/dashboard/project/tdccvcaasjcopyhaeruy/editor/29033?schema=public"
		target="_blank"
		class="btn btn-secondary"
	>
		Appliquer des modifications
	</a>
</div>

{#if showFilterModal}
	<div class="fixed inset-0 bg-black bg-opacity-5 flex items-center justify-center z-10">
		<div class="bg-white p-6 rounded-lg shadow-xl w-96">
			<h3 class="text-lg font-semibold mb-4">Filtrer par statut</h3>
			<select class="select select-bordered w-full mb-4" bind:value={tempSelectedStatus}>
				<option value="all">Tous les statuts</option>
				<option value="pending">En attente</option>
				<option value="accepted">Accepté</option>
				<option value="rejected">Rejeté</option>
			</select>
			<div class="flex justify-end gap-2">
				<button class="btn btn-ghost" on:click={() => (showFilterModal = false)}> Fermer </button>
				<button
					class="btn btn-primary"
					on:click={() => {
						selectedStatus = tempSelectedStatus;
						showFilterModal = false;
						window.scrollTo({ top: 0, behavior: 'smooth' });
					}}
				>
					Appliquer
				</button>
			</div>
		</div>
	</div>
{/if}
