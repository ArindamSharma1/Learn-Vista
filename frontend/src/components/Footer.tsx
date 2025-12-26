import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer} id="contact">
            <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'white' }}>Learn Vista</h2>
            <p style={{ marginBottom: '20px', color: '#e9e9e9' }}>Empowering educators to improve our world.</p>
            <div className={styles.topt}>
                &copy; {new Date().getFullYear()} Learn Vista. All rights reserved.
            </div>
        </footer>
    );
}
