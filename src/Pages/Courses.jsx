import { Card, CardContent, Divider, Slide, Typography, Chip, CardActionArea, CardMedia, CardActions, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useState } from "react";
import EllipsisText from "react-ellipsis-text/lib/components/EllipsisText";
import { Helmet } from "react-helmet-async";
import { Course } from "../constans/details";
import PagesDivider from "./common/PagesDivider";
const Courses = ({ helmet }) => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false)
        }
    }, [])
    return (
        <Card sx={{ height: "100vh", backgroundColor: "whitesmoke", overflowY: "scroll" }}>
            <Helmet><title>{helmet}</title></Helmet>
            <CardContent>
                <Slide direction="down" in={loading} style={{
                    transitionDelay: loading ? "200ms" : null
                }}>
                    <Box>
                        <PagesDivider icon="" borderColor="gray" chipColor="secondary" label="دوره‌های گذرانده شده" />
                    </Box>
                </Slide>

                <Grid container>
                    {
                        Course.map((item, index) => (
                            <Grid sx={{ px: 4, py: 2 }} key={index} xs={12} sm={6} md={6} lg={4}>
                                <Slide in={loading} direction="up" style={{
                                    transitionDelay: loading ? `${index + 3}99ms` : null
                                }}>
                                    <Card sx={{ backgroundColor: "steelblue" }}>
                                        <CardActionArea>
                                            <CardMedia component="img" image={item.img} height="200" width="200" alt={item.title} />
                                            <CardContent>
                                                <Typography gutterBottom variant="body2">{item.title}</Typography>
                                                <Typography sx={{ direction: "ltr" }} variant="body2">
                                                    <EllipsisText text={item.info} length={"90"} />
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button href={item.link} size="small" color="primary" target="_blank">اطلاعات بیشتر</Button>
                                        </CardActions>
                                    </Card>
                                </Slide>
                            </Grid>
                        ))
                    }
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Courses;