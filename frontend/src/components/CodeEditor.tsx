"use client";
import React, { useState } from 'react';
import styles from './CodeEditor.module.css';
import { motion } from 'framer-motion';
import { Play, CheckCircle } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';

export default function CodeEditor() {
    const { t } = useLanguage();
    const [compiling, setCompiling] = useState(false);
    const [showOutput, setShowOutput] = useState(false);

    const handleCompile = () => {
        setCompiling(true);
        setShowOutput(false);
        // Simulate compilation delay
        setTimeout(() => {
            setCompiling(false);
            setShowOutput(true);
        }, 1500);
    };

    return (
        <div className={styles.section} id="editor">
            <div className={styles.container}>
                {/* Left Side: Editor */}
                <motion.div
                    className={styles.editorWrapper}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.editorWindow}>
                        <div className={styles.editorHeader}>
                            <div className={styles.windowControls}>
                                <div className={`${styles.control} ${styles.red}`}></div>
                                <div className={`${styles.control} ${styles.yellow}`}></div>
                                <div className={`${styles.control} ${styles.green}`}></div>
                            </div>
                            <div className={styles.fileName}>main.py</div>
                            <div style={{ width: 40 }}></div> {/* Spacer */}
                        </div>
                        <div className={styles.editorBody}>
                            <div className={styles.codeLine}>
                                <span className={styles.lineNumber}>1</span>
                                <span className={styles.kw}>def</span> <span className={styles.func}>calculate_mastery</span>(<span className={styles.var}>user</span>):
                            </div>
                            <div className={styles.codeLine}>
                                <span className={styles.lineNumber}>2</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.kw}>if</span> <span className={styles.var}>user</span>.<span className={styles.var}>completed_courses</span> &gt; <span className={styles.num}>10</span>:
                            </div>
                            <div className={styles.codeLine}>
                                <span className={styles.lineNumber}>3</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.kw}>return</span> <span className={styles.str}>"Master Learner"</span>
                            </div>
                            <div className={styles.codeLine}>
                                <span className={styles.lineNumber}>4</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.kw}>else</span>:
                            </div>
                            <div className={styles.codeLine}>
                                <span className={styles.lineNumber}>5</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.kw}>return</span> <span className={styles.str}>"Apprentice"</span>
                            </div>
                            <div className={styles.codeLine}>
                                <span className={styles.lineNumber}>6</span>
                            </div>
                            <div className={styles.codeLine}>
                                <span className={styles.lineNumber}>7</span>
                                <span className={styles.func}>print</span>(<span className={styles.func}>calculate_mastery</span>(<span className={styles.var}>current_user</span>))
                            </div>

                            <button className={styles.compileButton} onClick={handleCompile} disabled={compiling}>
                                {compiling ? t.editor.running : <><Play size={12} fill="currentColor" /> {t.editor.runCode}</>}
                            </button>
                        </div>
                        <div className={`${styles.outputArea} ${showOutput ? styles.visible : ''}`}>
                            <div className={styles.outputSuccess}>
                                <CheckCircle size={14} style={{ display: 'inline', marginRight: 5 }} />
                                {t.editor.success}
                            </div>
                            <div>&gt; {t.editor.output}</div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Text */}
                <motion.div
                    className={styles.textContent}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className={styles.subHeading}>{t.editor.subHeading}</h3>
                    <h2 className={styles.heading}>{t.editor.heading}</h2>
                    <p className={styles.description}>
                        {t.editor.description}
                    </p>
                    <ul style={{ listStyle: 'none', gap: '10px', display: 'flex', flexWrap: 'wrap' }}>
                        {['Python', 'JavaScript', 'C++', 'Java', 'Go'].map(lang => (
                            <li key={lang} style={{
                                background: 'var(--card-bg)',
                                border: '1px solid var(--card-border)',
                                padding: '5px 15px',
                                borderRadius: '20px',
                                fontSize: '14px',
                                color: 'var(--foreground)'
                            }}>
                                {lang}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}
