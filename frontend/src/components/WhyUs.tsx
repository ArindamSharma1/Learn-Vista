"use client";
import React from 'react';
import styles from './WhyUs.module.css';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Layout, BrainCircuit, Terminal, Cloud } from 'lucide-react';

export default function WhyUs() {
    const { t } = useLanguage();

    const comparisons = [
        {
            icon: <Layout size={32} />,
            key: 'ui',
            data: t.whyChooseUs.points.ui
        },
        {
            icon: <BrainCircuit size={32} />,
            key: 'ai',
            data: t.whyChooseUs.points.ai
        },
        {
            icon: <Terminal size={32} />,
            key: 'dev',
            data: t.whyChooseUs.points.dev
        },
        {
            icon: <Cloud size={32} />,
            key: 'deploy',
            data: t.whyChooseUs.points.deploy
        }
    ];

    return (
        <section className={styles.section} id="whyus">
            <div className={styles.content}>
                <div className={styles.header}>
                    <motion.div
                        className={styles.badge}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {t.whyChooseUs.badge}
                    </motion.div>
                    <motion.h2
                        className={styles.heading}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        {t.whyChooseUs.heading}
                    </motion.h2>
                    <motion.p
                        className={styles.subheading}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {t.whyChooseUs.subheading}
                    </motion.p>
                </div>

                <div className={styles.comparisonGrid}>
                    {comparisons.map((item, index) => (
                        <motion.div
                            key={item.key}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.cardIcon}>
                                {item.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{item.data.title}</h3>

                            <div className={styles.comparisonRow}>
                                <div className={styles.usSide}>
                                    <span className={styles.usLabel}>Learn Vista</span>
                                    <div className={styles.usValue}>{item.data.us}</div>
                                </div>
                            </div>

                            <div className={styles.comparisonRow} style={{ borderTop: 'none', paddingTop: '5px' }}>
                                <div className={styles.themSide}>
                                    Legacy LMS: {item.data.them}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
