import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

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
		.min(7, 'Vous devez avoir au moins 07 ans')
		.max(120, 'Vous devez avoir moins de 120 ans'),
	function: z
		.string()
		.min(2, 'La fonction doit comporter au moins 2 caractères')
		.max(50, 'La fonction doit comporter au maximum 50 caractères'),
	phoneNumber: z
		.string()
		.regex(/^[0-9]{10}$/, 'Le numéro de téléphone doit comporter exactement 10 chiffres')
});

export const load = async () => {
	// Server API:
	const form = await superValidate(schema);

	// Unless you throw, always return { form } in load and form actions.
	return { form };
};
