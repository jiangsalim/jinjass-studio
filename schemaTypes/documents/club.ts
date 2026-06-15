import {defineField, defineType} from 'sanity'

export const club = defineType({
  name: 'club',
  title: 'Club',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'name', maxLength: 96}}),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({name: 'image', title: 'Image', type: 'image'}),
    defineField({name: 'meetingDays', title: 'Meeting Days', type: 'string'}),
    defineField({name: 'venue', title: 'Venue', type: 'string'}),
    defineField({name: 'openTo', title: 'Open To', type: 'string'}),
  ],
  preview: {select: {title: 'name', media: 'image'}},
})