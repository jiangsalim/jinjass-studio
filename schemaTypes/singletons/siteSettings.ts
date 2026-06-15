import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({name: 'schoolName', title: 'School Name', type: 'string'}),
    defineField({name: 'schoolMotto', title: 'School Motto', type: 'string'}),
    defineField({name: 'schoolTagline', title: 'Tagline (under logo)', type: 'string'}),
    defineField({name: 'foundedYear', title: 'Founded Year', type: 'number'}),
    defineField({name: 'logo', title: 'Logo', type: 'image'}),
    defineField({name: 'favicon', title: 'Favicon', type: 'image'}),
    defineField({name: 'contactEmail', title: 'Contact Email', type: 'string'}),
    defineField({name: 'contactPhone', title: 'Contact Phone', type: 'string'}),
    defineField({name: 'address', title: 'Physical Address', type: 'text'}),
    defineField({name: 'socialLinks', title: 'Social Media Links', type: 'array', of: [{type: 'object', fields: [{name: 'platform', title: 'Platform', type: 'string'}, {name: 'url', title: 'URL', type: 'url'}]}]}),
    defineField({name: 'googleMapsEmbed', title: 'Google Maps Embed URL', type: 'url'}),
  ],
})