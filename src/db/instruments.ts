import db from './mongo';

export const instruments = db.collection('instruments');
