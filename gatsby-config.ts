import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `fruki`,
    siteUrl: `https://fruki.cescoferraro.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-theme-material-ui`,
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '3e32e3223e23e23323e',
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
  ],
}

export default config