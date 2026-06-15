import {defineField, defineType} from 'sanity'

export const subjectCategory = defineType({
  name: 'subjectCategory',
  title: 'Subject Category',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({name: 'subjects', title: 'Subjects', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'order', title: 'Display Order', type: 'number'}),
  ],
  preview: {select: {title: 'title'}},
})