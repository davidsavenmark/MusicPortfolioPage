import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useSidebar = () => {
    const { theme, setTheme } = useTheme()
    const [activeText, setActiveText] = useState<string>('')

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        setActiveText(theme === "light" ? "Light" : "Dark");
    }, [theme])

    return { changeTheme, activeText }
}