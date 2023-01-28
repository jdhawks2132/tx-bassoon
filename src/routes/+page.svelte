<script>
	import { slide, fade } from 'svelte/transition';
	import Hero from '../assets/images/bassoon_hero.jpg';
</script>

<!-- add meta data like title svelte -->
<svelte:head>
	<title>Texas Bassoon Center</title>
	<meta name="description" content="Bassoon specialists located in Dallas, Texas." />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#ffffff" />
	<link rel="icon" type="image/png" href="/favicon.png" />
</svelte:head>

<section>
	<div class="flex flex-col items-center justify-center h-screen">
		<!-- Hero section using flex for mobile responsiveness  -->
		<!-- left side CTA / right side hero image -->
		<div
			class="flex flex-col lg:flex-row items-center justify-center md:justify-between w-11/12 mx-auto"
		>
			<div class="flex flex-col items-center justify-center w-full lg:w-1/2 lg:mr-11">
				<h1 class="text-5xl font-bold text-center ">Texas Bassoon Center</h1>
				<p class="text-xl text-center">Bassoon specialists located in Dallas, Texas.</p>
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
				<!-- hero image div -->
			</div>
			<div class="flex flex-col items-center justify-center w-9/12 ">
				<img src={Hero} alt="bassoon" class="w-full lg:w-4/5 my-4 rounded-md" />
			</div>
		</div>
	</div>
</section>

<section id="bassoons" transition:fade>
	<div class="flex flex-col items-center justify-center h-screen">
		<h1 class="text-6xl font-bold text-center">Bassoons</h1>
	</div>
</section>

<section id="reeds">
	<div class="flex flex-col items-center justify-center h-screen">
		<h1 class="text-6xl font-bold text-center">Reeds</h1>
	</div>
</section>

<section id="about">
	<div class="flex flex-col items-center justify-center h-screen">
		<h1 class="text-6xl font-bold text-center">About</h1>
	</div>
</section>

<section id="contact">
	<div class="flex flex-col items-center justify-center h-screen">
		<h1 class="text-6xl font-bold text-center">Contact</h1>
	</div>
</section>
