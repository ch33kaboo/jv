<svelte:head>
	<title>À Propos - Jeunesse Volontaire</title>
	<meta
		name="description"
		content="Découvrez la mission et les valeurs de Jeunesse Volontaire, un groupe de jeunes bénévoles engagés dans l'action sociale et la protection de l'environnement depuis 2010."
	/>
</svelte:head>

<div class="max-w-2xl mx-auto w-full">
	<div class="relative w-full rounded-xl inset-0">
		<img
			src="/photos/heroSectionPhotos/group_photo_litma.webp"
			alt="group of volunteers smiling"
			class="w-full sm:h-[490px] object-cover rounded-xl"
		/>
		<div
			class="absolute hidden sm:block bottom-0 left-0 right-0 bg-gradient-to-t from-green-950 to-transparent pb-4 pt-40 items-center justify-center z-20 text-white text-center rounded-b-xl"
		>
			<h1 class="text-4xl font-bold">Association Jeunesse&nbsp;Volontaire</h1>
		</div>

		<h3
			class="absolute -top-2 -left-3 px-8 z-20 text-white text-center text-3xl font-naturally -rotate-[3.8deg] hidden sm:block"
		>
			JV - J’y vais, j’agis, je change
		</h3>
		<img
			src="/assets/brush.svg"
			alt="brush stroke"
			class="absolute -top-5 -left-8 z-10 w-[450px] -rotate-3 hidden sm:block"
		/>
	</div>

	<header class="block sm:hidden my-10">
		<h1 class="text-center text-2xl font-bold">Association Jeunesse&nbsp;Volontaire</h1>
	</header>

	<div class="text-neutral text-opacity-90 prose w-full max-w-none">
		<main>
			<section id="about">
				<h2>À propos</h2>
				<p>
					Groupe de Jeunes bénévoles, engagé dans l'action sociale et la protection de
					l’environnement.
				</p>
				<p><strong>Date de création :</strong> 07/07/2010</p>
				<p>
					<strong>Adresse :</strong>
					<a href="#location-on-map">13 Rue de Médine, 22000 Sidi Bel Abbès, Algérie</a>
				</p>
			</section>

			<section id="description">
				<h2>Description</h2>
				<p>
					Créée le 07/07/2010 au numéro d’enregistrement est 46/2010 par la wilaya de Sidi Bel
					Abbès, conforme à la loi 06/12 en date du 06/01/2015, sous le N°06/2015 à but non lucratif
					et apolitique, son but principal est la préservation de l’environnement, à l’initiative de
					jeunes personnes qui aiment la nature ainsi que la biodiversité.
				</p>
			</section>

			<section id="values-mission">
				<h2>Informations générales</h2>
				<p>
					<strong>Valeurs :</strong> La solidarité, la créativité, le respect et la coopération.
				</p>
				<p>
					<strong>Mission :</strong> Jeunesse Volontaire s’est donné pour mission un nouveau modèle de
					société avec une nouvelle vision afin de préserver les biens communs (climat, biodiversité,
					fonctionnement des écosystèmes).
				</p>
			</section>

			<section id="contact">
				<h2>Contact</h2>
				<p>
					<strong>Email :</strong>
					<a href="mailto:jeunessevolontaire@yahoo.fr">jeunessevolontaire@yahoo.fr</a>
				</p>
				<p><strong>Téléfax :</strong> 048743279</p>
			</section>

			<section id="additional-info">
				<h2>Informations complémentaires</h2>
				<p>
					<strong>Qualité :</strong> Observateur permanent au niveau des Nations Unies dans le cadre
					de la convention des parties pour la lutte contre la désertification et la sécheresse (Octobre
					2019).
				</p>
				<p>
					<strong>Compte bancaire :</strong> <br />
					<strong>BADR :</strong> PLACE DU 1ER NOVEMBRE Sidi Bel Abbès, 22000, Algérie<br />
					Numéro de compte : 763000001420051
				</p>
				<p>
					<strong>Le président :</strong> Sidahmed Ayadoun<br />
					<strong>Tél :</strong> 0551006266
				</p>
			</section>
		</main>
		<iframe
			id="location-on-map"
			class="w-full rounded-xl border shadow-md"
			title="Google Maps view of Jeunesse Volontaire office"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d815.1742652911921!2d-0.6350110064923736!3d35.1891023184744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7f011ad588f493%3A0xb5be56b67eef0a58!2sSi%C3%A8ge%20association%20Jeunesse%20volontaire!5e0!3m2!1sen!2sdz!4v1736339409167!5m2!1sen!2sdz"
			height="450"
			allowfullscreen={false}
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		/>
	</div>
</div>
