import { Add, Remove } from '@mui/icons-material'
import {
  Box,
  Container,
  IconButton,
  Pagination,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import { center } from 'components/center'
import { FrukiContact } from 'components/frukiContact'
import { FrukiContainer } from 'components/FrukiContainer'
import { FrukiFooter } from 'components/FrukiFooter'
import { useBrandsMemo } from 'components/useBrandsMemo'
import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const FAQPage: React.FC<PageProps<GatsbyTypes.FAQPageListQueryQuery>> = ({
  data,
}) => {
  const [expanded, setExpanded] = React.useState<string | false>(false)
  const [input, setInput] = React.useState<string>('')
  const faqs = data.faqs.edges.map((a) => ({
    body: a.node.body,
    ...a.node.frontmatter,
  }))
  const theme = useTheme()
  const borderValue = `${40}px !important`
  // const borderValue =
  const [page, setPage] = useState(1)
  let filteredFaqs = faqs.filter((f) =>
    input === ''
      ? true
      : f?.question?.toLocaleLowerCase().includes(input.toLocaleLowerCase())
  )
  const number = 10
  const count = Math.ceil(filteredFaqs?.length / number)
  return (
    <>
      <FrukiContainer>
        <Box sx={{ ...center, background: '#034638', height: 350 }}>
          <Box
            display="flex"
            flexDirection={'column'}
            sx={{
              minWidth: '40vw',
              p: 4,
            }}
          >
            <Typography
              variant={'h6'}
              fontWeight={700}
              align="center"
              color="primary.contrastText"
            >
              FAQ
            </Typography>
            <Typography variant="h3" align="center" color="secondary">
              Como podemos ajudar?
            </Typography>
            <TextField
              onChange={(event) => {
                setInput(event.target.value)
              }}
              InputProps={{
                endAdornment: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 4.5C7.18629 4.5 4.5 7.18629 4.5 10.5C4.5 13.8137 7.18629 16.5 10.5 16.5C11.8865 16.5 13.1632 16.0297 14.1792 15.2399L18.2197 19.2803C18.5126 19.5732 18.9874 19.5732 19.2803 19.2803C19.5732 18.9874 19.5732 18.5126 19.2803 18.2197L15.2399 14.1792C16.0297 13.1632 16.5 11.8865 16.5 10.5C16.5 7.18629 13.8137 4.5 10.5 4.5Z"
                      fill="#41B02A"
                      stroke="#41B02A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              }}
              sx={{
                background: 'white',
                borderRadius: 10,
                marginTop: 5,
                [`& fieldset`]: {
                  borderRadius: 0,
                  borderColor: 'transparent',
                },
              }}
              placeholder={'Digite sua dúvida'}
              InputLabelProps={{ shrink: false }}
              variant="outlined"
            />
          </Box>
        </Box>
        <Container sx={{ py: 8 }}>
          <Typography
            sx={{ pb: 5 }}
            align="center"
            color="primary"
            variant="h4"
          >
            Dúvidas Frequentes
          </Typography>
          <div>
            {filteredFaqs.slice((page - 1) * number, page * number).map((d) => {
              const isExpanded = expanded === d?.question
              return (
                <Accordion
                  sx={{
                    '&::before': {
                      height: 0,
                    },
                    // background: 'pink',
                    borderRadius: borderValue,
                    mb: 2,
                  }}
                  variant="outlined"
                  expanded={isExpanded}
                  onChange={(
                    event: React.SyntheticEvent,
                    isExpanded: boolean
                  ) => {
                    setExpanded(isExpanded ? d?.question || '' : false)
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <IconButton
                        sx={(theme) => ({
                          background: theme.palette.secondary.main,
                          ':hover': {
                            background: theme.palette.secondary.main,
                            opacity: 0.8,
                          },
                        })}
                      >
                        {isExpanded ? (
                          <Remove sx={{ color: 'white' }} />
                        ) : (
                          <Add sx={{ color: 'white' }} />
                        )}
                      </IconButton>
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={{
                      borderTopLeftRadius: borderValue,
                      borderTopRightRadius: borderValue,
                      color: isExpanded
                        ? theme.palette.primary.contrastText
                        : 'unset',
                      background: isExpanded
                        ? theme.palette.primary.main
                        : 'unset',
                    }}
                  >
                    <Typography fontWeight={700}>{d?.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ReactMarkdown>{d?.body || ''}</ReactMarkdown>
                  </AccordionDetails>
                </Accordion>
              )
            })}
          </div>
          <Box sx={{ ...center, py: 4 }}>
            <Pagination
              page={page}
              count={count}
              onChange={(event, pg) => {
                setPage(pg)
              }}
            />
          </Box>
        </Container>
        <FrukiContact showButton={false} />

        <FrukiFooter brands={useBrandsMemo(data?.brands)} />
      </FrukiContainer>
    </>
  )
}

export const pageQuery = graphql`
  fragment FAQFrontMatter on MdxFrontmatter {
    date(formatString: "MMMM DD, YYYY")
    question
    answer
  }
  fragment Fields on MdxFields {
    slug
  }
  fragment FAQFragment on MdxConnection {
    edges {
      node {
        excerpt
        fields {
          ...Fields
        }
        body
        frontmatter {
          ...FAQFrontMatter
        }
      }
    }
  }

  fragment FAQFragmentQuery on Query {
    faqs: allMdx(
      filter: { internal: { contentFilePath: { regex: "/content/faq/" } } }
      sort: [{ fields: { slug: ASC } }]
    ) {
      ...FAQFragment
    }
  }
  query FAQPageListQuery {
    ...FAQFragmentQuery
    ...BrandsFragmentQuery
  }
`
export default FAQPage
