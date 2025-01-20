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
			}
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
