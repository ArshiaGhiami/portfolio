import {  SchoolRounded } from "@mui/icons-material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from "@mui/lab"
import { Slide, Typography } from "@mui/material";
import { devEdu } from "../../constans/details";

const EduTimeLine = ({loading}) => {
    return (
        <Timeline position="right" sx={{ direction: "ltr" }}>
        {
            devEdu.map((item, index) => (
                <Slide key={index} direction="up" in={loading} style={{
                    transitionDelay: loading ? `${index + 3}99ms` : null
                }}>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="warning">
                                <SchoolRounded color="warning" />
                            </TimelineDot>
                            {index !== 3 ? <TimelineConnector /> : null}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography color="black" variant="caption">{item.year}</Typography>
                            <Typography color="black" variant="body1">{item.cert}</Typography>
                            <Typography color="black" variant="body2">{item.major}</Typography>
                            <Typography color="black" variant="body2">{item.place}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Slide>
            ))
        }
    </Timeline>
    );
}
 
export default EduTimeLine;