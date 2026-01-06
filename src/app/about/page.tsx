'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { ArrowRight } from 'lucide-react';

const missionItems = [
    {
        icon: '○',
        title: 'Minimal Intervention',
        description: 'Our algorithms optimize for "Minimum Effective Dose." We design for the least amount of screen time required to achieve maximum cognitive expansion.',
    },
    {
        icon: '∞',
        title: 'Sovereign Data',
        description: 'Your neural data stays on the edge. We utilize local-first processing to ensure your psychological profile never leaves your personal device.',
    },
    {
        icon: '◉',
        title: 'Fluid Interface',
        description: 'Interfaces that behave like water. Adaptive, formless, and responsive to your emotional state, disappearing when no longer needed.',
    },
];

export default function AboutPage() {
    return (
        <div className="relative pt-32">
            {/* Hero Section */}
            <section className="w-full min-h-[90vh] flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                    <span className="font-[family-name:var(--font-display)] text-[25vw] text-white/[0.02] select-none leading-none tracking-widest font-bold">
                        KAIKI
                    </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                    <div className="w-[60vh] h-[60vh] border border-white/[0.03] rounded-full" />
                    <div className="w-[40vh] h-[40vh] border border-white/[0.05] rounded-full absolute" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[100vh] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">
                    <FadeIn>
                        <div className="flex flex-col items-center gap-4 mb-8">
                            <div className="w-[1px] h-12 bg-white/30" />
                            <span className="font-[family-name:var(--font-display)] text-[10px] tracking-[0.4em] text-white/50 uppercase">
                                The Architecture of Self
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h1 className="font-[family-name:var(--font-display)] font-light text-5xl md:text-7xl lg:text-9xl leading-none tracking-tight text-white text-glow mb-10">
                            STILLNESS
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="text-white/50 font-light text-sm md:text-base max-w-lg leading-loose tracking-wide">
                            In an era of digital noise, KAIKI builds intelligent systems designed to retreat. We engineer AI that restores your cognitive sovereignty.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="mt-16">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                className="w-3 h-3 border border-white/30"
                                style={{ transform: 'rotate(45deg)' }}
                            />
                        </div>
                    </FadeIn>
                </div>

                {/* Vertical Text */}
                <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 hidden lg:block">
                    <FadeIn delay={0.7}>
                        <p className="writing-vertical font-[family-name:var(--font-display)] text-[10px] tracking-[0.3em] text-white/20 uppercase">
                            Tokyo / San Francisco
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Philosophy Quote Section */}
            <section className="w-full py-24 md:py-40 px-6 md:px-12 border-t border-white/5 relative">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative">
                    <div className="absolute left-[33.33%] top-0 bottom-0 w-[1px] bg-white/5 hidden md:block" />

                    {/* Left Column */}
                    <div className="md:col-span-4 flex flex-col justify-between h-full pr-8">
                        <FadeIn>
                            <div>
                                <span className="text-[10px] font-[family-name:var(--font-display)] tracking-[0.2em] uppercase text-white/40 block mb-6">
                                    01 — Philosophy
                                </span>
                                <h2 className="text-3xl font-[family-name:var(--font-display)] font-light text-white mb-2">
                                    Ma — The Art of Space
                                </h2>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2} className="hidden md:block mt-24">
                            <div className="w-full aspect-square border border-white/10 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-700" />
                                <div className="w-[1px] h-full bg-white/10 group-hover:h-1/2 transition-all duration-700" />
                                <div className="h-[1px] w-full bg-white/10 absolute group-hover:w-1/2 transition-all duration-700" />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column */}
                    <div className="md:col-span-8 md:pl-16 flex flex-col justify-center">
                        <FadeIn delay={0.3}>
                            <blockquote className="text-2xl md:text-4xl leading-relaxed text-white/90 font-light italic">
                                &ldquo;Technology should not demand your attention, it should reward your intention. We create tools that act as a mirror, reflecting your own clarity back to you.&rdquo;
                            </blockquote>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="mt-12 flex items-center gap-4">
                                <div className="h-[1px] w-12 bg-[#CF2E2E]" />
                                <span className="text-xs font-[family-name:var(--font-display)] tracking-widest uppercase text-white">
                                    Abhishek Barali
                                </span>
                                <span className="text-xs text-white/50 font-light">— Lead Architect</span>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="w-full py-24 md:py-32 px-6 md:px-12 bg-[#0a0a0a]/30 border-t border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
                        <FadeIn>
                            <div>
                                <span className="text-[10px] font-[family-name:var(--font-display)] tracking-[0.2em] uppercase text-white/40 block mb-4">
                                    02 — Mission
                                </span>
                                <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-display)] font-light text-white tracking-tight">
                                    Essentialism via AI
                                </h2>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <p className="text-white/50 font-light text-sm max-w-sm text-right leading-relaxed">
                                Stripping away the superfluous to reveal the essential architecture of human potential.
                            </p>
                        </FadeIn>
                    </div>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                        {missionItems.map((item) => (
                            <StaggerItem key={item.title}>
                                <div className="bg-[#050505] p-12 hover:bg-[#080808] transition-colors duration-700 group relative overflow-hidden h-[400px] flex flex-col justify-between">
                                    <span className="text-white/50 text-3xl font-light group-hover:text-white transition-colors duration-500">
                                        {item.icon}
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-[family-name:var(--font-display)] text-white mb-4 tracking-wide group-hover:translate-x-2 transition-transform duration-500">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/50 font-light text-xs leading-loose border-l border-white/20 pl-4">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Interlude */}
            <section className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden flex items-center justify-center bg-[#050505] border-y border-white/5">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#CF2E2E]/10 via-transparent to-transparent" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
                <div className="relative z-10 text-center px-6">
                    <div className="w-[1px] h-24 bg-white mx-auto mb-8" />
                    <h2 className="text-6xl md:text-8xl font-[family-name:var(--font-display)] font-light leading-none tracking-tighter text-white opacity-90 uppercase">
                        NO MIND
                    </h2>
                </div>
            </section>

            {/* Founder Section */}
            <section className="w-full py-32 px-6 md:px-12 relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-24 items-center">
                    {/* Image */}
                    <FadeIn className="w-full md:w-5/12 relative group">
                        <div className="aspect-[3/4] relative overflow-hidden bg-[#111] border border-white/5 flex items-center justify-center">
                            <span className="font-[family-name:var(--font-display)] text-8xl text-white/5 font-light tracking-tighter select-none">
                                AB
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/20 to-transparent" />
                        </div>
                        <div className="absolute -right-4 top-12 bg-[#050505] border border-white/20 py-4 px-2 writing-vertical hidden md:block">
                            <span className="text-[10px] tracking-widest text-white uppercase">Founder</span>
                        </div>
                    </FadeIn>

                    {/* Bio */}
                    <div className="w-full md:w-7/12 flex flex-col justify-center">
                        <FadeIn>
                            <span className="text-[10px] font-[family-name:var(--font-display)] tracking-[0.2em] uppercase text-white/40 block mb-8">
                                03 — Leadership
                            </span>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-light text-white mb-8 leading-tight">
                                Calculating the <br />
                                <span className="italic text-white/50">immeasurable.</span>
                            </h3>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="space-y-6 text-sm font-light text-white/50 leading-loose max-w-md">
                                <p>
                                    Abhishek Barali founded KAIKI on a simple premise: human consciousness is not a resource to be mined, but a garden to be tended.
                                </p>
                                <p>
                                    Merging the precision of computational neuroscience with the philosophy of Zen minimalism, he directs the lab towards a future where technology is felt, not seen.
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3} className="pt-12">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-4 text-white text-[10px] uppercase tracking-widest group"
                            >
                                <div className="h-[1px] w-8 bg-white group-hover:w-12 transition-all duration-300" />
                                Get in Touch
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-32 border-t border-white/10 bg-[#050505] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="max-w-4xl mx-auto text-center px-6 z-10 relative">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-display)] font-light text-white mb-6">
                            Begin Calibration
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-white/50 font-light text-sm tracking-wide mb-12">
                            Join the select few defining the future of wellness.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                            <Link
                                href="/contact"
                                className="bg-white text-[#050505] border border-white px-10 py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-transparent hover:text-white transition-all duration-300 min-w-[200px]"
                            >
                                Request Access
                            </Link>
                            <Link
                                href="/contact"
                                className="text-white border border-white/20 px-10 py-4 text-[10px] font-bold tracking-widest uppercase hover:border-white transition-all duration-300 min-w-[200px]"
                            >
                                Contact Labs
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
