'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ScrollIndicator from '@/components/ScrollIndicator';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { ArrowRight, Code2, Sparkles, Shield, Braces, Terminal, Cpu } from 'lucide-react';

const philosophyItems = [
  {
    number: '01',
    title: 'Eliminate Repetition',
    description: 'Say goodbye to boring, repetitive tasks. We build automation that handles the mundane so you can focus on what actually matters.',
    icon: Code2,
  },
  {
    number: '02',
    title: 'AI-Powered Efficiency',
    description: 'Integrate intelligent systems into your workflow. From smart assistants to automated processes—work smarter, not harder.',
    icon: Sparkles,
  },
  {
    number: '03',
    title: 'Built to Last',
    description: 'Clean architecture, scalable design, future-proof technology. We craft software that grows with your business.',
    icon: Shield,
  },
];

const services = [
  {
    name: 'AI PRODUCTS',
    category: 'Platforms',
    status: 'Active',
    statusColor: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
    description: 'Intelligent applications with custom AI personalities, chat interfaces, and automation built-in.',
  },
  {
    name: 'WEB APPLICATIONS',
    category: 'Development',
    status: 'Active',
    statusColor: 'text-[#B84C4C] border-[#B84C4C]/30',
    description: 'Modern, responsive web apps built with cutting-edge technologies. From landing pages to complex platforms.',
  },
  {
    name: 'AI AUTOMATION',
    category: 'Services',
    status: 'Active',
    statusColor: 'text-[#B84C4C] border-[#B84C4C]/30',
    description: 'Streamline workflows with intelligent automation. Custom AI agents and tools tailored to your needs.',
  },
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

        {/* Animated Geometric Elements */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.02, 1], opacity: [0.4, 0.6, 0.4], rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="w-[60vh] h-[60vh] border border-white/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[40vh] h-[40vh] border border-[#B84C4C]/20 rounded-full"
          />
          {/* Grid lines */}
          <div className="absolute h-[80vh] w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="absolute h-[1px] w-[80vh] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Vertical Text */}
        <div className="absolute left-6 md:left-20 top-1/2 -translate-y-1/2 z-10 hidden md:block">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="writing-vertical text-[10px] tracking-[0.3em] uppercase text-white/30 font-mono"
          >
            Software Studio // 2026
          </motion.div>
        </div>



        {/* Main Content */}
        <div className="z-10 flex flex-col items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-display)] text-5xl sm:text-7xl md:text-9xl font-normal tracking-[0.3em] sm:tracking-[0.5em] md:tracking-[0.8em] text-white select-none relative"
          >
            KAIKI
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12 md:mt-16 flex flex-col items-center gap-6"
          >
            <div className="h-[60px] w-[1px] bg-[#B84C4C]/50" />

            {/* Tagline */}
            <h2 className="text-lg md:text-2xl font-light text-white tracking-wide">
              Crafting intelligent software.
            </h2>

            <p className="max-w-md text-sm md:text-base font-normal leading-relaxed text-white/70 mt-2">
              AI-powered apps, automation, and tools
              <br />
              that work for you.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Link
                href="/products"
                className="group flex items-center justify-center gap-3 bg-white text-[#050505] px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-[#B84C4C] hover:text-white transition-all duration-300"
              >
                Explore Our Work
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 text-xs uppercase tracking-widest hover:border-[#B84C4C] hover:text-[#B84C4C] transition-all duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12">
          <ScrollIndicator />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-32 md:py-48 px-6 border-t border-white/5" id="philosophy">
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
          <div className="md:col-span-8 flex flex-col gap-32">
            <FadeIn className="md:ml-[-2rem]">
              <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-8">
                The way of the craftsman.
                <br />
                <span className="text-white/40">Software as art.</span>
              </h2>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24" staggerDelay={0.15}>
              {philosophyItems.map((item, index) => (
                <StaggerItem key={item.title}>
                  <div className={`group ${index === 1 ? 'md:col-start-2' : ''}`}>
                    <div className="flex justify-between items-baseline mb-6 relative">
                      <span className="text-xs font-mono text-[#B84C4C]">{item.number}</span>
                    </div>
                    <h3 className="text-xl font-normal text-white mb-4 tracking-wide group-hover:translate-x-2 transition-transform duration-500">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-white/60 font-normal border-l border-white/10 pl-6 py-2 group-hover:border-[#B84C4C]/50 transition-colors duration-500">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="relative py-32 md:py-48 bg-gradient-to-b from-[#0a0a0a] to-[#050505] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <span className="text-xs font-mono text-[#B84C4C] uppercase tracking-[0.3em] block mb-4">
              What We Build
            </span>
            <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight mb-6">
              Intelligent Solutions
            </h2>
            <p className="text-white/60 font-normal text-base max-w-xl mx-auto leading-relaxed">
              From AI platforms to custom web applications. We craft software that feels alive.
            </p>
          </FadeIn>

          {/* Service Icons */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'AI Products', desc: 'Intelligent platforms and tools', icon: Cpu },
              { title: 'Web Apps', desc: 'Modern, responsive applications', icon: Braces },
              { title: 'Automation', desc: 'Workflows that work for you', icon: Terminal },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  className="group p-10 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 relative overflow-hidden text-center"
                  whileHover={{ y: -4 }}
                >
                  <item.icon className="w-8 h-8 text-[#B84C4C]/60 mx-auto mb-6 group-hover:text-[#B84C4C] transition-colors" />
                  <h4 className="text-lg font-medium text-white mb-2 tracking-wide">{item.title}</h4>
                  <p className="text-sm text-white/50">{item.desc}</p>
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
      <section className="relative py-32 md:py-48 border-t border-white/5" id="services">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
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
            <FadeIn className="mb-20">
              <h2 className="text-4xl md:text-6xl font-extralight text-white tracking-tight mb-4">
                How We Can Help
              </h2>
              <p className="text-white/50 font-mono text-xs uppercase tracking-widest">
                AI-Powered Development
              </p>
            </FadeIn>

            {/* Service List */}
            <div className="space-y-0 border-t border-white/10">
              {services.map((service) => (
                <FadeIn key={service.name}>
                  <div className="group relative py-12 border-b border-white/10 hover:bg-white/[0.02] transition-colors">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 px-4">
                      <h3 className="text-2xl md:text-3xl font-light tracking-[0.15em] text-white group-hover:text-[#B84C4C] transition-colors duration-500">
                        {service.name}
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-white/40 font-mono">{service.category}</span>
                        <span className="w-12 h-[1px] bg-white/10" />
                        <span className={`text-[10px] font-mono border px-2 py-1 uppercase ${service.statusColor}`}>
                          {service.status}
                        </span>
                      </div>
                    </div>
                    <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-700 ease-in-out">
                      <p className="pt-4 px-4 text-sm text-white/60 font-normal max-w-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* CTA */}
            <FadeIn className="mt-24 pt-12 border-t border-white/5">
              <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
                <div className="max-w-md">
                  <h4 className="text-xl text-white font-light mb-4">Start Your Project</h4>
                  <p className="text-sm text-white/50 leading-relaxed font-normal">
                    Have an idea? Let's build something intelligent together.
                    <br />
                    We work with startups and enterprises alike.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="group flex items-center gap-4 border border-white/10 hover:border-[#B84C4C] hover:text-[#B84C4C] px-8 py-4 transition-all duration-300"
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
