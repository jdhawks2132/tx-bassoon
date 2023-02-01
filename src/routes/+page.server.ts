import { instruments } from '../db/instruments';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const data = await instruments.find({}).toArray();

	return {
		instruments: data
	};
};
