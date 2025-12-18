import React from 'react';
import { motion } from 'framer-motion';

const gradients = {
    indigo: 'linear-gradient(to right, #6366f1, #4f46e5)',
    cyan: 'linear-gradient(to right, #22d3ee, #06b6d4)',
    violet: 'linear-gradient(to right, #8b5cf6, #7c3aed)',
    emerald: 'linear-gradient(to right, #10b981, #059669)',
    amber: 'linear-gradient(to right, #f59e0b, #d97706)',
    rose: 'linear-gradient(to right, #f43f5e, #e11d48)',
};

const backgrounds = {
    indigo: 'bg-indigo-50 border-indigo-100 hover:border-indigo-200',
    cyan: 'bg-cyan-50 border-cyan-100 hover:border-cyan-200',
    violet: 'bg-violet-50 border-violet-100 hover:border-violet-200',
    emerald: 'bg-emerald-50 border-emerald-100 hover:border-emerald-200',
    amber: 'bg-amber-50 border-amber-100 hover:border-amber-200',
    rose: 'bg-rose-50 border-rose-100 hover:border-rose-200',
};

export default function SkillBadge({ name, icon: Icon, level, color = 'indigo' }) {
    return (
        <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            className={`group relative p-4 rounded-2xl border ${backgrounds[color]} transition-all duration-300 cursor-default`}
        >
            <div className="flex items-center gap-3 mb-3">
                {Icon && (
                    <div
                        className="p-2 rounded-xl text-white"
                        style={{ background: gradients[color] }}
                    >
                        <Icon className="w-5 h-5" />
                    </div>
                )}
                <span className="font-semibold text-slate-800">{name}</span>
            </div>

            {level && (
                <div className="relative h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                        className="absolute h-full rounded-full"
                        style={{ background: gradients[color] }}
                    />
                </div>
            )}
        </motion.div>
    );
}
