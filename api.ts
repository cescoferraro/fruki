import cors from 'cors'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import { DataTypes, Sequelize } from 'sequelize'

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

const source = `
type Lead {
  name: String!
  cnpj: String!
  email: String!
  phone: String!
}

type Query {
  listLeads(page: Int!): [Lead!]!
  createLead(name: String!, cnpj: String!,email: String!, phone: String!): Lead!
  deleteLead(id: Int!): Lead!
}
`

const schema = buildSchema(source)

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

app.listen(process.env.PORT || 3333, () =>
  console.info('Express GraphQL Server Now Running On :3333/graphql')
)
