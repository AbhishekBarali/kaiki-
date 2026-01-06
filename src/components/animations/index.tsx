'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface FadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    distance?: number;
    once?: boolean;
}

export function FadeIn({
    children,
    className = '',
    delay = 0,
    duration = 0.6,
    direction = 'up',
    distance = 20,
    once = true,
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: '-50px' });

    const getInitialPosition = () => {
        switch (direction) {
            case 'up':
                return { y: distance };
            case 'down':
                return { y: -distance };
            case 'left':
                return { x: distance };
            case 'right':
                return { x: -distance };
            default:
                return {};
        }
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, ...getInitialPosition() }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...getInitialPosition() }}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}

interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    once?: boolean;
}

export function StaggerContainer({
    children,
    className = '',
    staggerDelay = 0.1,
    once = true,
}: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: '-50px' });

    const containerVariants: Variants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
        >
            {children}
        </motion.div>
    );
}

interface StaggerItemProps {
    children: ReactNode;
    className?: string;
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.div className={className} variants={itemVariants}>
            {children}
        </motion.div>
    );
}

interface ScaleOnHoverProps {
    children: ReactNode;
    className?: string;
    scale?: number;
}

export function ScaleOnHover({ children, className = '', scale = 1.02 }: ScaleOnHoverProps) {
    return (
        <motion.div
            className={className}
            whileHover={{ scale }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
}

interface PageTransitionProps {
    children: ReactNode;
    className?: string;
}

export function PageTransition({ children, className = '' }: PageTransitionProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            {children}
        </motion.div>
    );
}
