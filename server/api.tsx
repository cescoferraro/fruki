import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { SchemaLink } from '@apollo/client/link/schema'
import { getDataFromTree } from '@apollo/client/react/ssr'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { loadSchemaSync } from '@graphql-tools/load'
import cors from 'cors'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import expressStaticGzip from 'express-static-gzip'
import { buildSchema, printSchema } from 'graphql'
import path from 'path'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { DataTypes, Sequelize } from 'sequelize'
import { App } from './app'

const app = express()

const sequelize = new Sequelize({
  database: process.env.DB_NAME || 'fruki',
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'docker',
  host: process.env.DB_HOST || '127.0.0.1',
  dialect: 'postgres',
})

const Lead = sequelize.define('lead', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: DataTypes.TEXT,
  email: DataTypes.TEXT,
  cnpj: DataTypes.TEXT,
  phone: DataTypes.TEXT,
})

void sequelize.sync()

app.use(cors())

const source = loadSchemaSync('./server.schema.graphql', {
  loaders: [new GraphQLFileLoader()],
})

const schema = buildSchema(printSchema(source))

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: {
      listLeads: async () => {
        const leads = await Lead.findAll()
        await sequelize.authenticate()
        return leads
      },
      createLead: async ({ name, email, cnpj, phone }: any) => {
        return await Lead.create({ name, email, cnpj, phone })
      },
      deleteLead: async ({ id }: any) => {
        let model = await Lead.findByPk(id)
        await model?.destroy()
        return model
      },
    },
    graphiql: true,
  })
)

export function Html({ content, state }: any) {
  return (
    <html lang="pt">
      <head>
        <title>Fruki Leads</title>
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(
              /</g,
              '\\u003c'
            )};`,
          }}
        />
        <script src="public/bundle.js" />
      </body>
    </html>
  )
}
const apolloClient = new ApolloClient({
  ssrMode: true,
  link: new SchemaLink({ schema }),
  cache: new InMemoryCache(),
})

app.route('/leads').get(async (req, res) => {
  getDataFromTree(
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  ).then((content) => {
    res.status(200)
    res.send(
      `<!doctype html>\n${renderToStaticMarkup(
        <Html content={content} state={apolloClient.extract()} />
      )}`
    )
    res.end()
  })
})

app.use(
  '/public',
  expressStaticGzip(path.join(__dirname, 'public'), {
    index: false,
    enableBrotli: true,
    orderPreference: ['br'],
  })
)
// app.use('/public', express.static(path.join(__dirname, 'public')))

app.listen(process.env.PORT || 3333, () =>
  console.info('Express GraphQL Server Now Running On :3333/graphql')
)
