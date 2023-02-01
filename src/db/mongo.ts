import { MongoClient } from 'mongodb';
import { MONGO_URL } from '$env/static/private';

const client = new MongoClient(MONGO_URL);

export const connectDB = async (): Promise<MongoClient> => {
	console.log('Connecting to MongoDB...');
	await client.connect();
	return client;
};

export default client.db();
