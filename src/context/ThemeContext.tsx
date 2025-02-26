"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Define ThemeContext Type
interface ThemeContextType {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

// Create Context with Default Value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme Provider Component
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [darkMode, setDarkMode] = useState(false);

    // Load theme from localStorage on first render
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        setDarkMode(storedTheme === "dark");
    }, []);

    // Toggle Dark Mode
    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem("theme", newMode ? "dark" : "light");
            return newMode;
        });
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <div className={darkMode ? "dark" : ""}>{children}</div>
        </ThemeContext.Provider>
    );
};

// Custom Hook for Dark Mode
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
