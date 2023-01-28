import { writable } from 'svelte/store';

const ReedStore = writable([
	{
		id: 1,
		name: 'Texas Reed',
		price: '$30.00',
		image: 'https://images.unsplash.com/photo-15004',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel',
		quantity: 1,
		likes: 0,
		shipping: '$5.00'
	},
	{
		id: 2,
		name: 'Holiday Reed',
		price: '$30.00',
		image: 'https://images.unsplash.com/photo-15004',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euis',
		quantity: 1,
		likes: 0,
		shipping: '$5.00'
	},
	{
		id: 3,
		name: 'Student Reed',
		price: '$20.00',
		image: 'https://images.unsplash.com/photo-15004',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		quantity: 1,
		likes: 0,
		shipping: '$5.00'
	}
]);

export default ReedStore;
