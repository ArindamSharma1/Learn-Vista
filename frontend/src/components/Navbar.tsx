"use client";
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Linkedin, Instagram } from "lucide-react"
import styles from "./Navbar.module.css"
import { motion } from "framer-motion"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

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
            <div className={styles.logo}>
                Learn<span> Vista</span>
            </div>
            <ul className={styles.navLinks}>
                <li className={styles.navItem}><Link href="/" className={styles.link}>Home</Link></li>
                <li className={styles.navItem}><Link href="/about" className={styles.link}>About</Link></li>
                <li className={styles.navItem}>
                    <span className={styles.link} style={{ cursor: 'pointer' }}>
                        Solution <ChevronDown size={16} />
                    </span>
                    <div className={styles.dropdown}>
                        <Link href="/login" className={styles.dropdownItem}>Learn vista</Link>
                        <Link href="#advantages" className={styles.dropdownItem}>Advantages</Link>
                        <Link href="#faq" className={styles.dropdownItem}>FAQ</Link>
                    </div>
                </li>
                <li className={styles.navItem}><Link href="#whyus" className={styles.link}>Why Us</Link></li>
                <li className={styles.navItem}><Link href="/contact" className={styles.link}>Contact us</Link></li>
            </ul>

            <div className={styles.socials}>
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
