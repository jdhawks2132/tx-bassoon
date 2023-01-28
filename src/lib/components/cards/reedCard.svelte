<script lang="ts">
	export let reed: {
		id: number;
		name: string;
		price: string;
		image: string;
		description: string;
		quantity: number;
		likes: number;
		shipping: string;
	};
</script>

<div class="flex flex-col w-1/3 justify-evenly bg-white rounded-md shadow-sm h-3/4 m-3 ">
	<h4 class="text-2xl font-bold text-center text-gray-800 my-4">
		{reed.name}
	</h4>
	<div class="flex flex-col items-center justify-center">
		<img class="w-64 h-64 object-cover rounded-t-sm" src={reed.image} alt={reed.name} />
		<div class="flex flex-col items-center justify-center">
			<p class="text-xl m-2 w-11/12 font-bold text-center text-gray-800">
				{reed.price}
			</p>
			<p class="text-md m-2 w-11/12 font-bold text-center text-gray-500">
				{reed.description}
			</p>
		</div>
	</div>
</div>
