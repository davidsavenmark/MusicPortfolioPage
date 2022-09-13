import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useSidebar = () => {
    const { theme, setTheme } = useTheme()
    const [activeText, setActiveText] = useState<string>('')

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        if (theme === 'light') setActiveText('Light')
        else if (theme === 'dark') setActiveText('Dark')
    }, [theme])

    return { changeTheme, activeText }


}