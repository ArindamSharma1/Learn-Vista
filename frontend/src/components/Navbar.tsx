"use client";
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Linkedin, Instagram } from "lucide-react"
import styles from "./Navbar.module.css"
import { motion } from "framer-motion"
import ThemeToggle from "./ThemeToggle"
import LanguageSwitcher from "./LanguageSwitcher"

import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.nav
            className={styles.navbar}
            style={{
                backgroundColor: scrolled ? "rgba(0, 0, 0, 0.2)" : "transparent",
                backdropFilter: scrolled ? "blur(20px)" : "none",
                boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.2)" : "none"
            }}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.logo} href="/">
                Learn<span> Vista</span>
            </div>
            <ul className={styles.navLinks}>
                <li className={styles.navItem}><Link href="/#home" className={styles.link}>{t.nav.home}</Link></li>
                <li className={styles.navItem}><Link href="/about" className={styles.link}>{t.nav.about}</Link></li>
                <li className={styles.navItem}>
                    <span className={styles.link} style={{ cursor: 'pointer' }}>
                        {t.nav.solution} <ChevronDown size={16} />
                    </span>
                    <div className={styles.dropdown}>
                        <Link href="/login" className={styles.dropdownItem}>{t.nav.login}</Link>
                        <Link href="#advantages" className={styles.dropdownItem}>{t.nav.advantages}</Link>
                        <Link href="#faq" className={styles.dropdownItem}>{t.nav.faq}</Link>
                    </div>
                </li>
                <li className={styles.navItem}><Link href="#whyus" className={styles.link}>{t.nav.whyUs}</Link></li>
                <li className={styles.navItem}><Link href="/#contact" className={styles.link}>{t.nav.contact}</Link></li>
            </ul>

            <div className={styles.socials}>
                <LanguageSwitcher />
                <ThemeToggle />
                <motion.a href="https://linkedin.com" target="_blank" className={styles.socialIcon} whileHover={{ scale: 1.2, rotate: 12 }}>
                    <Linkedin size={20} />
                </motion.a>
                <motion.a href="https://instagram.com" target="_blank" className={styles.socialIcon} whileHover={{ scale: 1.2, rotate: 12 }}>
                    <Instagram size={20} />
                </motion.a>
            </div>
        </motion.nav>
    )
}
