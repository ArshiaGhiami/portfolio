import { NightlightOutlined, WbSunnyOutlined } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import { useContext } from "react";
import context from "../context";

const ThemeActionButton = () => {
    const theme = useTheme();
    const { handleTheme } = useContext(context)
    return (
        <Box sx={{
            position: "absolute",
            display: {
                xs: "none",
                md: "block"
            }
        }}>
            <Fab color="secondary" onClick={handleTheme} sx={{ color: "whitesmoke", mr: 1 }} size="small" variant="extended">
                {theme.palette.mode === "dark" ? <WbSunnyOutlined /> : <NightlightOutlined />}
                {theme.palette.mode === "dark" ? "تم روز" : "تم شب"}
            </Fab>
        </Box>
    );
}

export default ThemeActionButton;