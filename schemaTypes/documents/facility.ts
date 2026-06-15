import {defineField, defineType} from 'sanity'

export const facility = defineType({
  name: 'facility',
  title: 'Facility',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({name: 'image', title: 'Image', type: 'image'}),
    defineField({name: 'features', title: 'Features', type: 'array', of: [{type: 'string'}]}),
  ],
  preview: {select: {title: 'title', media: 'image'}},
})