"use client";
import React from 'react';
import styles from './about.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
    const { t } = useLanguage();

    // Stats data
    const stats = [
        { label: t.aboutPage.stat1Label, value: "10k+", delay: 0 },
        { label: t.aboutPage.stat2Label, value: "500+", delay: 0.2 },
        { label: t.aboutPage.stat3Label, value: "30+", delay: 0.4 }
    ];

    // Offerings Data
    const offerings = [
        { title: t.aboutPage.offering1Title, desc: t.aboutPage.offering1Desc },
        { title: t.aboutPage.offering2Title, desc: t.aboutPage.offering2Desc },
        { title: t.aboutPage.offering3Title, desc: t.aboutPage.offering3Desc }
    ];

    return (
        <main className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {t.aboutPage.heroTitle}
                </motion.h1>
                <motion.p
                    className={styles.heroDesc}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    {t.aboutPage.heroDesc}
                </motion.p>
            </section>

            {/* Mission Section */}
            <section className={styles.section}>
                <div className={styles.missionGrid}>
                    <motion.div
                        className={styles.missionContent}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>{t.aboutPage.missionTitle}</h2>
                        <p>{t.aboutPage.missionDesc}</p>
                    </motion.div>
                    <motion.div
                        className={styles.missionImage}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        {/* Placeholder for visual/image */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--color-primary)', opacity: 0.2, fontSize: '4rem' }}>
                            Learn Vista
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Offerings Section */}
            <section className={styles.section}>
                <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '60px' }}>
                    {t.aboutPage.offeringTitle}
                </h2>
                <div className={styles.offerGrid}>
                    {offerings.map((offer, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className={styles.cardTitle}>{offer.title}</h3>
                            <p className={styles.cardDesc}>{offer.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <div className={styles.statsSection}>
                <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>{t.aboutPage.statsTitle}</h2>
                <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className={styles.statItem}
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: stat.delay, type: 'spring' }}
                        >
                            <div className={styles.statNumber}>{stat.value}</div>
                            <div className={styles.statLabel}>{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
