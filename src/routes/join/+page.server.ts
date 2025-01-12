import { z } from 'zod';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { supabase } from '$lib/supabaseClient';

const schema = z.object({
	firstName: z
		.string()
		.min(2, 'Le prénom doit comporter au moins 2 caractères')
		.max(50, 'Le prénom doit comporter au maximum 50 caractères'),
	lastName: z
		.string()
		.min(2, 'Le nom doit comporter au moins 2 caractères')
		.max(50, 'Le nom doit comporter au maximum 50 caractères'),
	email: z.string().email('Adresse e-mail invalide'),
	age: z
		.number()
		.min(18, 'Vous devez avoir au moins 18 ans')
		.max(120, 'Vous devez avoir moins de 120 ans'),
	function: z.string().max(50, 'La fonction doit comporter au maximum 50 caractères'),
	phoneNumber: z
		.string()
		.regex(/^(05|06|07) \d\d \d\d \d\d \d\d$/, 'Format du numéro de téléphone incorrect.')
});

export const load = async () => {
	// Server API:
	const form = await superValidate(schema);

	// Unless you throw, always return { form } in load and form actions.
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, schema);

		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			const { error } = await supabase.from('users').insert({
				firstName: form.data.firstName,
				lastName: form.data.lastName,
				email: form.data.email,
				age: form.data.age,
				phoneNumber: form.data.phoneNumber,
				function: form.data.function
			});

			if (error) throw error;

			form.data = {
				firstName: '',
				lastName: '',
				email: '',
				age: 0,
				phoneNumber: '',
				function: ''
			};

			return { form };
		} catch (error) {
			return fail(500, {
				form,
				error: error
			});
		}
	}
};
