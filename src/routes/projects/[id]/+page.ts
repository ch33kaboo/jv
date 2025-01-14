import { client } from '$lib/sanityClient';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const project = await client.fetch(
		`
		*[_type == "project" && _id == $id][0] {
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
	`,
		{ id: params.id }
	);

	if (!project) {
		throw error(404, 'Project not found');
	}

	return {
		project
	};
};
