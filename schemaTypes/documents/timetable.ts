import {defineField, defineType} from 'sanity'

export const timetable = defineType({
  name: 'timetable',
  title: 'Timetable',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title (e.g. S1A Term 1)', type: 'string'}),
    defineField({name: 'year', title: 'Year', type: 'number'}),
    defineField({name: 'term', title: 'Term', type: 'string', options: {list: ['Term 1', 'Term 2', 'Term 3']}}),
    defineField({name: 'classLevel', title: 'Class', type: 'string', options: {list: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6']}}),
    defineField({name: 'stream', title: 'Stream', type: 'string', options: {list: ['A', 'B', 'C', 'D']}}),
    defineField({name: 'image', title: 'Timetable Image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'uploadedBy', title: 'Uploaded By', type: 'string'}),
    defineField({name: 'uploadDate', title: 'Upload Date', type: 'date'}),
    defineField({name: 'notes', title: 'Notes (optional)', type: 'text'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'term', media: 'image'},
  },
  orderings: [
    {title: 'Year (Newest)', name: 'yearDesc', by: [{field: 'year', direction: 'desc'}]},
    {title: 'Class (A-Z)', name: 'classAsc', by: [{field: 'classLevel', direction: 'asc'}]},
  ],
})