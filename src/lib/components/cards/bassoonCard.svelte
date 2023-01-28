<!-- create minimalist card with styling in tailwind css -->
<script lang="ts">
	export let bassoon: {
		id: string;
		name: string;
		image: string;
		price: string;
		description: string;
	};
</script>

<a href={`/bassoons/${bassoon.id}`}>
	<div class="flex flex-col justify-evenly bg-white rounded-md shadow-sm h-3/4 m-3 hover:scale-105">
		<h4 class="text-2xl font-bold text-center text-gray-800 my-4">
			{bassoon.name}
		</h4>
		<div class="flex flex-col items-center justify-center">
			<img class="w-64 h-64 object-cover rounded-t-sm" src={bassoon.image} alt={bassoon.name} />
			<div class="flex flex-col items-center justify-center">
				<p class="text-xl m-2 w-11/12 font-bold text-center text-gray-800">
					{bassoon.price}
				</p>
				<p class="text-md m-2 w-11/12 font-bold text-center text-gray-500">
					{bassoon.description}
				</p>
			</div>
		</div>
	</div>
</a>
