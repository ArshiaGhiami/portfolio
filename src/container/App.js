import { useEffect, useState } from "react";
import MainContext from "../context";
import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/sidebar/index";
import { useMediaQuery, useTheme } from "@mui/material";
import Page from "../components/Page";
import SidebarContainer from "./SidebarContainer";
import PagesContainer from "./PageConteainer";
import DrawerActionButton from "../components/drawer/DrawerActionButton";
import SwipeableViews from "react-swipeable-views";
import { About, Resume, Courses, Contact, Home } from "../Pages/index"

function App() {
    const [value, setValue] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    }
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"))

    useEffect(() => {
        if (isMdUp) {
            setDrawerOpen(false);
        }
    }, [isMdUp])

    const [getTheme, setTheme] = useState()
    const handleTheme = () => {
        setTheme(prev => prev === "dark" ? "light" : "dark")
    }

    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

    useEffect(() => {
        setTheme(prefersDarkMode)
    }, []);

    return (
        <MainContext.Provider value={{ value, drawerOpen, handleTheme, setDrawerOpen, handleChange }}>
            <MainLayout mode={getTheme}>
                <SidebarContainer>
                    <Sidebar />
                </SidebarContainer>
                <DrawerActionButton />
                <PagesContainer>
                    <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
                        <Page value={value} index={0}>
                            <Home helmet="وب سایت ارشیا قیامی | صفحه اصلی" />
                        </Page>
                        <Page value={value} index={1}>
                            <About helmet="درباره من" />
                        </Page>
                        <Page value={value} index={2}>
                            <Resume helmet="رزومه من" />
                        </Page>
                        <Page value={value} index={3}>
                            <Courses helmet="دوره‌های گذرانده شده" />
                        </Page>
                        <Page value={value} index={4}>
                            <Contact helmet="ارتباط با من" />
                        </Page>
                    </SwipeableViews>
                </PagesContainer>
            </MainLayout>
        </MainContext.Provider>
    );
}

export default App;
