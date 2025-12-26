"use client";
import React from 'react';
import styles from './Footer.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { Github, Twitter, Linkedin, Facebook, Send } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className={styles.footer} id="contact">
            <div className={styles.grid}>
                {/* Brand Column */}
                <div className={styles.column}>
                    <div className={styles.logo}>
                        Learn<span> Vista</span>
                    </div>
                    <p className={styles.description}>
                        {t.footer.brandDesc}
                    </p>
                    <div className={styles.newsletter}>
                        <div style={{ position: 'relative', width: '100%' }}>
                            <input
                                type="email"
                                placeholder={t.footer.emailPlaceholder}
                                className={styles.input}
                            />
                            <button
                                style={{
                                    position: 'absolute',
                                    right: '5px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'var(--color-primary)',
                                    border: 'none',
                                    borderRadius: '6px',
                                    width: '32px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    cursor: 'pointer'
                                }}
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Column */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>{t.footer.product}</h4>
                    <div className={styles.linkList}>
                        <Link href="#features" className={styles.link}>{t.footer.features}</Link>
                        <Link href="#showcase" className={styles.link}>{t.footer.showcase}</Link>
                        <Link href="#" className={styles.link}>{t.footer.pricing}</Link>
                        <Link href="#" className={styles.link}>{t.nav.solution}</Link>
                    </div>
                </div>

                {/* Company Column */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>{t.footer.company}</h4>
                    <div className={styles.linkList}>
                        <Link href="/about" className={styles.link}>{t.footer.about}</Link>
                        <Link href="#whyus" className={styles.link}>{t.footer.whyUs}</Link>
                        <Link href="/contact" className={styles.link}>{t.footer.contact}</Link>
                        <Link href="#" className={styles.link}>{t.footer.blog}</Link>
                    </div>
                </div>

                {/* Resources Column */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>{t.footer.resources}</h4>
                    <div className={styles.linkList}>
                        <Link href="#" className={styles.link}>{t.footer.community}</Link>
                        <Link href="#" className={styles.link}>{t.footer.help}</Link>
                        <Link href="#" className={styles.link}>API Documentation</Link>
                    </div>
                    <div className={styles.socialRow}>
                        <a href="#" className={styles.socialIcon}><Github size={20} /></a>
                        <a href="#" className={styles.socialIcon}><Twitter size={20} /></a>
                        <a href="#" className={styles.socialIcon}><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <div>
                    &copy; {new Date().getFullYear()} Learn Vista. {t.footer.rights}
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <Link href="#" className={styles.link}>Privacy Policy</Link>
                    <Link href="#" className={styles.link}>Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
