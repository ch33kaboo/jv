import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: 'u1b2ghmt',
	dataset: 'production',
	apiVersion: '2023-12-18',
	useCdn: false
});
