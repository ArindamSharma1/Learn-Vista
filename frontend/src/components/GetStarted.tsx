"use client";
import React from 'react';
import styles from './GetStarted.module.css';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function GetStarted() {
    const { t } = useLanguage();

    return (
        <section className={styles.section} id="get-started">
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {t.getStarted.heading}
                </motion.h2>

                <motion.p
                    className={styles.subheading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {t.getStarted.subheading}
                </motion.p>

                <motion.div
                    className={styles.benefitsList}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {t.getStarted.benefits.map((benefit: string, index: number) => (
                        <div key={index} className={styles.benefitItem}>
                            <span className={styles.checkIcon}>✓</span>
                            {benefit}
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    className={styles.buttonGroup}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Link href="/signup" className={styles.primaryButton}>
                        {t.getStarted.primaryButton}
                    </Link>
                    <Link href="/pricing" className={styles.secondaryButton}>
                        {t.getStarted.secondaryButton}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
