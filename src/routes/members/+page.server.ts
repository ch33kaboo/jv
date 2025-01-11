import { supabase } from '$lib/supabaseClient';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = async ({ cookies }) => {
	const isAuthenticated = cookies.get('authenticated') === env.ADMIN_PASSWORD;

	if (!isAuthenticated) {
		throw redirect(303, '/admin/authenticate');
	}

	const { data } = await supabase.from('users').select();
	return {
		users: data ?? []
	};
};
