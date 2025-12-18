import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Building2 } from "lucide-react";

export default function ProjectCard({
  title,
  client,
  domain,
  period,
  description,
  technologies,
  highlights,
  index = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-rose-400/15 via-orange-400/15 to-amber-400/15" />

      <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl border border-slate-200 overflow-hidden transition-all duration-500 hover:border-rose-300 hover:shadow-2xl hover:shadow-rose-500/10">
        
        {/* TOP COLOR STRIP (THIS WAS MISSING ON SCREEN) */}
        <div className="h-[4px] bg-gradient-to-r from-rose-500 via-orange-500 to-amber-400" />

        <div className="p-8">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-indigo-50 text-indigo-700 rounded-full">
              <Building2 className="w-3 h-3" />
              {client}
            </span>

            <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium border border-slate-200 text-slate-500 rounded-full">
              <Calendar className="w-3 h-3" />
              {period}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-rose-600 transition-colors">
            {title}
          </h3>

          <p className="text-rose-600 font-medium mb-4">{domain}</p>

          <p className="text-slate-600 leading-relaxed mb-6">
            {description}
          </p>

          <div className="mb-6 space-y-2">
            {highlights.slice(0, 4).map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-rose-500 mt-1" />
                <span className="text-sm text-slate-600">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
