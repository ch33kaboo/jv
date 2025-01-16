<script>
	const currentYear = new Date().getFullYear();
</script>

<footer
	class="flex flex-col items-center justify-center bg-gray-50 bg-opacity-90 backdrop-blur-sm shadow-sm text-primary-content p-10 gap-14 border-t"
	style="box-shadow: 0 -1px 6px rgba(0, 0, 0, 0.05);"
>
	<div
		class="flex flex-col md:flex-row items-start justify-center md:justify-normal w-full gap-y-14 gap-x-24"
	>
		<div
			class="flex flex-col md:flex-row gap-5 items-center justify-center md:justify-start w-full sm:w-1/2"
		>
			<img
				src="/logomeilleurqualité.png"
				class="h-24 m-3 sm:mx-3 sm:my-0"
				alt="logo Association Jeunesse Volontaire"
			/>
			<p class="text-lg text-center md:text-left max-w-md italic">
				<b class="not-italic">Association Jeunesse&nbsp;Volontaire.</b><br />Groupe de Jeunes
				bénévoles, engagé dans l'action sociale et la protection de l’environnement.
			</p>
		</div>
		<div class="w-full sm:w-1/2">
			<header class="text-primary-content opacity-100 mb-2 font-bold uppercase">Navigation</header>
			<ul class="select-none">
				<li><a href="/" class="link-hover">Accueil</a></li>
				<li>
					<span><a href="/projects" class="link-hover">Projets</a></span>
					<ul class="ml-5">
						<li>
							<a href="/projects/completed" class="link-hover">Projets Réalisés</a>
						</li>
						<li>
							<a href="/projects/ongoing" class="link-hover">Projets en Cours de Réalisation</a>
						</li>
					</ul>
				</li>
				<li><a href="/new" class="link-hover">Nouveauté</a></li>
				<li><a href="/join" class="link-hover">Nous Rejoindre</a></li>
				<li><a href="/about" class="link-hover">À Propos</a></li>
			</ul>
		</div>
	</div>
	<div
		class="flex flex-col md:flex-row-reverse items-center justify-center md:justify-normal w-full gap-y-14 gap-x-24"
	>
		<div class="flex flex-col justify-center items-center md:items-start w-full sm:w-1/2">
			<header class="text-primary-content opacity-100 mb-2 font-bold uppercase">
				Réseaux sociaux
			</header>
			<div class="grid grid-flow-col gap-4">
				<a href="https://x.com" target="_blank" aria-label="Visitez notre page Twitter"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current hover:fill-emerald-500 cursor-pointer transition-all"
						><path
							d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
						/></svg
					></a
				>
				<a
					href="https://www.instagram.com/jv_sba"
					target="_blank"
					aria-label="Visitez notre page Instagram"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="30"
						height="30"
						viewBox="0 0 24 24"
						class="-translate-y-[3px] fill-current hover:fill-emerald-500 cursor-pointer transition-all"
					>
						<path
							d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"
						/>
					</svg>
				</a>
				<a href="https://youtube.com" target="_blank" aria-label="Visitez notre chaîne YouTube"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current hover:fill-emerald-500 cursor-pointer transition-all"
						><path
							d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
						/></svg
					></a
				>
				<a
					href="https://www.facebook.com/J.Volontaire"
					target="_blank"
					aria-label="Visitez notre page Facebook"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current hover:fill-emerald-500 cursor-pointer transition-all"
						><path
							d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
						/></svg
					></a
				>
			</div>
		</div>
		<div class="w-full sm:w-1/2 md:pl-4">
			<p>
				&copy; {currentYear ? currentYear : 2025} Jeunesse Volontaire (jv). Tous droits réservés.
			</p>
			<p>
				Développé par <a
					href="https://chakib.tech"
					target="_blank"
					rel="noopener noreferrer"
					class="link">Chakib Ouzane (ch33kaboo)</a
				>.
			</p>
		</div>
	</div>
</footer>
