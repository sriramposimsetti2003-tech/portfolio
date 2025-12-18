import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
    badge,
    title,
    description,
    center = true,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`mb-16 ${
                center ? 'text-center mx-auto' : 'text-left'
            }`}
        >
            {badge && (
                <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold tracking-wide">
                    {badge}
                </span>
            )}

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                {title}
            </h2>

            {description && (
                <p
                    className={`text-lg text-slate-600 leading-relaxed ${
                        center ? 'max-w-2xl mx-auto' : 'max-w-3xl'
                    }`}
                >
                    {description}
                </p>
            )}
        </motion.div>
    );
}
