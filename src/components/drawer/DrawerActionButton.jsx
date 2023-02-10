import { MenuRounded } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import MainContext from "../../context";
const DrawerActionButton = () => {
    const { setDrawerOpen } = useContext(MainContext)

    return (
        <Box sx={{
            display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
            },
            position: "absolute"
    }}>
            <Fab color="primary" size="small" aria-label="sidebar" onClick={() => setDrawerOpen(true)} sx={{ m: 2 }}>
                <MenuRounded />
            </Fab>
        </Box>
    );
}

export default DrawerActionButton;