"use client";
import React from 'react';
import styles from './ContactSection.module.css';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
    const { t } = useLanguage();

    return (
        <section className={styles.section} id="contact">
            <div className={styles.container}>
                {/* Left Side - Info */}
                <motion.div
                    className={styles.infoContent}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.badge}>{t.contactSection.badge}</div>
                    <h2 className={styles.heading}>{t.contactSection.heading}</h2>
                    <p className={styles.subheading}>{t.contactSection.subheading}</p>

                    <div className={styles.contactDetails}>
                        <div className={styles.contactItem}>
                            <div className={styles.iconWrapper}>
                                <Mail size={20} />
                            </div>
                            <span>hello@learnvista.com</span>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.iconWrapper}>
                                <Phone size={20} />
                            </div>
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.iconWrapper}>
                                <MapPin size={20} />
                            </div>
                            <span>123 Innovation Dr, Tech City</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side - Form */}
                <motion.div
                    className={styles.formContainer}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <form className={styles.formGrid} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>{t.contactSection.form.name}</label>
                            <input type="text" className={styles.input} required />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>{t.contactSection.form.email}</label>
                            <input type="email" className={styles.input} required />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>{t.contactSection.form.subject}</label>
                            <input type="text" className={styles.input} required />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>{t.contactSection.form.message}</label>
                            <textarea className={styles.textarea} required></textarea>
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            {t.contactSection.form.button}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
