import { client } from '$lib/sanityClient';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const ongoingProjects = await client.fetch(`
        *[_type == "project" && status == "ongoing"] {
            _id,
            name,
            description,
            status,
            "photo": photo {
                "url": asset->url,
                "alt": asset->originalFilename
            },
            "actions": actions[]-> {
                _id,
                name,
                description,
                "photo": photo {
                    "url": asset->url,
                    "alt": asset->originalFilename
                }
            }
        }
    `);

	return {
		projects: ongoingProjects
	};
};
