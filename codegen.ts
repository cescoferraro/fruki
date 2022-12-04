import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: './server.schema.graphql',
  documents: './server/**/*.tsx',
  generates: {
    './server/types/': {
      preset: 'client',
      plugins: [],
    },
    './server/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}

export default config
