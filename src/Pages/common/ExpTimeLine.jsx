import { HomeRepairServiceRounded } from "@mui/icons-material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from "@mui/lab"
import { Slide, Typography } from "@mui/material";
import { devEdu } from "../../constans/details";

const ExpTimeLine = ({loading}) => {
    return (
        <Timeline position="right" sx={{ direction: "ltr" }}>
        {
            devEdu.map((item, index) => (
                <Slide key={index} direction="up" in={loading} style={{
                    transitionDelay: loading ? `${index + 3}99ms` : null
                }}>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="info">
                                <HomeRepairServiceRounded color="info" />
                            </TimelineDot>
                            {index !== 3 ? <TimelineConnector /> : null}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="caption" color="black">{item.year}</Typography>
                            <Typography variant="body1" color="black">{item.cert}</Typography>
                            <Typography variant="body2" color="black">{item.major}</Typography>
                            <Typography variant="body2" color="black">{item.place}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Slide>
            ))
        }
    </Timeline>
    );
}
 
export default ExpTimeLine;