/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

export default {
	name: 'new',
	type: 'document',
	title: 'New',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
			validation: (Rule) => Rule.required()
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{ type: 'block' }],
			validation: (Rule) => Rule.required()
		},
		{
			name: 'photo',
			title: 'Photo',
			type: 'image',
			options: {
				hotspot: true
			},
			validation: (Rule) =>
				Rule.custom((image) => {
					if (!image || !image.asset) return true; // Allow empty value if not required

					const isJPG = image.asset._ref.endsWith('jpg') || image.asset._ref.endsWith('jpeg');
					console.log(image.asset._ref);
					return isJPG ? true : 'Only JPG images are allowed';
				})
		},
		{
			name: 'publishedAt',
			title: 'Published At',
			type: 'datetime',
			initialValue: () => new Date().toISOString(),
			validation: (Rule) => Rule.required()
		}
	]
};
