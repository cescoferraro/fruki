import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `fruki`,
    siteUrl: `https://fruki.cescoferraro.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: false,
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        options: { modulePath: `${__dirname}/src/cms.js` },
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/static/assets`, name: `assets` },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/content`, name: `content` },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
      },
    },
    'gatsby-plugin-extract-schema',
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: 'src/gatsby-types.d.ts',
        emitSchema: {
          'schema.graphql.json': true,
          'schema.graphql': true,
        },
        emitPluginDocument: {
          'schema.documents.graphql': true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/logo.png`,
      },
    },
  ],
}

export default config
