import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export async function GET() {
	// Define your base URL
	const baseUrl = 'https://jeunessevolontairesba.dz';

	// Define the routes for your website
	const routes = [
		{ url: '/', priority: 1.0 },
		{ url: '/about', priority: 0.8 },
		{ url: '/join', priority: 0.8 },
		{ url: '/new', priority: 0.7 },
		{ url: '/projects', priority: 0.8 },
		{ url: '/projects/completed', priority: 0.8 },
		{ url: '/projects/ongoing', priority: 0.8 }
	];

	// Create a sitemap stream
	const stream = new SitemapStream({ hostname: baseUrl });

	// Add each route to the stream
	routes.forEach((route) => {
		stream.write(route);
	});

	// End the stream
	stream.end();

	// Convert the stream to a string
	const sitemap = await streamToPromise(Readable.from(stream)).then((data) => data.toString());

	// Return the sitemap as a response
	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
