"use client";
import React from 'react';
import styles from './Hero.module.css'; // Reuse Hero styles for consistent buttons/typography
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { Globe, MessageCircle, Mic, Languages } from 'lucide-react';

export default function LanguageShowcase() {
    const { t } = useLanguage();

    return (
        <section style={{
            padding: '100px 10%',
            background: 'var(--background)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            overflow: 'hidden',
            position: 'relative'
        }}>
            {/* Decorative elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'var(--color-primary)',
                filter: 'blur(150px)',
                opacity: 0.1,
                borderRadius: '50%',
                zIndex: 0
            }}></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ zIndex: 1 }}
            >
                <div style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    background: 'rgba(249, 128, 18, 0.1)',
                    color: '#f98012',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '700',
                    marginBottom: '20px',
                    letterSpacing: '1px'
                }}>
                    {t.showcase.badge}
                </div>

                <h2 className={styles.headline} style={{ fontSize: '48px', marginBottom: '20px' }}>
                    {t.showcase.heading} <span style={{ color: '#f98012' }}>.</span>
                </h2>

                <p className={styles.subheadline} style={{ maxWidth: '700px', margin: '0 auto 50px auto' }}>
                    {t.showcase.description}
                </p>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                width: '100%',
                maxWidth: '1000px',
                zIndex: 1
            }}>
                {[
                    { icon: <Languages size={32} />, label: "50+ Languages" },
                    { icon: <Globe size={32} />, label: "Localised Content" },
                    { icon: <Mic size={32} />, label: "Audio Transcriptions" },
                    { icon: <MessageCircle size={32} />, label: "24/7 Global Support" }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5, backgroundColor: 'var(--card-bg)' }}
                        style={{
                            padding: '30px',
                            border: '1px solid var(--card-border)',
                            borderRadius: '20px',
                            background: 'rgba(255,255,255,0.01)',
                            backdropFilter: 'blur(10px)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '15px',
                            color: 'var(--foreground)',
                            cursor: 'default'
                        }}
                    >
                        <div style={{ color: '#f98012' }}>{item.icon}</div>
                        <h4 style={{ fontSize: '18px', fontWeight: '600' }}>{item.label}</h4>
                    </motion.div>
                ))}
            </div>

            <motion.div
                style={{ marginTop: '60px', zIndex: 1 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <Link href="/languages">
                    <button className={`${styles.button} ${styles.buttonOutline}`}>
                        {t.showcase.button}
                    </button>
                </Link>
            </motion.div>
        </section>
    );
}
