import {
    HomeRounded,
    FaceRounded,
    TextSnippetRounded,
    TerminalRounded,
    ConnectWithoutContactRounded,
} from "@mui/icons-material";

const tabProps = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
};
export const TabsData = () => {
    const tabs = [
        { label: "صفحه اصلی", icon: <HomeRounded />, ...tabProps(0) },
        { label: "درباره من", icon: <FaceRounded />, ...tabProps(1) },
        { label: "روزومه من", icon: <TextSnippetRounded />, ...tabProps(2) },
        { label: "دوره‌های گذرانده شده", icon: <TerminalRounded />, ...tabProps(3) },
        { label: "ارتباط با من", icon: <ConnectWithoutContactRounded />, ...tabProps(4) },
    ]

    return tabs;
}