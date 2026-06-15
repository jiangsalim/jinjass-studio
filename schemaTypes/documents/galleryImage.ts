import {defineField, defineType} from 'sanity'

export const galleryImage = defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title/Caption', type: 'string'}),
    defineField({name: 'image', title: 'Image', type: 'image'}),
    defineField({name: 'category', title: 'Category', type: 'string', options: {list: ['Campus', 'Sports', 'Academics', 'Events', 'Facilities']}}),
    defineField({name: 'dateTaken', title: 'Date Taken', type: 'date'}),
    defineField({name: 'featured', title: 'Featured', type: 'boolean', initialValue: false}),
  ],
  preview: {select: {title: 'title', subtitle: 'category', media: 'image'}},
})