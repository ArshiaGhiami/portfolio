import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useCallback, useRef } from "react";
import { useEffect } from "react";
import Typed from "typed.js";
import bg1 from "../Img/jungle.jpg";
import { loadFull } from "tsparticles"
import Particles from "react-particles"
import { links } from "../constans/particles";
import { useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { Helmet } from "react-helmet-async";

const Home = ({ helmet }) => {
    const strings = [
        "توسعه دهنده فول استک هستم",
        "فریلنسر هستم",
        "محتوا ساز برنامه نویسی هستم",
    ]
    const nameEL = useRef(null);
    // const infoEL = useRef(null);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const typedName = new Typed(nameEL.current, {
            strings: ["ارشیا قیامی"],
            typeSpeed: 100,
            backSpeed: 70,
            backDelay: 40,
            showCursor: false
        })

        const stringTransition = setInterval(() => {
            setIndex(index => index + 1)
        }, 3000);

        // const typedInfo = new Typed(infoEL.current, {
        //     strings: strings,
        //     startDelay: 1500,
        //     typeSpeed: 50,
        //     backSpeed: 20,
        //     backDelay: 500,
        //     showCursor: false,
        //     loop: true
        // })

        return () => {
            typedName.destroy();
            clearInterval(stringTransition);
            // typedInfo.destroy();
        };
    }, []);


    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particleLoded = useCallback(async container => {
    }, []);

    const theme = useTheme();
    return (
        <Box sx={{
            backgroundImage: `url(${bg1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Helmet>
                <title>{helmet}</title>
            </Helmet>
            <Particles id="tsparticles" init={particlesInit} loaded={particleLoded} options={links} />
            <Typography variant="h4" color="whitesmoke" sx={{ fontWeight: 800 }} ref={nameEL}></Typography>
            <Box component="div" sx={{ display: "flex" }}>
                <TextTransition springConfig={presets.wobbly} sx={{ m: 0, p: 0 }}>
                    <Typography className="res-font" variant="" color={"#1976d2"} sx={{ fontWeight: 800, mt: 2, fontSize: 30 }}>
                        {strings[index % strings.length]}
                    </Typography>
                </TextTransition>
                <Typography className="res-font" variant="" sx={{ color: "whitesmoke", mr: 1, mt: 2, fontSize: 30, }}>من یک</Typography>
            </Box>
        </Box>
    );
}

export default Home;