import { client } from '$lib/sanityClient';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const ongoingProjects = await client.fetch(`
        *[_type == "project"] {
            _id,
            title,
            description,
            status,
            name
            // Add other fields you want to fetch
        }
    `);

	return {
		projects: ongoingProjects
	};
};
