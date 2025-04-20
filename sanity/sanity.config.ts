import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {visionTool} from '@sanity/vision'

import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Demo',

  projectId: '9bo0ysoi',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_ORIGIN || 'http://rm-sanity-demo.vercel.app',
        preview: '/',
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
