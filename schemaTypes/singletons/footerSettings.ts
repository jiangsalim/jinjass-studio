import {defineField, defineType} from 'sanity'

export const footerSettings = defineType({
  name: 'footerSettings',
  title: 'Footer Settings',
  type: 'document',
  fields: [
    defineField({name: 'aboutText', title: 'About Text', type: 'text'}),
    defineField({name: 'quickLinks', title: 'Quick Links', type: 'array', of: [{type: 'object', fields: [{name: 'label', title: 'Label', type: 'string'}, {name: 'href', title: 'Link', type: 'string'}]}]}),
    defineField({name: 'developerName', title: 'Developer Name', type: 'string'}),
    defineField({name: 'developerUrl', title: 'Developer URL', type: 'url'}),
  ],
})