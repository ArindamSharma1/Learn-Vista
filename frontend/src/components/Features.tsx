"use client";
import React from 'react';
import styles from './Features.module.css';
import { motion } from 'framer-motion';

const features = [
    {
        title: "Customise your learning experience",
        desc: "With a wide range of inbuilt features, plugins, and integrations at your disposal, you can create any course or learning environment you envision with Learn Vista."
    },
    {
        title: "Scale your platform to any size",
        desc: "From small classrooms to large universities, global companies, and government departments, Learn Vista can be scaled to support organisations of all sizes."
    },
    {
        title: "Safeguard your LMS data and systems",
        desc: "As an open source platform, Learn Vista is committed to safeguarding data security, user privacy, and security controls. For complete control, Learn Vista can be easily deployed on a private secure cloud or server."
    },
    {
        title: "Tap into specialist LMS support",
        desc: "Get your LMS set up and serviced for you by a Learn Vista Certified Partner or Service Provider of your choice."
    }
];

export default function Features() {
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
                    <h2 className={styles.heading}>Learn Vista puts the power of eLearning in your hands</h2>
                    <p className={styles.paragraph}>
                        At Learn Vista, our mission is to empower educators to improve our world with our open source eLearning software.
                    </p>
                    <p className={styles.paragraph}>
                        Flexible, secure, and customisable for any online teaching or training initiative, Learn Vista gives you the freedom to create an eLearning platform that best meets your needs.
                    </p>
                </motion.div>
            </div>

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
                        <h3 className={styles.cardTitle}>{feature.title}</h3>
                        <p className={styles.cardText}>{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
