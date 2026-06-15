import {defineField, defineType} from 'sanity'

export const announcement = defineType({
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'message', title: 'Message', type: 'text'}),
    defineField({name: 'date', title: 'Date', type: 'date'}),
    defineField({name: 'category', title: 'Category', type: 'string', options: {list: ['Academic', 'Sports', 'Finance', 'General']}}),
    defineField({name: 'pinned', title: 'Pinned', type: 'boolean', initialValue: false}),
    defineField({name: 'author', title: 'Author', type: 'string'}),
  ],
  preview: {select: {title: 'title', subtitle: 'category'}},
})