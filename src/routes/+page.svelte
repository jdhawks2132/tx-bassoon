<script lang="ts">
	import Hero from '$lib/assets/images/bassoon_hero.jpg';
	import BassoonCard from '$lib/components/cards/bassoonCard.svelte';
	import ReedCard from '$lib/components/cards/reedCard.svelte';
	import BassoonStore from '../stores/BassoonStore';
	import ReedStore from '../stores/ReedStore';
	import HeadShot from '$lib/assets/images/headshot.jpg';

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

	let formState = {
		name: '',
		email: '',
		message: ''
	};

	BassoonStore.subscribe((data) => {
		bassoons = data;
	});

	ReedStore.subscribe((data) => {
		reeds = data;
	});

	const handleSubmit = () => {
		console.log(formState);

		alert(
			`Thank you for your message, ${formState.name}! We will get back to you as soon as possible.`
		);
		formState = {
			name: '',
			email: '',
			message: ''
		};
	};
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
	<h2 class="text-6xl my-20 font-bold text-center">Bassoons</h2>
	<div class="flex flex-col lg:flex-row items-center justify-center">
		{#each bassoons as bassoon}
			<BassoonCard {bassoon} />
		{/each}
	</div>
</section>

<section id="reeds" class="my-20 h-full">
	<h2 class="text-6xl my-20 font-bold text-center  ">Reeds</h2>
	<div class="flex flex-col lg:flex-row items-center justify-center">
		{#each reeds as reed}
			<ReedCard {reed} />
		{/each}
	</div>
</section>

<section id="about" class="my-20 h-full">
	<h2 class="text-6xl font-bold text-center my-20">About</h2>
	<div
		class="flex flex-col w-11/12 lg:w-2/3 mx-auto py-8 divide-y lg:flex-row lg:divide-y-0 lg:divide-x items-center justify-center bg-white rounded-md shadow-md"
	>
		<!-- create a contact card using tailwind css keeping mobile responsiveness in mind -->
		<div class="flex flex-col items-center justify-center w-9/12 lg:w-1/2">
			<img src={HeadShot} alt="bassoon" class="w-2/3 my-4 rounded-full border-primary border-4" />
		</div>
		<div class="flex flex-col p-4 items-center justify-center w-11/12 lg:w-1/2">
			<h3 class="text-2xl">FirstName LastName</h3>
			<p class="text-xl text-gray-500 my-4">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur commodi eos totam
				porro! In vitae cum eos quasi. Cupiditate ipsa, similique beatae nam possimus ex. Dolorem
				maxime aut quae nihil.
			</p>

			<p class="text-xl text-gray-500 my-4">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur commodi eos totam
				porro! In vitae cum eos quasi. Cupiditate ipsa, similique beatae nam possimus ex. Dolorem
				maxime aut quae nihil.
			</p>
		</div>
	</div>
</section>

<section id="contact" class="pb-20 h-full">
	<h2 class="text-6xl font-bold text-center mb-20">Contact</h2>
	<div class="flex flex-col lg:flex-row items-center justify-center">
		<form
			on:submit|preventDefault={handleSubmit}
			class="flex flex-col w-11/12 lg:w-2/3 mx-auto py-8 bg-white rounded-md shadow-md"
		>
			<div class="flex flex-col lg:flex-row items-center justify-center">
				<div class="flex flex-col w-11/12 lg:w-1/3 mx-auto">
					<label for="name" class="text-xl font-medium">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						class="border-gray-300 border-2 rounded-md px-4 py-2 my-2"
						bind:value={formState.name}
					/>
				</div>
				<div class="flex flex-col w-11/12 lg:w-1/3 mx-auto">
					<label for="email" class="text-xl font-medium">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						class="border-gray-300 border-2 rounded-md px-4 py-2 my-2"
						bind:value={formState.email}
					/>
				</div>
			</div>
			<div class="flex flex-col w-11/12 mx-auto">
				<label for="message" class="text-xl font-medium">Message</label>
				<textarea
					name="message"
					id="message"
					cols="30"
					rows="10"
					class="border-gray-300 border-2 rounded-md px-4 py-2 my-2"
					bind:value={formState.message}
				/>
			</div>
			<div class="flex flex-col w-11/12 mx-auto">
				<button
					type="submit"
					class="bg-accent text-white px-6 py-3 m-2 w-52 rounded-md text-lg text-center font-medium hover:bg-accentDark"
				>
					Submit
				</button>
			</div>
		</form>
	</div>
</section>
