import { Tab, Tabs, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useContext } from "react";
import MainContext from "../../context";
import { TabsData } from "../../constans/TabsData";
const SidebarTabs = () => {

    const { value, handleChange, setDrawerOpen } = useContext(MainContext)
    const data = TabsData();
    const theme = useTheme();
    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButton="auto"
            allowScrollButtonsMobile
            value={value}
            onChange={handleChange}
            indicatorColor="text.primary"   
            textColor="secondary"
        >
            {data.map((tab, index) => (
                <Tab
                    key={index}
                    label={tab.label}
                    icon={tab.icon}
                    iconPosition="start"
                    onClick={() => setDrawerOpen(false)}
                    {...tab}
                    sx={{
                        "&.MuiTab-root": {
                            minHeight: "40px",
                            backgroundColor: theme.palette.mode === "dark" ? grey[800] : grey[500],
                            my: 0.5,
                            mx: 1,
                            borderRadius: 2
                        }
                    }}
                />
            ))}



        </Tabs>
    );
}

export default SidebarTabs;