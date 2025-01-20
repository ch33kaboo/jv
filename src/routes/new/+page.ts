import { client } from '$lib/sanityClient';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const news = await client.fetch(`
		*[_type == "new"] | order(publishedAt desc) {
			_id,
			title,
			content,
			publishedAt,
			"photo": photo {
				"url": asset->url,
				"alt": asset->originalFilename
			}
		}
	`);

	return {
		news
	};
};
