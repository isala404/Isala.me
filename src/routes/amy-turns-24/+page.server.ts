import { redirect, fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';

const AMY_24_PASSWORD = env.AMY_24_PASSWORD;

export const load: PageServerLoad = async ({ cookies }) => {
	const authenticated = cookies.get('amy-24-auth');

	if (authenticated === 'true') {
		return {
			authenticated: true
		};
	}

	return {
		authenticated: false
	};
};

export const actions: Actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const password = data.get('password');

		if (password === AMY_24_PASSWORD) {
			cookies.set('amy-24-auth', 'true', {
				path: '/amy-turns-24',
				maxAge: 60 * 60 * 24 * 7, // 7 days
				httpOnly: true,
				secure: true,
				sameSite: 'strict'
			});

			throw redirect(302, '/amy-turns-24');
		}

		return fail(400, { incorrect: true });
	}
};
