import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const iconMap = {
    work: Briefcase,
    education: GraduationCap,
    internship: Award,
};

const colorMap = {
    work: '#a855f7',        // purple-500
    education: '#14b8a6',   // teal-500
    internship: '#f97316',  // orange-500
};

export default function TimelineItem({
    title,
    company,
    period,
    description,
    type = 'work',
    index = 0,
}) {
    const Icon = iconMap[type];
    const color = colorMap[type];

    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative pl-8 md:pl-0"
        >
            {/* Timeline Line - Mobile */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-400 md:hidden"></div>

            {/* Timeline Dot */}
            <div
                className="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10"
                style={{ backgroundColor: color }}
            >
                <div
                    className="absolute inset-0 rounded-full animate-ping opacity-25"
                    style={{ backgroundColor: color }}
                />
            </div>

            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-indigo-200 transition-all"
                >
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <div
                            className="p-2 rounded-xl text-white"
                            style={{ backgroundColor: color }}
                        >
                            <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium text-slate-500">{period}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-1">{title}</h3>
                    <p className="text-purple-600 font-medium mb-3">{company}</p>
                    <p className="text-slate-600 leading-relaxed">{description}</p>
                </motion.div>
            </div>
        </motion.div>
    );
}
