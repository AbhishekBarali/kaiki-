'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    links: { href: string; label: string }[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-40 md:hidden"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-[#050505]/95 backdrop-blur-md"
                        onClick={onClose}
                    />

                    {/* Menu Content */}
                    <motion.nav
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#0a0a0a] border-l border-white/5 flex flex-col justify-center px-12"
                    >
                        <ul className="space-y-8">
                            {links.map((link, index) => (
                                <motion.li
                                    key={link.href}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={onClose}
                                        className="group flex items-center gap-4"
                                    >
                                        <span className="text-xs font-mono text-[#B84C4C]">
                                            0{index + 1}
                                        </span>
                                        <span className="text-2xl font-light tracking-wide text-white/80 group-hover:text-white transition-colors">
                                            {link.label}
                                        </span>
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="mt-16"
                        >
                            <Link
                                href="/contact"
                                onClick={onClose}
                                className="inline-block border border-white/20 hover:border-white/40 hover:bg-white/5 text-white text-xs uppercase tracking-widest px-8 py-4 transition-all duration-500"
                            >
                                Access Beta
                            </Link>
                        </motion.div>

                        {/* Footer Info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="absolute bottom-12 left-12"
                        >
                            <p className="text-[10px] text-white/30 font-mono uppercase tracking-widest">
                                KAIKI Labs
                                <br />
                                Est. 2024
                            </p>
                        </motion.div>
                    </motion.nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
