import {
    Divider,
    Box,
} from "@mui/material/";
import { grey } from "@mui/material/colors";
import { SidebarTabs, SidebarFooter, SidebarHeader } from ".";

const SidebarContent = () => {
    return (
        <Box
            sx={{
                justifyContent: "center",
                textAlign: "center",
                mt: 2,
            }}
        >
            <SidebarHeader />

            <Divider variant="middle" />

            <SidebarTabs />

            <Divider variant="middle" sx={{ mt: 2 }} />

            <SidebarFooter />
        </Box>
    );
}

export default SidebarContent;