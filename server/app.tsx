import { gql, useMutation, useQuery } from '@apollo/client'
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material'
import Box from '@mui/material/Box/Box'
import { DeleteLeadMutation, GetDogsQuery } from './types/graphql'

function NewComponent() {
  const { data } = useQuery<GetDogsQuery>(gql`
    query GetDogs {
      listLeads(page: 0) {
        id
        name
        cnpj
        phone
        email
      }
    }
  `)
  const [mutation] = useMutation<DeleteLeadMutation>(gql`
    mutation DeleteLead($id: Int!) {
      deleteLead(id: $id) {
        name
      }
    }
  `)
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {data?.listLeads.map((l: any, index: any) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Card variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Nome: {l.name}
              </Typography>
              <Typography variant="h5" component="div"></Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                CNPJ: {l.cnpj}
              </Typography>
              <Typography variant="body2">
                Phone: {l.phone}
                <br />
                Email: {l.email}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={async () => {
                  console.log(l.id)
                  await mutation({ variables: { id: l.id } })
                }}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export const App: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ background: '#41B02A' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Fruki Leads
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3, width: '100%' }}>
        <Toolbar />
        <NewComponent />
      </Box>
    </Box>
  )
}
