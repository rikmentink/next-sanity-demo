import {defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export default defineType({
  name: 'homepage',
  title: 'Homepage Content',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Title (Internal)',
      type: 'string',
      initialValue: 'Homepage',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      description: 'The main H1 heading on the homepage.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Homepage Content'}
    },
  },
})
