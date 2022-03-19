import React from 'react';
import { makeStyles, Box, Card, CardContent, Typography } from "@material-ui/core";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@material-ui/lab";

import TopTitle from '../../components/TopTitle'

const useStyles = makeStyles((theme) => ({
    root: {},
    timeline: {
        marginTop: '20px',
        width: '100%',
    },

    timelineItems: {
        width: '100%',
        padding: 0,
        margin: 0,
    },

    timelineItem: {},
    content: {},
    bottom: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))

const projects = [
    {
        color: 'primary',
        content: 'Eat',
    },
    {
        color: 'secondary',
        content: 'Code',
    },
    {
        color: 'primary',
        content: 'Sleep',
    },
    {
        color: 'secondary',
        content: 'Repeat',
    },
]

const Projects = () => {
    const classes = useStyles();
    return (
        <Box className={ classes.root }>
            <TopTitle title="Projects" />

            <Box className={ classes.timeline }>
                <Timeline align="alternate" className={ classes.timelineItems }>
                    { projects.map((project, index) => {
                        return (
                            <TimelineItem key={ index } className={ classes.timelineItem }>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color={ project.color } />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent className={ classes.content }>
                                    <Card>
                                        <CardContent>
                                            <Typography className={ classes.title } color="textSecondary" gutterBottom>
                                                Word of the Day
                                            </Typography>
                                            <Typography className={ classes.pos } color="textSecondary">
                                                adjective
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                well meaning and kindly.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </TimelineContent>
                            </TimelineItem>
                        )
                    }
                    ) }
                </Timeline>
            </Box>
            <Box className={ classes.bottom }>
                End
            </Box>

        </Box>
    );
}

export default Projects;
