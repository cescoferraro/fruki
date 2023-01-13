import type { GatsbyConfig } from 'gatsby'
require('dotenv').config()

const config: GatsbyConfig = {
  siteMetadata: {
    title: `fruki`,
    siteUrl: `https://fruki.cescoferraro.com`,
  },
  graphqlTypegen: false,
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        options: { modulePath: `${__dirname}/src/cms.js` },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/static/assets`, name: `assets` },
    },

    `gatsby-plugin-layout`,
    'gatsby-plugin-sitemap',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-transformer-yaml`,
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
