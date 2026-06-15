import {defineField, defineType} from 'sanity'

export const whyChooseUs = defineType({
  name: 'whyChooseUs',
  title: 'Why Choose Us',
  type: 'document',
  fields: [
    defineField({name: 'reasons', title: 'Reasons', type: 'array', of: [{type: 'object', fields: [{name: 'title', title: 'Title', type: 'string'}, {name: 'description', title: 'Description', type: 'text'}, {name: 'icon', title: 'Icon Name', type: 'string'}]}]}),
  ],
})