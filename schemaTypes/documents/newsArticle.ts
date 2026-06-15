import {defineField, defineType} from 'sanity'

export const newsArticle = defineType({
  name: 'newsArticle',
  title: 'News Article',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title', maxLength: 96}}),
    defineField({name: 'featuredImage', title: 'Featured Image', type: 'image'}),
    defineField({name: 'excerpt', title: 'Excerpt', type: 'text'}),
    defineField({name: 'body', title: 'Body', type: 'blockContent'}),
    defineField({name: 'publishedDate', title: 'Published Date', type: 'date'}),
    defineField({name: 'category', title: 'Category', type: 'string', options: {list: ['Sports', 'Football', 'Athletics', 'Academics', 'Activities']}}),
    defineField({name: 'author', title: 'Author', type: 'string'}),
  ],
  preview: {select: {title: 'title', subtitle: 'category', media: 'featuredImage'}},
})