<script>
	export let data;
</script>

<svelte:head>
	<title>Members - Jeunesse Volontaire</title>
</svelte:head>

<div class="text-start mb-8">
	<h1 class="text-3xl font-bold text-gray-800 mb-2">Gestion des Membres</h1>
	<p class="text-gray-600">Liste complète des candidatures et membres de Jeunesse Volontaire</p>
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
			{#each data.users as member}
				<tr>
					<td>{member.lastName}</td>
					<td>{member.firstName}</td>
					<td>{member.email}</td>
					<td>{member.age}</td>
					<td>{member.phoneNumber}</td>
					<td class={member.function ? '' : 'opacity-60'}>{member.function || 'Non renseigné'}</td>
					<td>{new Date(member.created_at).toLocaleDateString('fr-FR')}</td>
					<td
						class={member.applicationStatus === 'pending'
							? 'text-blue-800'
							: member.applicationStatus === 'accepted'
							? 'text-green-800'
							: 'text-red-800'}
						>{member.applicationStatus === 'pending'
							? 'En attente'
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
	<button class="btn btn-primary" on:click={() => console.log('filter')}>
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
