import { Drawer } from "@mui/material";
import { SidebarContent } from "../sidebar";
import MainContext from "../../context";
import { useContext } from "react";

const SidebarDrawer = () => {
    const {setDrawerOpen, drawerOpen } = useContext(MainContext);
    return (
        <Drawer open={drawerOpen} variant="temporary" onClose={() => setDrawerOpen(false)} sx={{
            "& .MuiDrawer-paper": {
                width: 280,
            }
        }}>
            <SidebarContent />
        </Drawer>
    );
}

export default SidebarDrawer;
