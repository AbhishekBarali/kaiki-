'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { ArrowRight, ExternalLink, MessageSquare, Users, BookOpen, Brain, Code2, Zap } from 'lucide-react';

const baraliFeatures = [
    {
        icon: MessageSquare,
        title: 'Character Creation',
        description: 'Design and customize AI personas with unique personalities, voices, and behaviors. Build the perfect AI companion for any use case.',
    },
    {
        icon: Users,
        title: 'Character Sharing',
        description: 'Share your characters with the community and discover creations from other users. A growing ecosystem of AI personalities.',
    },
    {
        icon: BookOpen,
        title: 'Dynamic Story Mode',
        description: 'Multiple AI characters interact in dynamic narratives. Create immersive storytelling experiences with AI-driven drama.',
    },
    {
        icon: Brain,
        title: 'Council of Thoughts',
        description: 'Multiple AIs collaborate to solve complex problems. Get diverse perspectives and synthesized insights from your AI council.',
    },
];

const services = [
    {
        id: 'ai-development',
        name: 'AI Development',
        category: 'Custom Solutions',
        status: 'Active',
        statusColor: 'text-[#B84C4C] border-[#B84C4C]/30 bg-[#B84C4C]/10',
        icon: Brain,
        description: 'Custom AI solutions tailored to your business needs. From intelligent chatbots to complex automation pipelines, we build AI that actually works.',
        features: [
            'Custom LLM integrations',
            'Intelligent chatbots & assistants',
            'AI-powered data analysis',
            'Workflow automation',
        ],
    },
    {
        id: 'web-apps',
        name: 'Web Applications',
        category: 'Development',
        status: 'Active',
        statusColor: 'text-[#B84C4C] border-[#B84C4C]/30 bg-[#B84C4C]/10',
        icon: Code2,
        description: 'Modern, responsive web applications built with cutting-edge technologies. Fast, secure, and scalable solutions for the modern web.',
        features: [
            'React / Next.js development',
            'Full-stack applications',
            'API development & integration',
            'Cloud deployment & scaling',
        ],
    },
    {
        id: 'automation',
        name: 'AI Automation',
        category: 'Efficiency',
        status: 'Active',
        statusColor: 'text-[#B84C4C] border-[#B84C4C]/30 bg-[#B84C4C]/10',
        icon: Zap,
        description: 'Streamline your workflows with intelligent automation. Let AI handle the repetitive tasks so you can focus on what matters.',
        features: [
            'Process automation',
            'AI-powered workflows',
            'Integration pipelines',
            'Scheduled tasks & triggers',
        ],
    },
];

export default function ProductsPage() {
    const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

    const toggleFeature = (index: number) => {
        setExpandedFeature(expandedFeature === index ? null : index);
    };

    return (
        <div className="relative pt-32">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden">

                <FadeIn className="relative z-10 text-center max-w-4xl">
                    <span className="text-xs font-mono text-[#B84C4C] uppercase tracking-[0.3em] block mb-8">
                        Products & Services
                    </span>
                    <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-8">
                        What We Build
                    </h1>
                    <p className="text-white/80 font-normal text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                        From AI-powered platforms to custom software solutions, we craft intelligent tools that solve real problems.
                    </p>
                </FadeIn>
            </section>

            {/* Barali Chat Featured Section */}
            <section className="py-24 md:py-32 px-6 md:px-12 border-t border-white/5 bg-gradient-to-b from-transparent to-[#0a0a0a]/50">
                <div className="max-w-[1400px] mx-auto">
                    <FadeIn className="mb-16">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                            <div>
                                <span className="text-xs font-[family-name:var(--font-display)] tracking-[0.2em] uppercase text-white/60 block mb-4">
                                    01 — Featured Product
                                </span>
                                <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-display)] font-light text-white flex items-center gap-4">
                                    BARALI CHAT
                                    <span className="text-emerald-400 text-xs font-mono border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 uppercase">Live</span>
                                </h2>
                            </div>
                            <Link
                                href="https://barali.tech"
                                target="_blank"
                                className="group inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 text-xs uppercase tracking-widest font-medium hover:border-[#B84C4C] hover:text-[#B84C4C] transition-all duration-300"
                            >
                                Visit barali.tech
                                <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>
                    </FadeIn>

                    <FadeIn className="mb-16">
                        <div className="border border-white/10 bg-[#0a0a0a] p-8 md:p-12">
                            <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-3xl mb-8">
                                Your AI, your rules. Barali Chat is a BYOK (Bring Your Own Key) AI chat platform that puts you in complete control.
                                Create characters, share with the community, and experience AI like never before.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <span className="text-xs font-mono text-white/60 border border-white/20 px-4 py-2">BYOK Architecture</span>
                                <span className="text-xs font-mono text-white/60 border border-white/20 px-4 py-2">Privacy First</span>
                                <span className="text-xs font-mono text-white/60 border border-white/20 px-4 py-2">Multi-Model Support</span>
                                <span className="text-xs font-mono text-white/60 border border-white/20 px-4 py-2">Community Driven</span>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Feature Cards - Click to reveal description */}
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {baraliFeatures.map((feature, index) => (
                            <StaggerItem key={feature.title}>
                                <motion.div
                                    onClick={() => toggleFeature(index)}
                                    className="p-8 md:p-10 border border-white/10 bg-[#050505] transition-all duration-500 relative overflow-hidden cursor-pointer hover:border-white/20 hover:bg-[#0a0a0a]"
                                    whileHover={{ y: -2 }}
                                >
                                    <div className="relative">
                                        <feature.icon size={22} className="text-[#B84C4C] mb-5" />
                                        <h3 className="text-lg font-medium text-white mb-3 tracking-wide">
                                            {feature.title}
                                        </h3>
                                        <AnimatePresence>
                                            {expandedFeature === index && (
                                                <motion.p
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                                    className="text-sm text-white/80 leading-relaxed overflow-hidden"
                                                >
                                                    {feature.description}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                        {expandedFeature !== index && (
                                            <p className="text-xs text-white/50 mt-2">Click to learn more</p>
                                        )}
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 md:py-32 px-6 md:px-12 border-t border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <FadeIn className="mb-16">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                            <div>
                                <span className="text-xs font-[family-name:var(--font-display)] tracking-[0.2em] uppercase text-white/60 block mb-4">
                                    02 — Services
                                </span>
                                <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-light text-white">
                                    Development Services
                                </h2>
                            </div>
                            <p className="text-white/70 font-mono text-sm uppercase tracking-widest">
                                Custom Solutions
                            </p>
                        </div>
                    </FadeIn>

                    {/* Service Cards */}
                    <StaggerContainer className="space-y-6">
                        {services.map((service, index) => (
                            <StaggerItem key={service.id}>
                                <motion.div
                                    transition={{ duration: 0.5 }}
                                    className="border border-white/10 bg-[#0a0a0a] p-6 md:p-8 transition-colors duration-700"
                                >
                                    {/* Header */}
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs font-mono text-white/50">0{index + 1}</span>
                                            <service.icon size={20} className="text-[#B84C4C]" />
                                            <h3 className="text-xl md:text-2xl font-light tracking-[0.05em] text-white">
                                                {service.name}
                                            </h3>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs text-white/60 font-mono">{service.category}</span>
                                            <span className="w-8 h-[1px] bg-white/20" />
                                            <span className={`text-[10px] font-mono border px-2 py-1 uppercase ${service.statusColor}`}>
                                                {service.status}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Body */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <p className="text-white/80 font-normal text-sm leading-relaxed mb-6">
                                                {service.description}
                                            </p>
                                            <Link
                                                href="/contact"
                                                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white border border-white/30 px-5 py-2.5 hover:border-[#B84C4C] hover:text-[#B84C4C] transition-all duration-500"
                                            >
                                                Get Started
                                                <ArrowRight size={12} />
                                            </Link>
                                        </div>
                                        <div>
                                            <h4 className="text-xs uppercase tracking-widest text-white/60 mb-4">
                                                What&apos;s Included
                                            </h4>
                                            <ul className="space-y-3">
                                                {service.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-sm text-white/80 font-normal">
                                                        <div className="w-1.5 h-1.5 bg-[#B84C4C] rounded-full" />
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

            {/* CTA */}
            <section className="py-32 px-6 md:px-12 bg-[#050505] border-t border-white/10 relative overflow-hidden">

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-display)] font-light text-white mb-6">
                            Ready to Build Something?
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-white/70 font-normal text-sm mb-12 max-w-lg mx-auto">
                            Whether you need an AI solution, a web app, or just want to explore possibilities—let&apos;s talk.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-4 bg-white text-[#050505] px-10 py-4 text-xs font-medium tracking-widest uppercase hover:bg-[#B84C4C] hover:text-white transition-all duration-300"
                            >
                                Start a Project
                                <ArrowRight size={14} />
                            </Link>
                            <Link
                                href="https://barali.tech"
                                target="_blank"
                                className="inline-flex items-center gap-4 border border-white/20 text-white px-10 py-4 text-xs tracking-widest uppercase hover:border-[#B84C4C] hover:text-[#B84C4C] transition-all duration-300"
                            >
                                Try Barali Chat
                                <ExternalLink size={14} />
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
