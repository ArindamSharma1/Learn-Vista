"use client";
import React, { useState, useMemo } from 'react';
import styles from './languages.module.css';
import { languages, Region, Script, LanguageData } from '@/data/languages';
import { Search, Mic, Captions, BookOpen, Headphones, X, Check, AlertCircle, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';

export default function LanguagesPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [regionFilter, setRegionFilter] = useState<Region | 'All'>('All');
    const [scriptFilter, setScriptFilter] = useState<Script | 'All'>('All');
    const [selectedLang, setSelectedLang] = useState<LanguageData | null>(null);

    // Filter Logic
    const filteredLanguages = useMemo(() => {
        return languages.filter(lang => {
            const matchesSearch = lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                lang.nativeName.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesRegion = regionFilter === 'All' || lang.region === regionFilter;
            const matchesScript = scriptFilter === 'All' || lang.script === scriptFilter;
            return matchesSearch && matchesRegion && matchesScript;
        });
    }, [searchTerm, regionFilter, scriptFilter]);

    // Unique Regions and Scripts for Filters
    const regions = Array.from(new Set(languages.map(l => l.region)));
    const scripts = Array.from(new Set(languages.map(l => l.script)));

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Explore Supported Languages</h1>
                <p className={styles.subtext}>
                    Learn Vista is built for global accessibility. We support over 50 languages and scripts, ensuring a native learning experience for everyone.
                </p>
            </div>

            <div className={styles.controls}>
                <div className={styles.searchWrapper}>
                    <Search className={styles.searchIcon} size={20} />
                    <input
                        type="text"
                        placeholder="Search by language name..."
                        className={styles.searchInput}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className={styles.filterGroup}>
                    <select
                        className={styles.filterSelect}
                        value={regionFilter}
                        onChange={(e) => setRegionFilter(e.target.value as Region | 'All')}
                    >
                        <option value="All">All Regions</option>
                        {regions.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                    <select
                        className={styles.filterSelect}
                        value={scriptFilter}
                        onChange={(e) => setScriptFilter(e.target.value as Script | 'All')}
                    >
                        <option value="All">All Scripts</option>
                        {scripts.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                </div>
            </div>

            <div className={styles.grid}>
                {filteredLanguages.map(lang => (
                    <motion.div
                        key={lang.code}
                        className={styles.card}
                        layoutId={`card-${lang.code}`}
                        onClick={() => setSelectedLang(lang)}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className={styles.cardHeader}>
                            <div>
                                <div className={styles.nativeName}>{lang.nativeName}</div>
                                <div className={styles.englishName}>{lang.name}</div>
                            </div>
                        </div>
                        <div className={styles.indicators}>
                            <div className={`${styles.indicator} ${lang.courseContent ? styles.indicatorActive : ''}`} title="Course Content">
                                <BookOpen size={14} />
                            </div>
                            <div className={`${styles.indicator} ${lang.audioSupport ? styles.indicatorActive : ''}`} title="Audio Support">
                                <Headphones size={14} />
                            </div>
                            <div className={`${styles.indicator} ${lang.subtitles ? styles.indicatorActive : ''}`} title="Subtitles">
                                <Captions size={14} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedLang && (
                    <div className={styles.modalOverlay} onClick={() => setSelectedLang(null)}>
                        <motion.div
                            className={styles.modalContent}
                            onClick={(e) => e.stopPropagation()}
                            layoutId={`card-${selectedLang.code}`}
                        >
                            <button className={styles.closeButton} onClick={() => setSelectedLang(null)}>
                                <X size={24} />
                            </button>

                            <div className={styles.modalHeader}>
                                <div className={styles.modalTitle}>{selectedLang.nativeName}</div>
                                <div className={styles.modalSubtitle}>{selectedLang.name} • {selectedLang.region}</div>
                            </div>

                            <div className={styles.detailGrid}>
                                <div>
                                    <div className={styles.sectionTitle}>Support Details</div>
                                    <div className={styles.infoRow}>
                                        <span className={styles.infoLabel}>UI Translation</span>
                                        <span className={styles.infoValue}>{selectedLang.uiSupport}</span>
                                    </div>
                                    <div className={styles.infoRow}>
                                        <span className={styles.infoLabel}>Script</span>
                                        <span className={styles.infoValue}>{selectedLang.script}</span>
                                    </div>
                                    <div className={styles.infoRow}>
                                        <span className={styles.infoLabel}>Course Content</span>
                                        <span className={styles.infoValue}>{selectedLang.courseContent ? 'Available' : 'Unavailable'}</span>
                                    </div>
                                    <div className={styles.infoRow}>
                                        <span className={styles.infoLabel}>Last Updated</span>
                                        <span className={styles.infoValue}>{selectedLang.lastUpdated}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.sectionTitle}>Accessibility</div>
                                    <div className={styles.infoRow}>
                                        <span className={styles.infoLabel}>Screen Reader</span>
                                        <span className={styles.infoValue}>
                                            {selectedLang.screenReader ? <Check size={16} color="var(--success)" /> : <AlertCircle size={16} />}
                                        </span>
                                    </div>
                                    <div className={styles.infoRow}>
                                        <span className={styles.infoLabel}>Text-to-Speech</span>
                                        <span className={styles.infoValue}>
                                            {selectedLang.tts ? <Check size={16} color="var(--success)" /> : <AlertCircle size={16} />}
                                        </span>
                                    </div>
                                    <div className={styles.infoRow}>
                                        <span className={styles.infoLabel}>Caption Accuracy</span>
                                        <span className={styles.infoValue}>{selectedLang.captionsAccuracy}</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <RefreshCw size={24} style={{ opacity: 0.5 }} />
                                <div>
                                    <div style={{ fontWeight: 600, marginBottom: '4px' }}>Live Preview</div>
                                    <div style={{ opacity: 0.7 }}>How "Welcome to Learn Vista" looks in {selectedLang.name}:</div>
                                    <div style={{ fontSize: '20px', marginTop: '10px', color: 'var(--color-primary)' }}>
                                        {/* Simple mock translation preview for demo purposes */}
                                        {selectedLang.code === 'en' ? "Welcome to Learn Vista" :
                                            selectedLang.code === 'es' ? "Bienvenido a Learn Vista" :
                                                selectedLang.code === 'fr' ? "Bienvenue à Learn Vista" :
                                                    selectedLang.code === 'hi' ? "Learn Vista में आपका स्वागत है" :
                                                        selectedLang.nativeName + " Learn Vista"}
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
}
