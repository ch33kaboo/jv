<!-- this component is for the navbar element (when there is no burger menu) -->
<script>
	/**
	 * @type {string}
	 */
	let location;

	$: location = window.window.location.pathname;
</script>

<div class="navbar-end hidden lg:flex">
	<ul class="flex flex-row w-full justify-around">
		<!-- hi -->
		<!-- hi -->
		<!-- hi -->
		<!-- hi -->
		<!-- hi -->
		<!-- hi -->
		<!-- hi -->

		<li
			class="group relative cursor-pointer px-2 hover:opacity-100 {location == '/'
				? 'opacity-100'
				: 'opacity-60'} transition-all"
		>
			<a href="/">Home</a>
			<span
				class="absolute -bottom-1 left-0 h-1 {location == '/'
					? 'w-full'
					: 'w-0'} rounded-full bg-slate-900 bg-opacity-90 transition-all group-hover:w-full"
			/>
		</li>
		<!-- hi -->
		<!-- hi -->
		<!-- hi -->
		<!-- hi -->
		<!-- hi -->
		<!-- hi -->
		<!-- hi -->
		<!-- hi -->
		<!-- hi -->

		<li>another</li>
		<li>another</li>
		<li>another</li>
	</ul>
</div>
