import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cmsPage',
  title: 'CMS Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      description: 'Main text content for the page.',
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description:
        'Title used for SEO (appears in browser tabs and search results). If empty, uses the main Title.',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Description used for SEO (appears in search results). Keep it concise.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      isPublished: 'isPublished',
      media: 'mainImage',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
      }
    },
  },
})
