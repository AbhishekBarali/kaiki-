'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';

const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Lab' },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        let ticking = false;
        let prevScrollY = window.scrollY;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    const scrollDiff = currentScrollY - prevScrollY;

                    // Show header if at the top of the page
                    if (currentScrollY < 100) {
                        setIsVisible(true);
                    }
                    // Only hide/show if scroll difference is significant (reduces choppiness)
                    else if (scrollDiff > 10) {
                        setIsVisible(false);
                    } else if (scrollDiff < -10) {
                        setIsVisible(true);
                    }

                    prevScrollY = currentScrollY;
                    setLastScrollY(currentScrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{
                    y: isVisible ? 0 : -100,
                    opacity: isVisible ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 z-50 w-full transition-all duration-300 ${lastScrollY > 50
                    ? 'bg-[#050505]/90 backdrop-blur-md'
                    : 'bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent'
                    }`}
            >
                <div className="w-full h-24 flex items-center justify-between px-6 md:px-12 max-w-[1920px] mx-auto">
                    {/* Logo */}
                    <Link href="/" className="group flex items-center gap-3 pl-0 md:pl-8">
                        <div className="w-2 h-2 bg-[#B84C4C] rounded-full shadow-[0_0_10px_rgba(207,46,46,0.5)]" />
                        <span className="text-white text-base md:text-lg font-light tracking-[0.6em] uppercase font-[family-name:var(--font-display)]">
                            KAIKI
                        </span>
                        <div className="h-[1px] w-0 bg-white group-hover:w-full transition-all duration-700 ease-out mt-1 opacity-50 absolute bottom-0 left-0" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-12 pr-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="group relative py-2"
                            >
                                <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors duration-300">
                                    {link.label}
                                </span>
                                <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-[#B84C4C] transition-all duration-500 group-hover:w-full" />
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="border border-white/10 hover:border-white/40 hover:bg-white/5 text-white text-[10px] uppercase tracking-widest px-8 py-3 transition-all duration-500 backdrop-blur-sm"
                        >
                            Access Beta
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-white p-2 relative z-50"
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait">
                            {isMobileMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X size={24} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ opacity: 0, rotate: 90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: -90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu size={24} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                links={navLinks}
            />
        </>
    );
}
