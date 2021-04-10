import { v4 as uuidv4 } from 'uuid';

export function isObjectEmpty(object: any): boolean {
	return Object.keys(object).length === 0;
}

export function generateUUID(): string {
	return uuidv4();
}
