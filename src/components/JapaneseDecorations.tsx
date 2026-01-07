'use client';

import { motion } from 'framer-motion';

interface CherryBlossomProps {
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    className?: string;
}

export function CherryBlossom({ position, className = '' }: CherryBlossomProps) {
    const positionClasses = {
        'top-left': 'top-0 left-0',
        'top-right': 'top-0 right-0 scale-x-[-1]',
        'bottom-left': 'bottom-0 left-0 scale-y-[-1]',
        'bottom-right': 'bottom-0 right-0 scale-[-1]',
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className={`absolute ${positionClasses[position]} pointer-events-none z-0 ${className}`}
        >
            <svg
                viewBox="0 0 200 300"
                className="w-32 md:w-48 lg:w-64 h-auto text-white"
                fill="currentColor"
            >
                {/* Cherry Blossom Branch Pattern */}
                <g opacity="0.08">
                    {/* Main branch */}
                    <path
                        d="M-10 0 Q30 50 20 100 Q10 150 40 200 Q60 250 50 300"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                    />

                    {/* Secondary branches */}
                    <path d="M20 100 Q50 90 70 110" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M30 160 Q60 150 85 165" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M15 60 Q-10 45 -30 60" stroke="currentColor" strokeWidth="1.5" fill="none" />

                    {/* Cherry blossoms (5-petal flowers) */}
                    {/* Flower 1 */}
                    <g transform="translate(70, 105)">
                        <circle cx="0" cy="-8" r="6" opacity="0.8" />
                        <circle cx="7.6" cy="-2.5" r="6" opacity="0.8" />
                        <circle cx="4.7" cy="6.5" r="6" opacity="0.8" />
                        <circle cx="-4.7" cy="6.5" r="6" opacity="0.8" />
                        <circle cx="-7.6" cy="-2.5" r="6" opacity="0.8" />
                        <circle cx="0" cy="0" r="3" />
                    </g>

                    {/* Flower 2 */}
                    <g transform="translate(85, 160) scale(0.8)">
                        <circle cx="0" cy="-8" r="6" opacity="0.8" />
                        <circle cx="7.6" cy="-2.5" r="6" opacity="0.8" />
                        <circle cx="4.7" cy="6.5" r="6" opacity="0.8" />
                        <circle cx="-4.7" cy="6.5" r="6" opacity="0.8" />
                        <circle cx="-7.6" cy="-2.5" r="6" opacity="0.8" />
                        <circle cx="0" cy="0" r="3" />
                    </g>

                    {/* Flower 3 */}
                    <g transform="translate(-20, 55) scale(0.7)">
                        <circle cx="0" cy="-8" r="6" opacity="0.8" />
                        <circle cx="7.6" cy="-2.5" r="6" opacity="0.8" />
                        <circle cx="4.7" cy="6.5" r="6" opacity="0.8" />
                        <circle cx="-4.7" cy="6.5" r="6" opacity="0.8" />
                        <circle cx="-7.6" cy="-2.5" r="6" opacity="0.8" />
                        <circle cx="0" cy="0" r="3" />
                    </g>

                    {/* Flower 4 */}
                    <g transform="translate(40, 200) scale(0.9)">
                        <circle cx="0" cy="-8" r="6" opacity="0.8" />
                        <circle cx="7.6" cy="-2.5" r="6" opacity="0.8" />
                        <circle cx="4.7" cy="6.5" r="6" opacity="0.8" />
                        <circle cx="-4.7" cy="6.5" r="6" opacity="0.8" />
                        <circle cx="-7.6" cy="-2.5" r="6" opacity="0.8" />
                        <circle cx="0" cy="0" r="3" />
                    </g>

                    {/* Small buds */}
                    <circle cx="25" cy="130" r="4" opacity="0.6" />
                    <circle cx="5" cy="180" r="3" opacity="0.5" />
                    <circle cx="55" cy="230" r="4" opacity="0.6" />
                    <circle cx="0" cy="30" r="3" opacity="0.5" />
                </g>
            </svg>
        </motion.div>
    );
}

export function BrushStroke({ className = '' }: { className?: string }) {
    return (
        <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className={`origin-left ${className}`}
        >
            <svg viewBox="0 0 200 20" className="w-full h-auto">
                {/* Japanese Paint Brush Stroke */}
                <path
                    d="M5 10 Q15 4, 40 8 Q70 12, 100 9 Q130 6, 160 10 Q180 13, 195 9"
                    stroke="#B84C4C"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.9"
                />
                <path
                    d="M10 12 Q30 16, 60 10 Q90 4, 120 12 Q150 18, 180 12"
                    stroke="#B84C4C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.4"
                />
                {/* Paint splatter */}
                <circle cx="190" cy="14" r="1.5" fill="#B84C4C" opacity="0.6" />
                <circle cx="8" cy="15" r="1" fill="#B84C4C" opacity="0.5" />
            </svg>
        </motion.div>
    );
}
