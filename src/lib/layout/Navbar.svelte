<script>
	import { onMount } from 'svelte';
	let atBottomOfScreen = false;

	onMount(() => {
		// because I want when user get close to the bottom make navbar opacity 100%
		window.addEventListener('scroll', () => {
			if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 20) {
				atBottomOfScreen = true;
			} else {
				atBottomOfScreen = false;
			}
		});
	});
</script>

<div
	class="navbar bg-primary {atBottomOfScreen
		? 'bg-opacity-80'
		: 'bg-opacity-[0.03]'} text-base-content sticky top-0 z-30 flex h-20 w-full justify-start backdrop-blur shadow-sm transition-all"
>
	<div class="navbar-start w-full">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</div>
			<!-- the burger menu for small screen -->
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a>wahda</a></li>
				<li><a>zouj</a></li>
				<li><a>tlata</a></li>
			</ul>
		</div>
		<div class="flex w-full flex-row items-center font-semibold text-gray-700 gap-2 text-xl">
			<img src="logomeilleurqualité.png" class="h-14 m-3" alt="" />
			<h2 class="text-xl w-full tracking-tight">Association Jeunesse&nbsp;Volontaire</h2>
		</div>
	</div>
	<!-- the navbar element (when there is no burger menu) -->
	<div class="navbar-end hidden lg:flex">
		<ul class="flex flex-row w-full justify-around">
			<li>hi</li>
			<li>another</li>
			<li>another</li>
			<li>another</li>
		</ul>
	</div>
</div>
