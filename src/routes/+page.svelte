<script lang="ts">
	import Hero from '$lib/assets/images/bassoon_hero.jpg';
	import BassoonCard from '$lib/components/cards/bassoonCard.svelte';
	import ReedCard from '$lib/components/cards/reedCard.svelte';
	import BassoonStore from '../stores/BassoonStore';
	import ReedStore from '../stores/ReedStore';

	let bassoons: {
		id: string;
		name: string;
		image: string;
		price: string;
		description: string;
		features: string[];
	}[];

	let reeds: {
		id: number;
		name: string;
		price: string;
		image: string;
		description: string;
		quantity: number;
		likes: number;
		shipping: string;
	}[];

	BassoonStore.subscribe((data) => {
		bassoons = data;
	});

	ReedStore.subscribe((data) => {
		reeds = data;
	});
</script>

<!-- add meta data like title svelte -->
<svelte:head>
	<title>Texas Bassoon Center</title>
	<meta name="description" content="Bassoon specialists located in Dallas, Texas." />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#ffffff" />
	<link rel="icon" type="image/png" href="/favicon.png" />
</svelte:head>

<section class="py-11 lg:py-0 h-112 lg:h-screen">
	<div class="flex flex-col items-center justify-center h-full">
		<div
			class="flex flex-col lg:flex-row items-center justify-center md:justify-between w-11/12 mx-auto"
		>
			<div class="flex flex-col items-center justify-center w-full lg:w-1/2 lg:mr-11">
				<h2 class="text-5xl font-bold text-center ">Texas Bassoon Center</h2>
				<p class="text-xl my-4 text-center">Bassoon specialists located in Dallas, Texas.</p>
				<p class="text-md text-gray-500 mt-4 text-center">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ipsa ratione id laudantium
					reprehenderit suscipit voluptatum aut? Sint provident recusandae iure facere eius nesciunt
					blanditiis adipisci perspiciatis? Recusandae, sunt minus.
				</p>
				<div class="flex flex-col lg:flex-row items-center justify-center mt-8 w-full">
					<a
						href="#bassoons"
						class="bg-accent text-white px-6 py-3 m-2 w-52 rounded-md text-lg text-center font-medium hover:bg-accentDark"
						>Shop Bassoons</a
					>
					<a
						href="#reeds"
						class="bg-accent text-white px-6 py-3 m-2 w-52 rounded-md text-lg text-center font-medium hover:bg-accentDark"
						>Shop Reeds</a
					>
				</div>
			</div>
			<div class="flex flex-col items-center justify-center w-9/12 ">
				<img src={Hero} alt="bassoon" class="w-full lg:w-4/5 my-4 rounded-md" />
			</div>
		</div>
	</div>
</section>

<section id="bassoons" class="h-full">
	<h2 class="text-6xl my-4 font-bold text-center">Bassoons</h2>
	<div class="flex flex-col lg:flex-row items-center justify-center">
		{#each bassoons as bassoon}
			<BassoonCard {bassoon} />
		{/each}
	</div>
</section>

<section id="reeds" class="my-20 h-full">
	<h2 class="text-6xl my-4 font-bold text-center">Reeds</h2>
	<div class="flex flex-col lg:flex-row items-center justify-center">
		{#each reeds as reed}
			<ReedCard {reed} />
		{/each}
	</div>
</section>

<section id="about" class="my-20 h-full">
	<div class="flex flex-col lg:flex-row items-center justify-center ">
		<h2 class="text-6xl font-bold text-center">About</h2>
	</div>
</section>

<section id="contact" class="mt-20 h-full">
	<div class="flex flex-col lg:flex-row items-center justify-center">
		<h2 class="text-6xl font-bold text-center">Contact</h2>
	</div>
</section>
