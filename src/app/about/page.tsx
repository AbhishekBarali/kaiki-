'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { ArrowRight, ExternalLink } from 'lucide-react';

const missionItems = [
    {
        number: '01',
        title: 'Simplicity',
        description: 'We believe the best software is invisible. Clean interfaces, intuitive experiences, and systems that just work. No bloat, no unnecessary complexity.',
    },
    {
        number: '02',
        title: 'Craftsmanship',
        description: 'Every line of code is written with intention. We approach software development as a craft, not a commodity. Quality and reliability, always.',
    },
    {
        number: '03',
        title: 'Efficiency',
        description: 'Automate the mundane, amplify the meaningful. We build tools that eliminate repetitive tasks and free up your time for what truly matters.',
    },
];

const values = [
    { title: 'Automation First', desc: 'We eliminate boring, repetitive work through intelligent systems.' },
    { title: 'User-Centric Design', desc: 'Technology should adapt to humans, not the other way around.' },
    { title: 'Transparent Process', desc: 'Clear communication, honest timelines, no surprises.' },
    { title: 'Continuous Innovation', desc: 'We stay ahead of the curve so our clients don\'t have to.' },
];

// Mobile accordion card for principles
function PrincipleCard({ item }: { item: { number: string; title: string; description: string } }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            {/* Mobile: Clean minimal row */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full py-4 border-b border-white/10 text-left"
                >
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-mono text-[#B84C4C]">{item.number}</span>
                            <h3 className={`text-sm sm:text-base font-normal tracking-wide transition-colors duration-300 ${isExpanded ? 'text-[#B84C4C]' : 'text-white'}`}>
                                {item.title}
                            </h3>
                        </div>
                        <div className="relative w-4 h-4 flex items-center justify-center shrink-0">
                            <span className={`absolute w-3 h-[1.5px] bg-white/40 transition-all duration-300 ${isExpanded ? 'bg-[#B84C4C]' : ''}`} />
                            <span className={`absolute w-[1.5px] h-3 bg-white/40 transition-all duration-300 ${isExpanded ? 'opacity-0 rotate-90' : 'opacity-100'}`} />
                        </div>
                    </div>
                </button>
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                            className="overflow-hidden"
                        >
                            <p className="py-4 text-sm leading-relaxed text-white/80 border-b border-white/10">
                                {item.description}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Desktop: Large card */}
            <div className="hidden md:flex bg-[#050505] p-12 transition-colors duration-700 relative overflow-hidden h-[400px] flex-col justify-between">
                <div className="flex items-start justify-between">
                    <span className="text-3xl font-[family-name:var(--font-display)] text-[#B84C4C]/30">
                        {item.number}
                    </span>
                </div>
                <div>
                    <h3 className="text-xl font-[family-name:var(--font-display)] text-white mb-4 tracking-wide">
                        {item.title}
                    </h3>
                    <p className="text-white/90 font-normal text-base leading-loose border-l border-[#B84C4C]/50 pl-4">
                        {item.description}
                    </p>
                </div>
            </div>
        </>
    );
}

export default function AboutPage() {
    return (
        <div className="relative pt-32">
            {/* Hero Section */}
            <section className="w-full min-h-[80vh] flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.02 }}
                        transition={{ duration: 2 }}
                        className="font-[family-name:var(--font-display)] text-[20vw] text-white select-none leading-none tracking-[0.2em]"
                    >
                        KAIKI
                    </motion.span>
                </div>


                {/* Content */}
                <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">
                    <FadeIn>
                        <div className="flex flex-col items-center gap-4 mb-8">
                            <span className="font-[family-name:var(--font-display)] text-[10px] tracking-[0.4em] text-white/50 uppercase">
                                About KAIKI
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h1 className="font-[family-name:var(--font-display)] font-light text-4xl md:text-6xl lg:text-8xl leading-none tracking-tight text-white text-glow mb-10">
                            Software as Craft
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="text-white/80 font-normal text-base md:text-lg max-w-lg leading-loose tracking-wide">
                            KAIKI is an AI-focused software development studio. We build intelligent applications,
                            automation tools, and digital experiences that help businesses and individuals do more with less.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="mt-12 flex items-center gap-4">
                            <div className="h-[1px] w-12 bg-[#B84C4C]" />
                            <span className="text-xs font-mono text-white/50">Est. 2025</span>
                            <div className="h-[1px] w-12 bg-[#B84C4C]" />
                        </div>
                    </FadeIn>
                </div>


            </section>

            {/* Mission Quote Section */}
            <section className="w-full py-24 md:py-40 px-6 md:px-12 border-t border-white/5 relative">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative">
                    <div className="absolute left-[33.33%] top-0 bottom-0 w-[1px] bg-white/5 hidden md:block" />

                    {/* Left Column */}
                    <div className="md:col-span-4 flex flex-col justify-between h-full pr-8">
                        <FadeIn>
                            <div>
                                <span className="text-xs font-[family-name:var(--font-display)] tracking-[0.2em] uppercase text-white/60 block mb-6">
                                    01 — Our Belief
                                </span>
                                <h2 className="text-3xl font-[family-name:var(--font-display)] font-light text-white mb-2">
                                    The Way of Software
                                </h2>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2} className="hidden md:block mt-24">
                            <div className="w-full aspect-square border border-white/10 relative overflow-hidden group bg-[#0a0a0a]">
                                <Image
                                    src="/images/bw-flower.png"
                                    alt="Aesthetic flower"
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                                />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column */}
                    <div className="md:col-span-8 md:pl-16 flex flex-col justify-center">
                        <FadeIn delay={0.3}>
                            <blockquote className="text-2xl md:text-3xl leading-relaxed text-white font-normal">
                                &ldquo;We believe technology should amplify human potential, not replace it.
                                Our mission is to build intelligent tools that feel like natural extensions
                                of human thought—powerful yet intuitive, complex yet elegant.&rdquo;
                            </blockquote>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="mt-12 flex items-center gap-4">
                                <div className="h-[1px] w-12 bg-[#B84C4C]" />
                                <span className="text-xs font-[family-name:var(--font-display)] tracking-widest uppercase text-white">
                                    KAIKI Studio
                                </span>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="w-full py-24 md:py-32 px-6 md:px-12 bg-[#0a0a0a]/30 border-t border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
                        <FadeIn>
                            <div>
                                <span className="text-xs font-[family-name:var(--font-display)] tracking-[0.2em] uppercase text-white/60 block mb-4">
                                    02 — Philosophy
                                </span>
                                <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-display)] font-light text-white tracking-tight">
                                    Our Principles
                                </h2>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <p className="text-white/80 font-normal text-sm max-w-sm text-right leading-relaxed">
                                Inspired by craftsmanship. Built with modern tools.
                            </p>
                        </FadeIn>
                    </div>

                    {/* Mobile: Accordion list */}
                    <div className="md:hidden space-y-2">
                        {missionItems.map((item) => (
                            <FadeIn key={item.title}>
                                <PrincipleCard item={item} />
                            </FadeIn>
                        ))}
                    </div>

                    {/* Desktop: Grid */}
                    <StaggerContainer className="hidden md:grid grid-cols-3 gap-px bg-white/10 border border-white/10">
                        {missionItems.map((item) => (
                            <StaggerItem key={item.title}>
                                <PrincipleCard item={item} />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Values Section */}
            <section className="w-full py-24 md:py-32 px-6 md:px-12 border-t border-white/5">
                <div className="max-w-[1200px] mx-auto">
                    <FadeIn className="mb-16 text-center">
                        <span className="text-xs font-[family-name:var(--font-display)] tracking-[0.2em] uppercase text-white/60 block mb-4">
                            03 — What We Stand For
                        </span>
                        <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-light text-white">
                            Our Values
                        </h2>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, i) => (
                            <StaggerItem key={value.title}>
                                <motion.div
                                    className="p-8 border border-white/5 transition-all duration-500 bg-[#0a0a0a]/50"
                                >
                                    <div className="flex items-start gap-6">
                                        <span className="text-sm font-mono text-[#B84C4C]">0{i + 1}</span>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-medium text-white mb-3">
                                                {value.title}
                                            </h3>
                                            <p className="text-sm sm:text-base text-white/80">{value.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Featured Product Mention */}
            <section className="w-full py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-[#050505] to-[#0a0a0a] border-t border-white/5">
                <div className="max-w-[1200px] mx-auto">
                    <FadeIn>
                        <div className="border border-white/10 p-8 md:p-12 bg-[#0a0a0a]/50 relative overflow-hidden">
                            <span className="absolute top-8 right-8 text-6xl font-mono text-white/[0.03]">*</span>

                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                                <div>
                                    <span className="text-emerald-400 text-xs font-mono border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 uppercase mb-4 inline-block">Live Product</span>
                                    <h3 className="text-2xl md:text-3xl font-light text-white mb-4">Barali Chat</h3>
                                    <p className="text-white/90 text-base max-w-lg leading-relaxed">
                                        Our flagship AI chat platform. BYOK architecture, character creation,
                                        story mode, and Council of Thoughts—all built with privacy in mind.
                                    </p>
                                </div>
                                <Link
                                    href="https://barali.tech"
                                    target="_blank"
                                    className="group inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 text-xs uppercase tracking-widest font-medium hover:border-[#B84C4C] hover:text-[#B84C4C] transition-all duration-300 shrink-0"
                                >
                                    Visit barali.tech
                                    <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-32 border-t border-white/10 bg-[#050505] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="max-w-4xl mx-auto text-center px-6 z-10 relative">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-display)] font-light text-white mb-6">
                            Let&apos;s Build Together
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-white/80 font-normal text-base tracking-wide mb-12">
                            Have a project in mind? We&apos;d love to hear about it.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                            <Link
                                href="/contact"
                                className="bg-white text-[#050505] border border-white px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#B84C4C] hover:border-[#B84C4C] hover:text-white transition-all duration-300 min-w-[200px] text-center"
                            >
                                Start a Project
                            </Link>
                            <Link
                                href="/products"
                                className="text-white border border-white/20 px-10 py-4 text-xs font-bold tracking-widest uppercase hover:border-[#B84C4C] hover:text-[#B84C4C] transition-all duration-300 min-w-[200px] flex items-center justify-center gap-3"
                            >
                                View Our Work
                                <ArrowRight size={12} />
                            </Link>
                        </div>
                    </FadeIn>
                </div>
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />
            </section>
        </div>
    );
}
