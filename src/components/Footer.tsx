'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks = {
    social: [
        { href: 'https://twitter.com', label: 'Twitter / X' },
        { href: 'https://linkedin.com', label: 'LinkedIn' },
    ],
    legal: [
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/terms', label: 'Terms' },
    ],
};

export default function Footer() {
    return (
        <footer className="w-full bg-[#050505] border-t border-white/10 py-20 relative z-10">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                {/* Logo & Info */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#B84C4C] rounded-full" />
                        <span className="text-xl font-light tracking-[0.2em] text-white font-[family-name:var(--font-display)]">
                            KAIKI
                        </span>
                    </div>
                    <p className="text-xs text-white/70 font-mono uppercase tracking-widest max-w-xs leading-relaxed">
                        AI Intelligence Lab
                        <br />
                        Est. 2025
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center">
                    <div className="flex flex-col gap-4">
                        {footerLinks.social.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-white/70 hover:text-white uppercase tracking-widest transition-colors hover-underline relative w-fit"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4">
                        {footerLinks.legal.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-xs text-white/70 hover:text-white uppercase tracking-widest transition-colors hover-underline relative w-fit"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-xs text-white/60 font-mono uppercase tracking-widest md:self-end">
                    © 2025 KAIKI Labs Inc.
                </div>
            </div>
        </footer>
    );
}
