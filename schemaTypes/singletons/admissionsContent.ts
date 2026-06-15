import {defineField, defineType} from 'sanity'

export const admissionsContent = defineType({
  name: 'admissionsContent',
  title: 'Admissions Content',
  type: 'document',
  fields: [
    defineField({name: 'introTitle', title: 'Intro Title', type: 'string'}),
    defineField({name: 'introText', title: 'Intro Text', type: 'text'}),
    defineField({name: 'oLevelRequirements', title: "O'Level Requirements", type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'aLevelRequirements', title: "A'Level Requirements", type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'applicationSteps', title: 'Application Steps', type: 'array', of: [{type: 'object', fields: [{name: 'step', title: 'Step Number', type: 'string'}, {name: 'title', title: 'Title', type: 'string'}, {name: 'description', title: 'Description', type: 'text'}]}]}),
    defineField({name: 'faqs', title: 'FAQs', type: 'array', of: [{type: 'object', fields: [{name: 'question', title: 'Question', type: 'string'}, {name: 'answer', title: 'Answer', type: 'text'}]}]}),
    defineField({name: 'ctaTitle', title: 'CTA Title', type: 'string'}),
    defineField({name: 'ctaText', title: 'CTA Text', type: 'text'}),
    defineField({name: 'ctaPhone', title: 'CTA Phone Number', type: 'string'}),
  ],
})