import React from 'react';
import styles from './signup.module.css';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Signup() {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1 className={styles.title}>Create Account</h1>
                    <form>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Full Name</label>
                            <input type="text" className={styles.input} placeholder="Enter your full name" required />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Email</label>
                            <input type="email" className={styles.input} placeholder="Enter your email" required />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Password</label>
                            <input type="password" className={styles.input} placeholder="Create a password" required />
                        </div>
                        <button type="submit" className={styles.button}>Sign Up</button>
                    </form>
                    <div className={styles.links}>
                        <span>Already have an account? </span>
                        <Link href="/login" className={styles.link} style={{ color: '#f98012' }}>Log in</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
