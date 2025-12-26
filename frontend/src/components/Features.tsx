"use client";
import { Shield, Users, Monitor, LifeBuoy } from 'lucide-react';
import React from 'react';
import styles from './Features.module.css';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Features() {
    const { t } = useLanguage();

    const features = [
        {
            icon: <Monitor size={40} />,
            title: t.advantages.customise.title,
            desc: t.advantages.customise.desc
        },
        {
            icon: <Users size={40} />,
            title: t.advantages.scale.title,
            desc: t.advantages.scale.desc
        },
        {
            icon: <Shield size={40} />,
            title: t.advantages.safeguard.title,
            desc: t.advantages.safeguard.desc
        },
        {
            icon: <LifeBuoy size={40} />,
            title: t.advantages.support.title,
            desc: t.advantages.support.desc
        }
    ];

    return (
        <div className={styles.section} id="whyus">
            <div className={styles.topContent}>
                <motion.div
                    className={styles.imageContainer}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <img src="/features.jpg" alt="Features" className={styles.image} />
                </motion.div>

                <motion.div
                    className={styles.textContent}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.heading}>{t.advantages.heading}</h2>
                    <p className={styles.paragraph}>
                        {t.advantages.p1}
                    </p>
                    <p className={styles.paragraph}>
                        {t.advantages.p2}
                    </p>
                </motion.div>
            </div>

            <div className={styles.advantagesContainer}>
                <h2 id="advantages" className={styles.sectionTitle}>{t.advantages.title}</h2>
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>{feature.icon}</div>
                                <h3 className={styles.cardTitle}>{feature.title}</h3>
                            </div>
                            <p className={styles.cardText}>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
