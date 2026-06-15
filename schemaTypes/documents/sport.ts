import {defineField, defineType} from 'sanity'

export const sport = defineType({
  name: 'sport',
  title: 'Sport',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'name', maxLength: 96}}),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({name: 'image', title: 'Image', type: 'image'}),
    defineField({name: 'achievements', title: 'Achievements', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'coachName', title: 'Coach Name', type: 'string'}),
    defineField({name: 'trainingDays', title: 'Training Days', type: 'string'}),
    defineField({name: 'venue', title: 'Venue', type: 'string'}),
    defineField({name: 'season', title: 'Season', type: 'string'}),
  ],
  preview: {select: {title: 'name', media: 'image'}},
})