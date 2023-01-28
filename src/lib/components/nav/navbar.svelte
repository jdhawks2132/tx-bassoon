<script>
	import Logo from '$lib/assets/images/Logo.png';
	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<nav class=" bg-primary p-11 mx-auto md:flex md:justify-between md:items-center sticky top-0 z-50">
	<div class="flex items-center justify-between">
		<a class="text-xl font-bold text-white lg:text-3xl  " href="/">Texas Bassoon Center </a>
		<!-- Mobile menu button -->
		<div on:click={toggleNavbar} class="flex md:hidden" on:keyup={toggleNavbar}>
			<button
				type="button"
				class="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
	</div>

	<div
		class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 items-end {showMenu
			? 'flex'
			: 'hidden'}"
	>
		<a class="text-white text-xl hover:font-black" href="/#bassoons">Bassoons</a>
		<a class="text-white text-xl hover:font-black" href="/#reeeds">Reeds</a>
		<a class="text-white text-xl hover:font-black" href="/#about">About</a>
		<a class="text-white text-xl hover:font-black" href="/#contact">Contact</a>
	</div>
</nav>
