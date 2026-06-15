import {defineField, defineType} from 'sanity'

export const navigation = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({name: 'navItems', title: 'Navigation Items', type: 'array', of: [{type: 'object', fields: [{name: 'label', title: 'Label', type: 'string'}, {name: 'href', title: 'Link', type: 'string'}, {name: 'dropdown', title: 'Dropdown Items', type: 'array', of: [{type: 'object', fields: [{name: 'label', title: 'Label', type: 'string'}, {name: 'href', title: 'Link', type: 'string'}]}]}]}]}),
    defineField({name: 'ctaText', title: 'CTA Button Text', type: 'string'}),
    defineField({name: 'ctaLink', title: 'CTA Button Link', type: 'string'}),
  ],
})