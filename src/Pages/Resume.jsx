import { HomeRepairServiceRounded, SchoolRounded, SettingsEthernetRounded } from "@mui/icons-material";
import { Card, CardContent, Slide } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { PagesDivider, ExpTimeLine, EduTimeLine } from "./common/index"

const Resume = ({ helmet }) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        }
    }, [])
    return (
        <Card sx={{ height: "100vh", backgroundColor: "whitesmoke", overflowY: "scroll" }}>
            <Helmet><title>{helmet}</title></Helmet>
            <CardContent>
                <Slide direction="down" in={loading} style={{
                    transitionDelay: loading ? "200ms" : "0ms"
                }}>
                    <Box>
                        <PagesDivider borderColor="gray" chipColor="error" icon={<SettingsEthernetRounded />} label="رزومه من" />
                    </Box>
                </Slide>
                <Grid container>
                    <Grid xs={6}>
                        <Slide direction="down" in={loading} style={{
                            transitionDelay: loading ? "200ms" : "0ms"
                        }}>
                            <Box>
                                <PagesDivider borderColor="gray" chipColor="warning" icon={<SchoolRounded />} label="تحصیلات" />
                            </Box>
                        </Slide>
                        <EduTimeLine loading={loading} />
                    </Grid>
                    <Grid xs={6}>
                        <Slide direction="down" in={loading} style={{
                            transitionDelay: loading ? "200ms" : "0ms"
                        }}>
                            <Box>
                                <PagesDivider borderColor="gray" chipColor="info" icon={<HomeRepairServiceRounded />} label="تجربیات" />
                            </Box>
                        </Slide>
                        <ExpTimeLine loading={loading} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Resume;