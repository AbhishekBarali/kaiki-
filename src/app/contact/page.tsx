'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FadeIn } from '@/components/animations';
import { ArrowRight, Check, Loader2, Mail, MapPin } from 'lucide-react';

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log('Form submitted:', data);
        setIsSubmitting(false);
        setIsSubmitted(true);
        reset();

        // Reset success state after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <div className="relative pt-32 min-h-screen">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-[40vh] h-[40vh] border border-white/[0.02] rounded-full" />
                <div className="absolute bottom-1/4 left-1/4 w-[30vh] h-[30vh] border border-white/[0.03] rounded-full" />
            </div>

            {/* Main Content */}
            <section className="relative py-24 md:py-40 px-6 md:px-12">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Left Column - Info */}
                    <div>
                        <FadeIn>
                            <span className="text-[10px] font-mono text-[#CF2E2E] uppercase tracking-[0.3em] block mb-8">
                                Contact
                            </span>
                            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-8">
                                Let&apos;s Connect
                            </h1>
                            <p className="text-white/50 font-light text-sm md:text-base leading-relaxed max-w-md mb-16">
                                Whether you&apos;re interested in our products, want to collaborate on research, or just want to say hello — we&apos;d love to hear from you.
                            </p>
                        </FadeIn>

                        {/* Contact Info */}
                        <FadeIn delay={0.2}>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center">
                                        <Mail size={16} className="text-white/50" />
                                    </div>
                                    <div>
                                        <h3 className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Email</h3>
                                        <a href="mailto:hello@kaiki.dev" className="text-white hover:text-[#CF2E2E] transition-colors">
                                            hello@kaiki.dev
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center">
                                        <MapPin size={16} className="text-white/50" />
                                    </div>
                                    <div>
                                        <h3 className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Location</h3>
                                        <p className="text-white font-light">
                                            Remote-First
                                            <br />
                                            <span className="text-white/50 text-sm">Tokyo / San Francisco</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Decorative */}
                        <FadeIn delay={0.3} className="mt-24 hidden lg:block">
                            <div className="w-32 h-32 border border-white/5 relative">
                                <div className="absolute inset-4 border border-white/10" />
                                <div className="absolute inset-8 border border-white/15" />
                                <div className="absolute inset-12 bg-[#CF2E2E]/10" />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column - Form */}
                    <div className="relative">
                        <FadeIn delay={0.1}>
                            <div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-12">
                                <h2 className="text-xl font-[family-name:var(--font-display)] font-light text-white mb-2">
                                    Send a Message
                                </h2>
                                <p className="text-white/40 text-sm mb-12">
                                    We typically respond within 24-48 hours.
                                </p>

                                <AnimatePresence mode="wait">
                                    {isSubmitted ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="py-20 text-center"
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                                className="w-16 h-16 border border-[#CF2E2E] rounded-full flex items-center justify-center mx-auto mb-6"
                                            >
                                                <Check className="text-[#CF2E2E]" size={24} />
                                            </motion.div>
                                            <h3 className="text-xl text-white font-light mb-2">Message Sent</h3>
                                            <p className="text-white/50 text-sm">We&apos;ll be in touch soon.</p>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onSubmit={handleSubmit(onSubmit)}
                                            className="space-y-8"
                                        >
                                            {/* Name Field */}
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    placeholder=" "
                                                    className={`peer w-full bg-transparent border-b py-3 text-white placeholder-transparent focus:ring-0 transition-colors font-light text-sm outline-none ${errors.name ? 'border-red-500' : 'border-white/20 focus:border-[#CF2E2E]'
                                                        }`}
                                                    {...register('name', { required: 'Name is required' })}
                                                />
                                                <label
                                                    htmlFor="name"
                                                    className="absolute left-0 -top-3.5 text-xs text-white/40 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#CF2E2E] peer-focus:text-xs"
                                                >
                                                    Name
                                                </label>
                                                {errors.name && (
                                                    <motion.p
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="text-red-500 text-xs mt-2"
                                                    >
                                                        {errors.name.message}
                                                    </motion.p>
                                                )}
                                            </div>

                                            {/* Email Field */}
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    placeholder=" "
                                                    className={`peer w-full bg-transparent border-b py-3 text-white placeholder-transparent focus:ring-0 transition-colors font-light text-sm outline-none ${errors.email ? 'border-red-500' : 'border-white/20 focus:border-[#CF2E2E]'
                                                        }`}
                                                    {...register('email', {
                                                        required: 'Email is required',
                                                        pattern: {
                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                            message: 'Invalid email address',
                                                        },
                                                    })}
                                                />
                                                <label
                                                    htmlFor="email"
                                                    className="absolute left-0 -top-3.5 text-xs text-white/40 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#CF2E2E] peer-focus:text-xs"
                                                >
                                                    Email
                                                </label>
                                                {errors.email && (
                                                    <motion.p
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="text-red-500 text-xs mt-2"
                                                    >
                                                        {errors.email.message}
                                                    </motion.p>
                                                )}
                                            </div>

                                            {/* Message Field */}
                                            <div className="relative">
                                                <textarea
                                                    id="message"
                                                    rows={4}
                                                    placeholder=" "
                                                    className={`peer w-full bg-transparent border-b py-3 text-white placeholder-transparent focus:ring-0 transition-colors font-light text-sm outline-none resize-none ${errors.message ? 'border-red-500' : 'border-white/20 focus:border-[#CF2E2E]'
                                                        }`}
                                                    {...register('message', { required: 'Message is required' })}
                                                />
                                                <label
                                                    htmlFor="message"
                                                    className="absolute left-0 -top-3.5 text-xs text-white/40 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#CF2E2E] peer-focus:text-xs"
                                                >
                                                    Message
                                                </label>
                                                {errors.message && (
                                                    <motion.p
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="text-red-500 text-xs mt-2"
                                                    >
                                                        {errors.message.message}
                                                    </motion.p>
                                                )}
                                            </div>

                                            {/* Submit Button */}
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="group flex items-center justify-between w-full py-4 border border-white/10 px-6 hover:bg-white hover:text-[#050505] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                <span className="text-[10px] uppercase tracking-[0.2em]">
                                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                                </span>
                                                {isSubmitting ? (
                                                    <Loader2 size={14} className="animate-spin" />
                                                ) : (
                                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                                )}
                                            </button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 px-6 md:px-12 border-t border-white/5">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <FadeIn>
                        <p className="text-white/40 text-sm font-light">
                            Prefer a quicker response?
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-[10px] uppercase tracking-widest hover:text-[#CF2E2E] transition-colors"
                        >
                            DM us on Twitter / X →
                        </a>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
