'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ScrollIndicator from '@/components/ScrollIndicator';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { ArrowRight, Code2, Sparkles, Shield, Braces, Terminal, Cpu } from 'lucide-react';

const philosophyItems = [
  {
    number: '01',
    title: 'Reclaim Your Time',
    description: 'Automate repetitive tasks so your team can focus on high-impact work that drives growth.',
    icon: Code2,
  },
  {
    number: '02',
    title: 'Measurable Results',
    description: 'Every solution we build is designed to deliver tangible ROI—real cost savings and efficiency gains you can track.',
    icon: Sparkles,
  },
  {
    number: '03',
    title: 'Enterprise Quality, Fair Pricing',
    description: 'Get the same powerful automation tools that large companies use—priced right for growing businesses.',
    icon: Shield,
  },
  {
    number: '04',
    title: 'Tailored to Your Workflow',
    description: 'No one-size-fits-all solutions. We build custom automation that fits seamlessly into how you already work.',
    icon: Braces,
  },
];

const services = [
  {
    name: 'AI PRODUCTS',
    category: 'Platforms',
    status: 'Active',
    statusColor: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
    description: 'Ready-to-use AI tools that solve real business problems. No complexity, just results.',
  },
  {
    name: 'AUTOMATION',
    category: 'Services',
    status: 'Active',
    statusColor: 'text-[#B84C4C] border-[#B84C4C]/30',
    description: 'Eliminate repetitive tasks and free up your team. Custom automation tailored to your workflows.',
  },
  {
    name: 'AI INTEGRATION',
    category: 'Services',
    status: 'Active',
    statusColor: 'text-[#B84C4C] border-[#B84C4C]/30',
    description: 'Add AI capabilities to your existing systems. Smart assistants, data analysis, and more.',
  },
];

// Service type for the accordion
type Service = {
  name: string;
  category: string;
  status: string;
  statusColor: string;
  description: string;
};

// Click-based accordion component with smooth animations
function ServiceAccordion({ services }: { services: Service[] }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-0 border-t border-white/10">
      {services.map((service, index) => (
        <FadeIn key={service.name}>
          <div className="relative border-b border-white/10">
            {/* Clickable Header */}
            <button
              onClick={() => toggleService(index)}
              className="w-full py-6 sm:py-8 md:py-10 px-2 sm:px-4 text-left cursor-pointer transition-colors duration-500 hover:bg-white/[0.02]"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-4">
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-light tracking-[0.1em] sm:tracking-[0.15em] transition-colors duration-500 ${expandedIndex === index ? 'text-[#B84C4C]' : 'text-white'}`}>
                    {service.name}
                  </h3>
                  {/* Minimal plus/minus indicator */}
                  <div className="relative w-4 h-4 flex items-center justify-center">
                    <span className={`absolute w-3 h-[1.5px] bg-white/40 transition-all duration-500 ${expandedIndex === index ? 'bg-[#B84C4C]/60' : ''}`} />
                    <span className={`absolute w-[1.5px] h-3 bg-white/40 transition-all duration-500 ${expandedIndex === index ? 'opacity-0 rotate-90 bg-[#B84C4C]/60' : 'opacity-100'}`} />
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-xs sm:text-sm text-white/60 font-mono">{service.category}</span>
                  <span className="w-8 sm:w-12 h-[1px] bg-white/20" />
                  <span className={`text-xs font-mono border px-2 py-1 uppercase ${service.statusColor}`}>
                    {service.status}
                  </span>
                </div>
              </div>
            </button>

            {/* Expandable Content with smooth animation */}
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-2 sm:px-4 pb-6 sm:pb-8 text-sm sm:text-base text-white/80 font-normal max-w-lg">
                    {service.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

// Philosophy card with mobile accordion
type PhilosophyItem = {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

function PhilosophyCard({ item }: { item: PhilosophyItem }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="md:p-0 md:bg-transparent md:border-0">
      {/* Mobile: Clean minimal row */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left md:hidden py-4 border-b border-white/10"
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

      {/* Desktop header - not clickable */}
      <div className="hidden md:block">
        <div className="flex justify-between items-baseline mb-4 relative">
          <span className="text-sm font-mono text-[#B84C4C]">{item.number}</span>
        </div>
        <h3 className="text-2xl font-normal text-white mb-4 tracking-wide">
          {item.title}
        </h3>
        <p className="text-base leading-7 text-white/80 font-normal border-l border-[#B84C4C]/50 pl-6 py-2">
          {item.description}
        </p>
      </div>

      {/* Mobile accordion */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden md:hidden"
          >
            <p className="text-sm leading-relaxed text-white/80 font-normal pt-2 pb-4">
              {item.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6">

        {/* Animated Geometric Elements - Hidden on very small screens for cleaner look */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none hidden sm:flex">
          <motion.div
            animate={{ scale: [1, 1.02, 1], opacity: [0.4, 0.6, 0.4], rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="w-[50vw] md:w-[60vh] h-[50vw] md:h-[60vh] border border-white/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[35vw] md:w-[40vh] h-[35vw] md:h-[40vh] border border-[#B84C4C]/20 rounded-full"
          />
        </div>

        {/* Vertical Text */}
        <div className="absolute left-6 md:left-20 top-1/2 -translate-y-1/2 z-10 hidden md:block">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="writing-vertical text-xs tracking-[0.3em] uppercase text-white/50 font-mono"
          >
            Software Studio // 2025
          </motion.div>
        </div>



        {/* Main Content */}
        <div className="z-10 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-4xl">
          {/* KAIKI Logo - compensate for letter-spacing visual offset */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-display)] text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-normal tracking-[0.15em] sm:tracking-[0.3em] md:tracking-[0.5em] lg:tracking-[0.8em] text-white select-none relative pl-[0.15em] sm:pl-[0.3em] md:pl-[0.5em] lg:pl-[0.8em]"
          >
            KAIKI
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 sm:mt-12 md:mt-16 flex flex-col items-center gap-4 sm:gap-6 w-full"
          >
            {/* Tagline */}
            <h2 className="text-base sm:text-lg md:text-2xl font-light text-white tracking-wide text-center">
              Intelligent Automation for Growing Businesses
            </h2>

            <p className="max-w-md sm:max-w-lg text-base md:text-lg font-normal leading-relaxed text-white/90 mt-2 sm:mt-3 px-2 text-center">
              AI tools that actually work for your business.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Save time. Cut costs.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto px-4 sm:px-0"
            >
              <Link
                href="/products"
                className="group flex items-center justify-center gap-3 bg-white text-[#050505] px-6 sm:px-8 py-3 sm:py-4 text-xs uppercase tracking-widest font-medium hover:bg-[#B84C4C] hover:text-white transition-all duration-300 w-full sm:w-auto"
              >
                Explore Our Work
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 text-xs uppercase tracking-widest hover:border-[#B84C4C] hover:text-[#B84C4C] transition-all duration-300 w-full sm:w-auto"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-12">
          <ScrollIndicator />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-16 sm:py-24 md:py-32 lg:py-48 px-4 sm:px-6 border-t border-white/5" id="philosophy">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Section Label */}
          <div className="md:col-span-2 md:border-r border-white/5 relative hidden md:block">
            <div className="sticky top-32">
              <span className="writing-vertical text-xs font-mono text-[#B84C4C] uppercase tracking-[0.3em]">
                01 — Philosophy
              </span>
            </div>
          </div>

          <div className="md:col-span-1 hidden md:block" />

          {/* Content */}
          <div className="md:col-span-8 flex flex-col gap-12 sm:gap-20 md:gap-32">
            <FadeIn className="md:ml-[-2rem]">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight mb-4 sm:mb-6 md:mb-8">
                Work smarter, not harder.
                <br />
                <span className="text-white/60">Automation that delivers.</span>
              </h2>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-x-24 md:gap-y-20" staggerDelay={0.15}>
              {philosophyItems.map((item) => (
                <StaggerItem key={item.title}>
                  <PhilosophyCard item={item} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="relative py-16 sm:py-24 md:py-32 lg:py-48 bg-gradient-to-b from-[#0a0a0a] to-[#050505] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-10 sm:mb-16 md:mb-20">
            <span className="text-sm font-mono text-[#B84C4C] uppercase tracking-[0.2em] sm:tracking-[0.3em] block mb-3 sm:mb-4">
              What We Build
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-4 sm:mb-6">
              Intelligent Solutions
            </h2>
            <p className="text-white/80 font-normal text-base sm:text-lg max-w-md sm:max-w-xl mx-auto leading-relaxed px-2">
              Custom-built AI tools and automation that help ambitious businesses scale efficiently.
            </p>
          </FadeIn>

          {/* Service Icons */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-16">
            {[
              { title: 'AI Products', desc: 'Ready-to-use intelligent tools', icon: Cpu },
              { title: 'Automation', desc: 'Eliminate repetitive tasks', icon: Braces },
              { title: 'Integration', desc: 'Add AI to your systems', icon: Terminal },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  className="group p-6 sm:p-8 md:p-10 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 relative overflow-hidden text-center"
                  whileHover={{ y: -4 }}
                >
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#B84C4C]/80 mx-auto mb-4 sm:mb-6 group-hover:text-[#B84C4C] transition-colors" />
                  <h4 className="text-base sm:text-lg font-medium text-white mb-2 tracking-wide">{item.title}</h4>
                  <p className="text-sm text-white/70">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center">
            <Link
              href="/products"
              className="group inline-flex items-center gap-4 border border-white/20 text-white px-10 py-4 text-xs uppercase tracking-widest font-medium hover:border-[#B84C4C] hover:text-[#B84C4C] transition-all duration-300"
            >
              View Our Lab
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 sm:py-24 md:py-32 lg:py-48 border-t border-white/5" id="services">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12">
          {/* Section Label */}
          <div className="md:col-span-2 md:border-r border-white/5 relative hidden md:block">
            <div className="sticky top-32">
              <span className="writing-vertical text-xs font-mono text-[#B84C4C] uppercase tracking-[0.3em]">
                02 — Services
              </span>
            </div>
          </div>

          <div className="md:col-span-1 hidden md:block" />

          {/* Content */}
          <div className="md:col-span-9">
            <FadeIn className="mb-10 sm:mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white tracking-tight mb-3 sm:mb-4">
                How We Can Help
              </h2>
              <p className="text-white/70 font-mono text-xs uppercase tracking-widest">
                AI-Powered Development
              </p>
            </FadeIn>

            {/* Service List - Click-based Accordion */}
            <ServiceAccordion services={services} />

            {/* CTA */}
            <FadeIn className="mt-12 sm:mt-16 md:mt-24 pt-8 sm:pt-10 md:pt-12 border-t border-white/5">
              <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 items-start justify-between">
                <div className="max-w-sm sm:max-w-md">
                  <h4 className="text-lg sm:text-xl text-white font-light mb-3 sm:mb-4">Start Your Project</h4>
                  <p className="text-sm text-white/70 leading-relaxed font-normal">
                    Ready to get more done with less effort?
                    <br className="hidden sm:block" />
                    <span className="sm:hidden"> </span>
                    Let&apos;s build the right tools for your business.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="group flex items-center gap-3 sm:gap-4 border border-white/10 hover:border-[#B84C4C] hover:text-[#B84C4C] px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em]">
                    Contact Us
                  </span>
                  <ArrowRight size={14} className="opacity-60 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
