import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './studio/schemas'

export default defineConfig({
  name: 'default',
  title: '大道之行也',

  projectId: 'jl8li4r9',
  dataset: 'production',

  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
