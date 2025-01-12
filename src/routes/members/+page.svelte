<script>
	export let data;
</script>

<svelte:head>
	<title>Members - Jeunesse Volontaire</title>
</svelte:head>

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
					<td>{member.function}</td>
					<td>{new Date(member.created_at).toLocaleDateString('fr-FR')}</td>
					<td
						class={member.applicationStatus === 'pending'
							? 'text-blue-800'
							: member.applicationStatus === 'accepted'
							? 'text-green-800'
							: 'text-red-800'}>{member.applicationStatus}</td
					>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
