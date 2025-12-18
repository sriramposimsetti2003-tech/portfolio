import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../Components/portfolio/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Batesville Digital Platform",
      client: "Batesville (Hillenbrand Group)",
      domain: "Funeral Services & Manufacturing",
      period: "June 2024 – Present",
      description:
        "A comprehensive enterprise platform modernizing product configurators, ordering workflows, partner dashboards, and supplier communication systems.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Context API",
        "Python",
        "Django REST Framework",
        "PostgreSQL",
        "Docker",
        "AWS",
        "GitHub Actions",
      ],
      highlights: [
        "Designed scalable full-stack solutions aligned with industry workflows",
        "Built reusable and responsive React components",
        "Implemented secure REST APIs",
        "Deployed containerized services on AWS",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Projects I've Built
          </h2>
          <p className="text-slate-600">
            Real-world solutions delivering business impact
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} index={i} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20">
          {[
            { value: "5+", label: "Technologies per project" },
            { value: "Enterprise", label: "Scale solutions" },
            { value: "Production", label: "Ready deployments" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-400/20 via-purple-400/20 to-pink-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative text-center p-8 bg-white rounded-2xl border border-slate-200 transition-all duration-500 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10">
                <p className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <span className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full border text-slate-600">
            <span className="h-2 w-2 bg-indigo-500 rounded-full animate-ping" />
            More projects in development
          </span>
        </motion.div>
      </div>
    </div>
  );
}
