import { writable } from 'svelte/store';

const BassoonStore = writable([
	{
		id: '214',
		name: 'Model 214',
		image: '/src/lib/assets/images/bassoon.jpg',
		price: 'Call for price',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel'
	},
	{
		id: '215',
		name: 'Model 215',
		image: '/src/lib/assets/images/bassoon.jpg',
		price: 'Call for price',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel'
	},
	{
		id: '216',
		name: 'Model 216',
		image: '/src/lib/assets/images/bassoon.jpg',
		price: 'Call for price',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel'
	},
	{
		id: '217',
		name: 'Model 217',
		image: '/src/lib/assets/images/bassoon.jpg',
		price: 'Call for price',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel'
	}
]);

export default BassoonStore;
