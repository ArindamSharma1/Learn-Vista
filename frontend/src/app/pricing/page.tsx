"use client";
import React, { useState } from 'react';
import styles from './pricing.module.css';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
    const { t } = useLanguage();
    const [isYearly, setIsYearly] = useState(false);

    const tiers = ['starter', 'pro', 'business'] as const;

    return (
        <main>
            <section className={styles.section}>
                <div className={styles.container}>
                    <motion.h1
                        className={styles.heading}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {t.pricingPage.heading}
                    </motion.h1>

                    <motion.p
                        className={styles.subheading}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {t.pricingPage.subheading}
                    </motion.p>

                    <motion.div
                        className={styles.toggleContainer}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className={`${styles.toggleLabel} ${!isYearly ? styles.active : ''}`}>
                            {t.pricingPage.monthly}
                        </span>
                        <div
                            className={`${styles.toggleSwitch} ${isYearly ? styles.checked : ''}`}
                            onClick={() => setIsYearly(!isYearly)}
                        >
                            <div className={styles.toggleHandle} />
                        </div>
                        <span className={`${styles.toggleLabel} ${isYearly ? styles.active : ''}`}>
                            {t.pricingPage.yearly}
                        </span>
                        {isYearly && (
                            <motion.span
                                className={styles.saveBadge}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                {t.pricingPage.save}
                            </motion.span>
                        )}
                    </motion.div>

                    <div className={styles.grid}>
                        {tiers.map((tierKey, index) => {
                            const tier = t.pricingPage.tiers[tierKey];
                            const isPro = tierKey === 'pro';

                            return (
                                <motion.div
                                    key={tierKey}
                                    className={`${styles.card} ${isPro ? styles.popular : ''}`}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    {isPro && (
                                        <div className={styles.popularBadge}>Most Popular</div>
                                    )}

                                    <h3 className={styles.planName}>{tier.name}</h3>

                                    <div className={styles.priceContainer}>
                                        <span className={styles.price}>{tier.price}</span>
                                        {'period' in tier && (
                                            <span className={styles.period}>
                                                {isYearly ? (tier as any).period.replace('month', 'year') : (tier as any).period}
                                            </span>
                                        )}
                                    </div>

                                    <p className={styles.description}>{tier.desc}</p>

                                    <div className={styles.features}>
                                        {tier.features.map((feature: string, i: number) => (
                                            <div key={i} className={styles.feature}>
                                                <Check className={styles.checkIcon} />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        href={tierKey === 'business' ? '/#contact' : '/signup'}
                                        className={`${styles.button} ${isPro ? styles.buttonPrimary : styles.buttonSecondary}`}
                                    >
                                        {tier.button}
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
