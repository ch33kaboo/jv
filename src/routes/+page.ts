// src/routes/+page.js

import { createClient } from '@sanity/client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const client = createClient({
	projectId: 'u1b2ghmt',
	dataset: 'production',
	apiVersion: '2023-12-18',
	useCdn: false
});

export async function load() {
	const data = await client.fetch(`*[_type == "project"]`);

	if (data) {
		return {
			projects: data
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
