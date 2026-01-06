'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { ArrowRight, ExternalLink } from 'lucide-react';

const products = [
    {
        id: 'aura',
        name: 'AURA',
        category: 'Mind State Analysis',
        status: 'Alpha',
        statusColor: 'text-[#CF2E2E] border-[#CF2E2E]/30 bg-[#CF2E2E]/10',
        description: 'Non-invasive biometric monitoring for cognitive flow states. AURA uses advanced sensor fusion to detect and optimize your mental clarity without constant screen interaction.',
        features: [
            'Real-time EEG signal processing',
            'Flow state detection algorithm',
            'Distraction pattern recognition',
            'Minimal intervention notifications',
        ],
    },
    {
        id: 'synapse',
        name: 'SYNAPSE',
        category: 'Neural Interface',
        status: 'Development',
        statusColor: 'text-white/50 border-white/20 bg-white/5',
        description: 'Direct neural feedback loops for enhanced focus and creativity. SYNAPSE creates a bridge between cognitive intention and digital action.',
        features: [
            'Intent-based navigation',
            'Cognitive load balancing',
            'Adaptive UI responses',
            'Zero-click interactions',
        ],
    },
    {
        id: 'aeon',
        name: 'AEON',
        category: 'Longevity Model',
        status: 'Concept',
        statusColor: 'text-white/30 border-white/10 bg-white/5',
        description: 'Predictive wellness modeling for extended healthspan optimization. AEON uses longitudinal data patterns to forecast and prevent cognitive decline.',
        features: [
            'Biological age estimation',
            'Cognitive trajectory mapping',
            'Intervention timing optimization',
            'Personalized wellness protocols',
        ],
    },
];

const researchAreas = [
    {
        title: 'Computational Neuroscience',
        description: 'Mapping the neural correlates of attention and flow states.',
    },
    {
        title: 'Edge AI Processing',
        description: 'Local-first algorithms that protect data sovereignty.',
    },
    {
        title: 'Bio-Responsive Design',
        description: 'Interfaces that adapt to physiological signals in real-time.',
    },
];

export default function ProductsPage() {
    return (
        <div className="relative pt-32">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                    <div className="w-[40vh] h-[40vh] border border-white/20 rounded-full" />
                </div>

                <FadeIn className="relative z-10 text-center max-w-4xl">
                    <span className="text-[10px] font-mono text-[#CF2E2E] uppercase tracking-[0.3em] block mb-8">
                        The Lab
                    </span>
                    <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-8">
                        Research & Development
                    </h1>
                    <p className="text-white/50 font-light text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                        We build intelligent systems that retreat. Our products are designed to minimize screen time while maximizing cognitive enhancement.
                    </p>
                </FadeIn>
            </section>

            {/* Products Section */}
            <section className="py-24 md:py-40 px-6 md:px-12 border-t border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <FadeIn className="mb-16">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                            <div>
                                <span className="text-[10px] font-[family-name:var(--font-display)] tracking-[0.2em] uppercase text-white/40 block mb-4">
                                    01 — Active Projects
                                </span>
                                <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-light text-white">
                                    Product Pipeline
                                </h2>
                            </div>
                            <p className="text-white/40 font-mono text-xs uppercase tracking-widest">
                                3 Active · 2 In Development
                            </p>
                        </div>
                    </FadeIn>

                    {/* Product Cards */}
                    <StaggerContainer className="space-y-6">
                        {products.map((product, index) => (
                            <StaggerItem key={product.id}>
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3 }}
                                    className="group border border-white/10 bg-[#0a0a0a] p-8 md:p-12 hover:border-white/20 transition-colors duration-500"
                                >
                                    {/* Header */}
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                                        <div className="flex items-center gap-6">
                                            <span className="text-xs font-mono text-white/30">0{index + 1}</span>
                                            <h3 className="text-3xl md:text-4xl font-light tracking-[0.2em] text-white group-hover:text-[#CF2E2E] transition-colors duration-500">
                                                {product.name}
                                            </h3>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs text-white/40 font-mono">{product.category}</span>
                                            <span className="w-12 h-[1px] bg-white/10" />
                                            <span className={`text-[10px] font-mono border px-3 py-1.5 uppercase ${product.statusColor}`}>
                                                {product.status}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Body */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div>
                                            <p className="text-white/50 font-light text-sm leading-relaxed mb-8">
                                                {product.description}
                                            </p>
                                            {product.status === 'Alpha' && (
                                                <Link
                                                    href="/contact"
                                                    className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest text-white border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors"
                                                >
                                                    Request Access
                                                    <ArrowRight size={12} />
                                                </Link>
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-6">
                                                Key Features
                                            </h4>
                                            <ul className="space-y-3">
                                                {product.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-sm text-white/60 font-light">
                                                        <div className="w-1 h-1 bg-[#CF2E2E] rounded-full" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Research Areas */}
            <section className="py-24 md:py-32 px-6 md:px-12 bg-[#0a0a0a]/50 border-t border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <FadeIn className="mb-16">
                        <span className="text-[10px] font-[family-name:var(--font-display)] tracking-[0.2em] uppercase text-white/40 block mb-4">
                            02 — Research Areas
                        </span>
                        <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-light text-white">
                            Foundational Research
                        </h2>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {researchAreas.map((area) => (
                            <StaggerItem key={area.title}>
                                <div className="group p-8 border border-white/5 hover:border-white/10 transition-colors bg-[#050505]">
                                    <div className="w-8 h-[1px] bg-[#CF2E2E] mb-8 group-hover:w-16 transition-all duration-500" />
                                    <h3 className="text-lg font-light text-white mb-4 tracking-wide">
                                        {area.title}
                                    </h3>
                                    <p className="text-sm text-white/40 font-light leading-relaxed">
                                        {area.description}
                                    </p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Open Source */}
            <section className="py-24 md:py-32 px-6 md:px-12 border-t border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                        <FadeIn className="max-w-xl">
                            <span className="text-[10px] font-[family-name:var(--font-display)] tracking-[0.2em] uppercase text-white/40 block mb-4">
                                03 — Open Source
                            </span>
                            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-light text-white mb-6">
                                Building in Public
                            </h2>
                            <p className="text-white/50 font-light text-sm leading-relaxed">
                                We believe in transparent development. Select components of our research are released as open-source contributions to the scientific community.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 text-white border border-white/20 px-8 py-4 hover:bg-white hover:text-[#050505] transition-all duration-500"
                            >
                                <span className="text-[10px] uppercase tracking-widest">View on GitHub</span>
                                <ExternalLink size={14} />
                            </a>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 md:px-12 bg-[#050505] border-t border-white/10">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-light text-white mb-6">
                            Interested in Collaborating?
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-white/50 font-light text-sm mb-12">
                            We&apos;re always looking for researchers, engineers, and thinkers who share our vision.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-4 bg-white text-[#050505] px-10 py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-white/90 transition-colors"
                        >
                            Get in Touch
                            <ArrowRight size={14} />
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
