import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";

export default function ThemeSetter(){
    const{theme , setTheme} =useContext(ThemeContext);
        return(
            <div className="theme-setter">
                <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>
                <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Mode</h1>
            </div>
        )

}