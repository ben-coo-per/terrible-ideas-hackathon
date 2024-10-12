import { getPBClient } from '$lib/utils/pb';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const email = data.get('email');
		const password = data.get('password');
		const passwordConfirm = data.get('passwordConfirm');

		if (!email || !password || !passwordConfirm) {
			return redirect(303, '/loading?path=/form2');
		}

		const pb = await getPBClient();
		const result = await pb.collection('users').create({
			email,
			password,
			passwordConfirm
		});

		if (result.success) {
			return redirect(303, '/form2');
		} else {
			return redirect(303, '/form2');
		}
	}
};
