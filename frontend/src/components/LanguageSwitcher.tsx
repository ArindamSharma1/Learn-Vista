"use client";
import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/data/translations';
import styles from './Navbar.module.css'; // Reusing Navbar styles for consistency

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const languages: { code: Language; label: string; flag: string }[] = [
        { code: 'en', label: 'English', flag: '🇺🇸' },
        { code: 'es', label: 'Español', flag: '🇪🇸' },
        { code: 'fr', label: 'Français', flag: '🇫🇷' },
        { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' }
    ];

    return (
        <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <motion.div
                className={styles.socialIcon}
                whileHover={{ scale: 1.2, rotate: 15 }}
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <Globe size={20} />
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            right: 0,
                            padding: '10px',
                            background: 'var(--card-bg)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid var(--card-border)',
                            borderRadius: '12px',
                            boxShadow: '0 4px 20px var(--shadow-color)',
                            zIndex: 100,
                            minWidth: '150px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px'
                        }}
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                style={{
                                    all: 'unset',
                                    padding: '8px 12px',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    fontSize: '14px',
                                    color: language === lang.code ? 'var(--color-primary)' : 'var(--foreground)',
                                    background: language === lang.code ? 'rgba(249, 128, 18, 0.1)' : 'transparent',
                                    transition: 'all 0.2s',
                                    whiteSpace: 'nowrap'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = language === lang.code ? 'rgba(249, 128, 18, 0.1)' : 'transparent';
                                }}
                            >
                                <span style={{ fontSize: '16px' }}>{lang.flag}</span>
                                <span style={{ fontWeight: 500 }}>{lang.label}</span>
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
