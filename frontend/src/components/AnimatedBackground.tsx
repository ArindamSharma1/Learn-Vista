"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: 0, // Behind plain content
            background: '#141d28', // Dark base
        }}>
            {/* Primary Orange Orb */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(249,128,18,0.4) 0%, rgba(249,128,18,0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                }}
            />

            {/* Secondary Blue/Lighter Orb */}
            <motion.div
                animate={{
                    x: [0, -150, 0],
                    y: [0, 100, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '40%',
                    right: '10%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(50, 80, 130, 0.3) 0%, rgba(20, 29, 40, 0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                }}
            />

            {/* Accent Small Orb */}
            <motion.div
                animate={{
                    x: [-50, 50, -50],
                    y: [-50, 50, -50],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '30%',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(30px)',
                }}
            />
        </div>
    );
}
