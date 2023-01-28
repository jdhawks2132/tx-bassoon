<script lang="ts">
	// use the $page store to get the params
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import BassoonStore from '../../../stores/BassoonStore';
	import BassoonCard from '$lib/components/cards/bassoonCard.svelte';

	let bassoons: Bassoon[];
	interface Bassoon {
		id: string;
		name: string;
		image: string;
		price: string;
		description: string;
		features?: string[];
	}

	BassoonStore.subscribe((data) => {
		bassoons = data;
	});

	// get the bassoon id from the params
	$: bassoonId = $page.params.bassoonId;

	// get the bassoon from the bassoons array
	$: bassoon = bassoons.find((bassoon) => bassoon.id === bassoonId);

	$: otherBassoons = bassoons.filter((bassoon) => bassoon.id !== bassoonId);
</script>

<section id="bassoons" class="h-full pt-8">
	<div class="flex flex-col bg-white w-11/12 lg:w-3/4 rounded-md shadow-md mx-auto p-14">
		<h2 class="text-4xl mb-8 text-center ">{bassoon?.name}</h2>
		<div class="flex flex-col lg:flex-row items-center justify-center w-full">
			<div class="flex flex-col items-center justify-center w-full lg:w-1/2">
				<img src={bassoon?.image} alt="bassoon" class="w-full lg:w-4/5 my-4 rounded-md" />
			</div>
			<div class="flex flex-col items-start justify-center w-full lg:w-1/2">
				<p class="text-xl my-4 "><span class="font-bold">Price:</span> {bassoon?.price}</p>
				<p class="text-xl my-4 ">
					<span class="font-bold">Description:</span>
					{bassoon?.description}
				</p>
				<p class="text-xl my-4 "><span class="font-bold">Features:</span></p>
				<ul class="text-xl list-disc list-inside w-11/12 lg:3/4">
					<!-- check to see if there are features before each block -->
					{#if bassoon?.features}
						{#each bassoon?.features as feature}
							<li class="my-2">{feature}</li>
						{/each}
					{/if}
				</ul>
			</div>
		</div>
	</div>
</section>

<section class="h-full pt-8">
	<div class="flex flex-col w-11/12 lg:w-3/4 mx-auto ">
		<h2 class="text-4xl mb-8 text-center ">Additional Models:</h2>
		<div class="flex flex-col lg:flex-row items-center justify-center w-full">
			{#each otherBassoons as otherBassoon}
				<BassoonCard bassoon={otherBassoon} />
			{/each}
		</div>
	</div>
</section>

<!-- return home buttons -->
<div class="flex flex-col items-center justify-center w-full">
	<a
		href="/"
		class="text-2xl text-center bg-accent text-white font-black rounded-md shadow-sm py-4 px-8 my-4"
		>Return Home</a
	>
</div>
