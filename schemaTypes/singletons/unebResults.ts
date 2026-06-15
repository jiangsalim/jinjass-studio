import {defineField, defineType} from 'sanity'

export const unebResults = defineType({
  name: 'unebResults',
  title: 'UNEB Results',
  type: 'document',
  fields: [
    defineField({name: 'year', title: 'Year', type: 'string'}),
    defineField({name: 'uceTitle', title: 'UCE Title', type: 'string'}),
    defineField({name: 'uceStats', title: 'UCE Stats', type: 'array', of: [{type: 'object', fields: [{name: 'label', title: 'Label', type: 'string'}, {name: 'value', title: 'Value', type: 'number'}]}]}),
    defineField({name: 'uaceTitle', title: 'UACE Title', type: 'string'}),
    defineField({name: 'uaceHighlights', title: 'UACE Highlights', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'uaceStats', title: 'UACE Stats', type: 'array', of: [{type: 'object', fields: [{name: 'label', title: 'Label', type: 'string'}, {name: 'value', title: 'Value', type: 'number'}]}]}),
  ],
})