import {defineField, defineType} from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title', maxLength: 96}}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'text'}),
    defineField({name: 'heroImage', title: 'Hero Background Image', type: 'image'}),
    defineField({name: 'body', title: 'Body', type: 'blockContent'}),
  ],
  preview: {select: {title: 'title'}},
})