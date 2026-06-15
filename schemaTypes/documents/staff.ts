import {defineField, defineType} from 'sanity'

export const staff = defineType({
  name: 'staff',
  title: 'Staff Member',
  type: 'document',
  fields: [
    defineField({name: 'fullName', title: 'Full Name', type: 'string'}),
    defineField({name: 'title', title: 'Title/Position', type: 'string'}),
    defineField({name: 'photo', title: 'Photo', type: 'image'}),
    defineField({name: 'bio', title: 'Bio', type: 'text'}),
    defineField({name: 'email', title: 'Email', type: 'string'}),
    defineField({name: 'phone', title: 'Phone', type: 'string'}),
    defineField({name: 'order', title: 'Display Order', type: 'number'}),
    defineField({name: 'showOnHomepage', title: 'Show on Homepage', type: 'boolean', initialValue: true}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'fullName', maxLength: 96}}),
  ],
  preview: {select: {title: 'fullName', subtitle: 'title', media: 'photo'}},
})