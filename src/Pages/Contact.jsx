import { useState, useEffect } from "react";
import { Card, Typography, CardContent, Slide  } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Helmet } from "react-helmet-async";
import worldMap from "../Img/icons/map.svg"
import { ContactForm, PagesDivider } from "./common/index"
import { AccountCircle } from "@mui/icons-material";

const Contact = ({ helmet }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        }
    }, [])
   
    return (
        <Card sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "whitesmoke",
            height: "100vh",
            overflowY: "scroll"
        }}>
            <Helmet><title>{helmet}</title></Helmet>
            <CardContent>
                <PagesDivider borderColor="warning.main" chipColor="warning" label="ارتباط با من" icon={<AccountCircle/>}/>
                <Grid container sx={{ mt: 5 }}>
                    <Slide in={loading} direction="up" style={{
                        transitionDelay: loading ? "200ms" : "0ms"
                    }}>
                        <Grid xs={12} md={8}>
                            <Card sx={{ justifyContent: "center", alignItems: "center" }}>
                                <ContactForm/>
                            </Card>
                        </Grid>
                    </Slide>
                    <Slide in={loading} direction="up" style={{
                        transitionDelay: loading ? "200ms" : "0ms"
                    }}>
                        <Grid xs={0} md={4} sx={{
                            backgroundImage: `url(${worldMap})`,
                            backgroundRepeat: "no-repeat",
                            textAlign: "center",
                            backgroundPosition: "center",
                        }}>
                            <CardContent>
                                <Typography sx={{ fontFamily: "vazir" }} variant="h6" color="black">بیا در مورد همه چیز صحبت کنیم</Typography>
                                <Typography color="black">😉 !<a href="mailto:arshia.ghiami@yahoo.com" alt="email" style={{ color: "tomato", textDecoration: "none" }}>ایمیل</a> بزن بهم</Typography>
                            </CardContent>
                        </Grid>
                    </Slide>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Contact;