import { AboutMain } from 'components/about-main'
import { LocationsSlider } from 'components/Banners/LocationsSlider'
import { FrukiPourpose } from 'components/fruki-pourpose'
import { FrukiContainer } from 'components/FrukiContainer'
import { FrukiFooter } from 'components/FrukiFooter'
import { FrukiWorkForceHistory } from 'components/frukiWorkForceHistory'
import { useBrandsMemo } from 'components/useBrandsMemo'
import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import { FrukiAppBar } from '../components/FrukiAppBar'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import { makeStyles } from '@mui/styles'
import { Typography, Paper } from '@mui/material'
import { CheckCircleOutlined } from '@mui/icons-material'

const useStyles = makeStyles({
  timeline: {
    transform: 'rotate(90deg)',
  },
  timelineContentContainer: {
    textAlign: 'left',
  },
  timelineContent: {
    display: 'inline-block',
    transform: 'rotate(-90deg)',
    textAlign: 'center',
    minWidth: 50,
  },
  timelineIcon: {
    transform: 'rotate(-90deg)',
  },
})

function ColorsTimeline() {
  const classes = useStyles()
  return (
    <Timeline className={classes.timeline} position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <CheckCircleOutlined
            color="primary"
            className={classes.timelineIcon}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContentContainer}>
          <Paper className={classes.timelineContent}>
            <Typography>Eat</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <CheckCircleOutlined
            color="primary"
            className={classes.timelineIcon}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContentContainer}>
          <Paper className={classes.timelineContent}>
            <Typography>Code</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <CheckCircleOutlined
            color="primary"
            className={classes.timelineIcon}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContentContainer}>
          <Paper className={classes.timelineContent}>
            <Typography>Sleep</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <CheckCircleOutlined
            color="primary"
            className={classes.timelineIcon}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContentContainer}>
          <Paper className={classes.timelineContent}>
            <Typography>Repeat</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <CheckCircleOutlined
            color="primary"
            className={classes.timelineIcon}
          />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContentContainer}>
          <Paper className={classes.timelineContent}>
            <Typography>Sleep</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

const AboutUsPage: React.FC<
  PageProps<GatsbyTypes.LocationPageListQueryQuery>
> = ({ data }) => {
  const locations = data.locations.edges.map((e) => e.node.frontmatter)
  const brands = useBrandsMemo(data.brands)
  return (
    <>
      <FrukiAppBar />
      <FrukiContainer>
        <AboutMain />

        <FrukiPourpose />
        <FrukiWorkForceHistory />
        <ColorsTimeline />
        <LocationsSlider locations={locations} />
        <FrukiFooter brands={brands} />
      </FrukiContainer>
    </>
  )
}

export default AboutUsPage
export const pageQuery = graphql`
  fragment LocationFrontMatter on MdxFrontmatter {
    date(formatString: "MMMM DD, YYYY")
    image
    title
    description
  }
  fragment Fields on MdxFields {
    slug
  }
  fragment LocationFragment on MdxConnection {
    edges {
      node {
        excerpt
        fields {
          ...Fields
        }
        frontmatter {
          ...LocationFrontMatter
        }
      }
    }
  }

  fragment LocationFragmentQuery on Query {
    locations: allMdx(
      filter: { internal: { contentFilePath: { regex: "/content/location/" } } }
      sort: [{ fields: { slug: ASC } }]
    ) {
      ...LocationFragment
    }
  }
  query LocationPageListQuery {
    ...LocationFragmentQuery
    ...BrandsFragmentQuery
  }
`
