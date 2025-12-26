import React from 'react';
import styles from './login.module.css';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Login() {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1 className={styles.title}>Welcome Back</h1>
                    <form>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Email</label>
                            <input type="email" className={styles.input} placeholder="Enter your email" required />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Password</label>
                            <input type="password" className={styles.input} placeholder="Enter your password" required />
                        </div>
                        <button type="submit" className={styles.button}>Log In</button>
                    </form>
                    <div className={styles.links}>
                        <a href="#" className={styles.link}>Forgot password?</a>
                        <br /><br />
                        <span>Don&apos;t have an account? </span>
                        <Link href="/signup" className={styles.link} style={{ color: '#f98012' }}>Sign up</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
