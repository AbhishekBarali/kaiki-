'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ScrollIndicator from '@/components/ScrollIndicator';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { ArrowRight, Circle, Infinity as InfinityIcon, Droplets } from 'lucide-react';

const philosophyItems = [
  {
    number: '01',
    title: 'Minimalism',
    subtitle: 'Ma — The Art of Space',
    description: 'We strip away the noise. No addiction loops, no gamification, only clarity. Our interfaces are designed to disappear, leaving room for thought.',
    icon: Circle,
  },
  {
    number: '02',
    title: 'Biological Alignment',
    subtitle: '',
    description: 'Software grounded in biology. Algorithms that respect circadian rhythms and cognitive load. We build for the human animal, not the user metric.',
    icon: InfinityIcon,
  },
  {
    number: '03',
    title: 'Data Sovereignty',
    subtitle: '',
    description: 'The self is sacred. Biometric data is processed locally. We engineer privacy as a fundamental architectural pillar, not a setting.',
    icon: Droplets,
  },
];

const products = [
  {
    name: 'AURA',
    category: 'Mind State Analysis',
    status: 'Alpha',
    statusColor: 'text-[#CF2E2E] border-[#CF2E2E]/30',
    description: 'Non-invasive biometric monitoring for cognitive flow states. Achieving perfect stillness in motion.',
  },
  {
    name: 'SYNAPSE',
    category: 'Neural Interface',
    status: 'Dev',
    statusColor: 'text-white/50 border-white/20',
    description: 'Direct neural feedback loops for enhanced focus and creativity.',
  },
  {
    name: 'AEON',
    category: 'Longevity Model',
    status: 'Concept',
    statusColor: 'text-white/50 border-white/20',
    description: 'Predictive wellness modeling for extended healthspan optimization.',
  },
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.02, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[60vh] h-[60vh] border border-white/10 rounded-full"
          />
          <div className="absolute h-[80vh] w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </div>

        {/* Vertical Text */}
        <div className="absolute left-6 md:left-20 top-1/2 -translate-y-1/2 z-10 hidden md:block">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="writing-vertical text-[10px] tracking-[0.3em] uppercase text-white/30 font-mono"
          >
            System Version 2.0 // Optimizing Self
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="z-10 flex flex-col items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-display)] text-6xl sm:text-8xl md:text-9xl font-light tracking-[1.2em] text-white select-none relative"
          >
            KAIKI
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16 flex flex-col items-center gap-8"
          >
            <div className="h-[60px] w-[1px] bg-[#CF2E2E]/50" />
            <h2 className="text-xs md:text-sm font-mono uppercase tracking-[0.4em] text-white/60">
              AI Intelligence Lab
            </h2>
            <p className="max-w-md text-sm md:text-base font-light leading-relaxed text-white/50 mt-2">
              Engineering silence in a noisy world.
              <br />
              Intelligent tools for biological truth.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12">
          <ScrollIndicator />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-40 md:py-64 px-6 border-t border-white/5" id="philosophy">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Section Label */}
          <div className="md:col-span-2 md:border-r border-white/5 relative hidden md:block">
            <div className="sticky top-32">
              <span className="writing-vertical text-xs font-mono text-[#CF2E2E] uppercase tracking-[0.3em]">
                01 — Philosophy
              </span>
            </div>
          </div>

          <div className="md:col-span-1 hidden md:block" />

          {/* Content */}
          <div className="md:col-span-8 flex flex-col gap-40">
            <FadeIn className="md:ml-[-2rem]">
              <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-8">
                The art of reduction.
                <br />
                <span className="text-white/40">Technology that respects nature.</span>
              </h2>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-32" staggerDelay={0.15}>
              {philosophyItems.map((item, index) => (
                <StaggerItem key={item.title}>
                  <div className={`group ${index === 1 ? 'md:col-start-2' : ''}`}>
                    <div className="flex justify-between items-baseline mb-6">
                      <span className="text-xs font-mono text-[#CF2E2E]">{item.number}</span>
                      {item.subtitle && (
                        <span className="text-[10px] uppercase tracking-widest text-white/40">
                          {item.subtitle}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-normal text-white mb-4 tracking-wide group-hover:translate-x-2 transition-transform duration-500">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-white/50 font-light border-l border-white/10 pl-6 py-2 group-hover:border-[#CF2E2E]/50 transition-colors duration-500">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Products/Lab Section */}
      <section className="relative py-40 md:py-64 bg-[#0a0a0a] border-t border-white/5" id="products">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Section Label */}
          <div className="md:col-span-2 md:border-r border-white/5 relative hidden md:block">
            <div className="sticky top-32">
              <span className="writing-vertical text-xs font-mono text-[#CF2E2E] uppercase tracking-[0.3em]">
                02 — The Lab
              </span>
            </div>
          </div>

          <div className="md:col-span-1 hidden md:block" />

          {/* Content */}
          <div className="md:col-span-9">
            <FadeIn className="mb-32">
              <h2 className="text-4xl md:text-6xl font-extralight text-white tracking-tight mb-4">
                Research & Dev
              </h2>
              <p className="text-white/40 font-mono text-xs uppercase tracking-widest">
                Active Projects
              </p>
            </FadeIn>

            {/* Product List */}
            <div className="space-y-0 border-t border-white/10">
              {products.map((product) => (
                <FadeIn key={product.name}>
                  <div className="group relative py-16 border-b border-white/10 hover:bg-white/[0.02] transition-colors cursor-default">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 px-4">
                      <h3 className="text-3xl font-light tracking-[0.2em] text-white group-hover:text-[#CF2E2E] transition-colors duration-500">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-white/40 font-mono">{product.category}</span>
                        <span className="w-16 h-[1px] bg-white/10" />
                        <span className={`text-[10px] font-mono border px-2 py-1 uppercase ${product.statusColor}`}>
                          {product.status}
                        </span>
                      </div>
                    </div>
                    <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-700 ease-in-out">
                      <p className="pt-6 px-4 text-sm text-white/50 font-light max-w-lg">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* CTA */}
            <FadeIn className="mt-40 pt-16 border-t border-white/5">
              <div className="flex flex-col md:flex-row gap-16 items-start justify-between">
                <div className="max-w-md">
                  <h4 className="text-xl text-white font-light mb-4">Request Access</h4>
                  <p className="text-sm text-white/40 leading-relaxed font-light">
                    Join the waitlist for our upcoming beta releases.
                    <br />
                    We admit new users in small cohorts to ensure stability.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="group flex items-center gap-4 border border-white/10 hover:border-white/30 hover:bg-white/5 px-8 py-4 transition-all duration-500"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white">
                    Request Access
                  </span>
                  <ArrowRight size={14} className="text-white/60 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
