import { Card, CardContent, Avatar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"
import { Helmet } from "react-helmet-async";
import avatar from "../Img/me.jpg";
import { DevInfo, PagesDivider, DevWorkCount, Skills } from "./common/index"

const About = ({ helmet }) => {
    return (
        <Card sx={{
            height: "100vh",
            background: "whitesmoke",
            overflowY: "auto"
        }}>
            <Helmet>
                <title>{helmet}</title>
            </Helmet>
            <CardContent>
                <Grid container>
                    <Grid xs={12} sm={12} md={8} lg={8}>

                        <PagesDivider borderColor="black" chipColor="secondary" label="توسعه دهنده فول استک" backColor="" />

                        <Grid container>
                            <Grid xs={4} sm={4} md={3} lg={3} sx={{
                                display: {
                                    // xs: "none",
                                    sm: "block",
                                    md: "block"
                                }
                            }}>
                                <DevWorkCount />
                            </Grid>

                            <Grid xs={8} sm={8} md={9} lg={9}>
                                <DevInfo />
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid xs={0} sm={0} md={4} lg={4}>
                        <Avatar src={avatar} variant="rounded" sx={{
                            height: 250, width: 250, margin: "0 auto", display: {
                                xs: "none",
                                sm: "none",
                                xl: "block",
                                md: "block",
                                lg: "block",
                            }
                        }}>
                            AGH
                        </Avatar>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid sx={{ width: 1, mt: 1 }}>
                        <Skills />
                    </Grid>
                </Grid>
            </CardContent>
        </Card >
    );
}

export default About;