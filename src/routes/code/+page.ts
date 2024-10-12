import { getPBClient } from '$lib/utils/pb';

export async function load() {
	const pb = await getPBClient();
	// randomly generate a 4 digit code
	const codeString = Math.floor(Math.random() * 10000).toString();

	try {
		// save the code to the database
		await pb.collection('codes').create({
			code: codeString
		});

		return {
			codeString
		};
	} catch (e) {
		try {
			// save the code to the database
			await pb.collection('codes').create({
				code: codeString
			});

			return {
				codeString
			};
		} catch (e) {
			console.log(e);
		}
	}
}
