import { Avatar, Typography } from "@mui/material";
import { RandomReveal } from "react-random-reveal";
import SocialMedia from "../../Pages/common/socialmedia";
import ThemeActionButton from "../ThemeActionButton";

const SidebarHeader = () => {
    return (
        <>
            <ThemeActionButton />
            <Avatar
                src={require("../../assets/avatar.jpg")}
                variant="rounded"
                sx={{
                    height: 200, width: 200, margin: "0 auto", display: {
                        xs: "none",
                        sm: "none",
                        md: "block",
                        lg: "blocl",
                        xl: "block"
                    }
                }}
            >
                YG
            </Avatar>

            <Typography variant="h6" color="title.main">
                ارشیا قیامی
            </Typography>

            <Typography variant="caption" color="title.main">
                {/* <RandomReveal characters="مدرس برنامه نویسی و توسعه دهنده فول استک" isPlaying duration={2}/> */}
                برنامه نویس و توسعه دهنده وب
            </Typography>

            <SocialMedia />
        </>
    );
}

export default SidebarHeader;