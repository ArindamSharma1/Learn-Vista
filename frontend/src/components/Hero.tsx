"use client";
import React from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import Orb from './Orb';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Hero() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const orbBgColor = mounted && theme === 'light' ? '#F5F5F5' : '#141d28';

    return (
        <div className={styles.hero}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <Orb
                    hoverIntensity={0.80}
                    rotateOnHover={true}
                    hue={204}
                    forceHoverState={false}
                    backgroundColor={orbBgColor}
                />
            </div>
            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className={styles.headline}>
                    Online learning <br /> delivered your way
                </h1>
                <p className={styles.subheadline}>
                    Join hundreds of thousands of educators and trainers on Learn Vista.
                </p>
                <div className={styles.buttonGroup}>
                    <motion.a
                        href="#signup"
                        className={`${styles.button} ${styles.buttonPrimary}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Started
                    </motion.a>
                    <motion.a
                        href="#whyus"
                        className={`${styles.button} ${styles.buttonSecondary}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Learn More
                    </motion.a>
                </div>
            </motion.div>
        </div>
    );
}
