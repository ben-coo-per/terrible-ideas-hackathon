import PocketBase from 'pocketbase';
import { PUBLIC_API_URL, PUBLIC_API_PASSWORD, PUBLIC_API_USER } from '$env/static/public';

export async function getPBClient() {
	const pb = new PocketBase(PUBLIC_API_URL);
	await pb.admins.authWithPassword(PUBLIC_API_USER, PUBLIC_API_PASSWORD);

	return pb;
}
