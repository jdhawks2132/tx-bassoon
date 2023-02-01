// @ts-ignore
import { connectDB } from '$db/mongo';

connectDB()
	.then((): void => {
		console.log('Connected to MongoDB');
	})
	// @ts-ignore
	.catch((err) => {
		console.error('Error connecting to MongoDB', err);
	});
