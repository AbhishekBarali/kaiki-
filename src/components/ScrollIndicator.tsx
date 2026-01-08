'use client';

import { motion } from 'framer-motion';

export default function ScrollIndicator() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-col items-center gap-4"
        >
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">
                Scroll
            </span>
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="h-16 w-[1px] bg-gradient-to-b from-white/40 to-transparent"
            />
        </motion.div>
    );
}
