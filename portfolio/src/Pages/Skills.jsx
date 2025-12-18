import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Brain,
  Wrench,
  Users,
  Layers,
  Server,
  Cog,
  Sparkles,
  Globe,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "indigo",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript (React.js)", level: 88 },
        { name: "SQL", level: 85 },
      ],
    },
    {
      title: "Frontend & Frameworks",
      icon: Layers,
      color: "cyan",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Django / DRF", level: 85 },
        { name: "Flask", level: 75 },
        { name: "Streamlit", level: 70 },
      ],
    },
    {
      title: "Database",
      icon: Database,
      color: "emerald",
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MySQL", level: 80 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "violet",
      skills: [
        { name: "AWS", level: 82 },
        { name: "Docker", level: 78 },
        { name: "GitHub Actions (CI/CD)", level: 80 },
      ],
    },
    {
      title: "AI / ML",
      icon: Brain,
      color: "rose",
      skills: [
        { name: "Machine Learning", level: 80 },
        { name: "Deep Learning", level: 75 },
        { name: "NLP", level: 72 },
        { name: "Image Processing", level: 70 },
      ],
    },
    {
      title: "Tools & Utilities",
      icon: Wrench,
      color: "amber",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Postman", level: 85 },
        { name: "VS Code", level: 92 },
        { name: "Excel & PowerBI", level: 75 },
      ],
    },
  ];

  const softSkills = [
    { name: "Full-Stack Development", icon: Layers },
    { name: "RESTful API Design", icon: Server },
    { name: "Authentication & Authorization", icon: Cog },
    { name: "Cloud Deployment", icon: Cloud },
    { name: "CI/CD Pipelines", icon: Sparkles },
    { name: "Agile Methodologies", icon: Users },
    { name: "Cross-functional Collaboration", icon: Globe },
    { name: "Problem Solving", icon: Brain },
  ];

  const gradients = {
    indigo: "from-indigo-400 to-indigo-600",
    cyan: "from-cyan-400 to-cyan-600",
    emerald: "from-emerald-400 to-emerald-600",
    violet: "from-violet-400 to-violet-600",
    rose: "from-rose-400 to-rose-600",
    amber: "from-amber-400 to-amber-600",
  };

  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white -z-10" />
      <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-100/50 to-cyan-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mb-20">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-700">
            Skills & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Technologies I Work With
          </h2>
          <p className="text-lg text-slate-600">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-100">
                  <category.icon className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="font-bold text-slate-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-slate-700">
                        {skill.name}
                      </span>
                      <span className="text-slate-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 + 0.2 }}
                        className={`h-full rounded-full bg-gradient-to-r ${gradients[category.color]}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 text-white"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-3">
              Core Competencies
            </h3>
            <p className="text-slate-400">
              Beyond technical skills — how I deliver impact
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition"
              >
                <skill.icon className="w-5 h-5 text-indigo-400" />
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
