/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

export default {
	name: 'project',
	type: 'document',
	title: 'Project',
	fields: [
		{
			name: 'name',
			type: 'string',
			title: 'Name',
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
				hotspot: true
			},
			validation: (Rule) =>
				Rule.custom((image) => {
					if (!image || !image.asset) return 'Photo is required'; // Ensure it's required

					const isJPG = image.asset._ref.endsWith('.jpg') || image.asset._ref.endsWith('.jpeg');
					return isJPG ? true : 'Only JPG images are allowed';
				})
		},
		{
			name: 'status',
			title: 'Status',
			type: 'string',
			options: {
				list: [
					{ title: 'Ongoing', value: 'ongoing' },
					{ title: 'Completed', value: 'completed' }
				],
				layout: 'radio'
			},
			validation: (Rule) => Rule.required()
		},
		{
			name: 'actions',
			title: 'Actions',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'action' }]
				}
			]
		}
	]
};
