'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                <span className="font-[family-name:var(--font-display)] text-[40vw] text-white select-none leading-none">
                    404
                </span>
            </div>

            {/* Decorative Circles */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute w-[50vh] h-[50vh] border border-white/10 rounded-full"
            />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#B84C4C] to-transparent mx-auto mb-8" />

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="font-[family-name:var(--font-display)] text-6xl md:text-8xl font-light text-white mb-6 tracking-tight"
                >
                    Lost Signal
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-white/50 font-light text-sm md:text-base mb-12 max-w-md mx-auto"
                >
                    The page you&apos;re looking for has drifted beyond our current detection range.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-4 border border-white/20 hover:border-white/40 hover:bg-white/5 px-8 py-4 transition-all duration-500"
                    >
                        <ArrowLeft size={16} className="text-white/60 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white">
                            Return to Origin
                        </span>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Footer Info */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-12 text-center"
            >
                <p className="text-[10px] text-white/30 font-mono uppercase tracking-widest">
                    Error 404 · Page Not Found
                </p>
            </motion.div>
        </div>
    );
}
