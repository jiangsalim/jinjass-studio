import {defineField, defineType} from 'sanity'

export const termDates = defineType({
  name: 'termDates',
  title: 'Term Dates',
  type: 'document',
  fields: [
    defineField({name: 'termName', title: 'Term Name', type: 'string'}),
    defineField({name: 'termSubtitle', title: 'Term Subtitle', type: 'string'}),
    defineField({name: 'openingDay', title: 'Opening Day', type: 'number'}),
    defineField({name: 'openingMonth', title: 'Opening Month', type: 'string'}),
    defineField({name: 'openingYear', title: 'Opening Year', type: 'number'}),
    defineField({name: 'openingNotes', title: 'Opening Notes', type: 'text'}),
    defineField({name: 'openingTime', title: 'Opening Time', type: 'string'}),
    defineField({name: 'closingDay', title: 'Closing Day', type: 'number'}),
    defineField({name: 'closingMonth', title: 'Closing Month', type: 'string'}),
    defineField({name: 'closingYear', title: 'Closing Year', type: 'number'}),
    defineField({name: 'closingNotes', title: 'Closing Notes', type: 'text'}),
    defineField({name: 'closingTime', title: 'Closing Time', type: 'string'}),
  ],
})