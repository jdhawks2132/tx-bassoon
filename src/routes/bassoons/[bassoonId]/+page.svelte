<script lang="ts">
	// use the $page store to get the params
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import BassoonStore from '../../../stores/BassoonStore';

	let bassoons: {
		id: string;
		name: string;
		image: string;
		price: string;
		description: string;
	}[];

	BassoonStore.subscribe((data) => {
		bassoons = data;
	});

	// get the bassoon id from the params
	$: bassoonId = $page.params.bassoonId;

	// get the bassoon from the bassoons array
	$: bassoon = bassoons.find((bassoon) => bassoon.id === bassoonId);
</script>

<h1>Hi from dynamic {bassoon?.name}</h1>
