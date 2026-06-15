import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({name: 'heroTitle', title: 'Hero Title', type: 'string'}),
    defineField({name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text'}),
    defineField({name: 'heroMotto', title: 'Hero Motto', type: 'string'}),
    defineField({name: 'heroLocation', title: 'Hero Location Text', type: 'text'}),
    defineField({name: 'heroImage', title: 'Hero Background Image', type: 'image'}),
    defineField({name: 'heroCta', title: 'Hero CTA Buttons', type: 'array', of: [{type: 'object', fields: [{name: 'text', title: 'Button Text', type: 'string'}, {name: 'link', title: 'Link', type: 'string'}, {name: 'style', title: 'Style', type: 'string', options: {list: ['primary', 'outline']}}]}]}),
    defineField({name: 'statsStudents', title: 'Stats - Students', type: 'number'}),
    defineField({name: 'statsStudentsSuffix', title: 'Stats - Students Suffix', type: 'string'}),
    defineField({name: 'statsTeachers', title: 'Stats - Teachers', type: 'number'}),
    defineField({name: 'statsTeachersSuffix', title: 'Stats - Teachers Suffix', type: 'string'}),
    defineField({name: 'statsActivities', title: 'Stats - Activities', type: 'number'}),
    defineField({name: 'statsActivitiesSuffix', title: 'Stats - Activities Suffix', type: 'string'}),
    defineField({name: 'statsYears', title: 'Stats - Years', type: 'number'}),
    defineField({name: 'statsYearsSuffix', title: 'Stats - Years Suffix', type: 'string'}),
    defineField({name: 'statsSectionTitle', title: 'Stats Section Title', type: 'string'}),
    defineField({name: 'statsSectionSubtitle', title: 'Stats Section Subtitle', type: 'text'}),
  ],
})