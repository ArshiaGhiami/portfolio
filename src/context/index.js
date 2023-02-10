import { createContext } from "react";

export default createContext({
    value: 0,
    setDrawerOpen: () => {},
    handleChange: () => {},
    handleTheme: () => {},
    DrawerOpen: false
})