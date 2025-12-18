import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Linkedin,
  Mail,
  Phone,
  Code2,
  Cloud,
  Brain,
  Sparkles,
} from "lucide-react";

import ram from "../assets/ram.jpg"; // ✅ local image

export default function Home() {
  const stats = [
    { value: "1+", label: "Year Experience" },
    { value: "5+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const highlights = [
    { icon: Code2, label: "Full Stack Development", color: "text-indigo-400" },
    { icon: Cloud, label: "Cloud & DevOps", color: "text-cyan-400" },
    { icon: Brain, label: "AI/ML Integration", color: "text-violet-400" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      
      {/* Ambient glows */}
      <div className="absolute -z-10 inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Available for opportunities
            </span>

            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  Sriram
                </span>
              </h1>
              <p className="mt-4 text-2xl text-slate-300">
                Full Stack Developer & AI Engineer
              </p>
            </div>

            <p className="text-lg text-slate-400 max-w-xl">
              I build scalable web applications and AI-powered solutions using
              React, Django, PostgreSQL, and AWS.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl border border-white/20"
                >
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-sm text-white">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="h-14 px-8 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold flex items-center hover:scale-105 transition"
              >
                View My Work <ArrowRight className="w-5 h-5 ml-2" />
              </Link>

              <a
                href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69418ef16335bfcf49e1213b/71747de1b_Sriram_Posimsetti_Resume2.pdf"
                target="_blank"
                rel="noreferrer"
                className="h-14 px-8 rounded-full border border-white/30 text-white font-semibold flex items-center hover:bg-white/10 transition"
              >
                <Download className="w-5 h-5 mr-2" />
                Resume
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 pt-4">
              {[Linkedin, Mail, Phone].map((Icon, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
                >
                  <Icon />
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE STACK */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* gradient layer */}
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-indigo-500/40 to-cyan-400/40 blur-xl" />

            <div className="relative rounded-3xl overflow-hidden bg-slate-800 shadow-2xl">
              <img
                src={ram}
                alt="Sriram"
                className="w-[320px] md:w-[380px] object-cover"
              />

              {/* Floating tags */}
              <div className="absolute top-4 right-4 bg-white rounded-xl px-4 py-2 text-sm font-semibold shadow-lg">
                React · Django · AI
              </div>

              <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                <span className="text-xl font-bold text-indigo-600">1+</span>
                <span className="text-sm text-slate-600">
                  Years Experience
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
