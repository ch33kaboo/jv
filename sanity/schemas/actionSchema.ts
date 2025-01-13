/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

export default {
	name: 'action',
	title: 'Action',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: (Rule) => Rule.required()
		},
		{
			name: 'description',
			title: 'Description',
			type: 'array',
			of: [{ type: 'block' }],
			validation: (Rule) => Rule.required()
		},
		{
			name: 'photo',
			title: 'Photo',
			type: 'image',
			options: {
				hotspot: true // Enables UI for selecting what areas of an image should be cropped
			}
		}
	]
};
