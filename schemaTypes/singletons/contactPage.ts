import {defineField, defineType} from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({name: 'pageTitle', title: 'Page Title', type: 'string'}),
    defineField({name: 'pageSubtitle', title: 'Page Subtitle', type: 'text'}),
    defineField({name: 'contactCards', title: 'Contact Info Cards', type: 'array', of: [{type: 'object', fields: [{name: 'label', title: 'Label', type: 'string'}, {name: 'value', title: 'Value', type: 'string'}, {name: 'secondary', title: 'Secondary Value', type: 'string'}, {name: 'href', title: 'Link', type: 'string'}]}]}),
  ],
})