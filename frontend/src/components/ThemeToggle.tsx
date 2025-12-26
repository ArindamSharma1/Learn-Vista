"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import styles from "./Navbar.module.css";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={styles.socialIcon}
            style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
            }}
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}
