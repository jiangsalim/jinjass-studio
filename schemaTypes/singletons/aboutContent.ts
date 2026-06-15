import {defineField, defineType} from 'sanity'

export const aboutContent = defineType({
  name: 'aboutContent',
  title: 'About Content',
  type: 'document',
  fields: [
    defineField({name: 'vision', title: 'Vision', type: 'text'}),
    defineField({name: 'mission', title: 'Mission', type: 'text'}),
    defineField({name: 'coreValues', title: 'Core Values', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'introText', title: 'Intro Text', type: 'text'}),
    defineField({name: 'teachersHighlight', title: 'Teachers Highlight Text', type: 'text'}),
    defineField({name: 'teachersCount', title: 'Teachers Count', type: 'number'}),
  ],
})