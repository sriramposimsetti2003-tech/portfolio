import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ram from "../assets/ram.jpg";

import {
  ArrowRight,
  MapPin,
  GraduationCap,
  Briefcase,
  Heart,
  Code2,
} from "lucide-react";

export default function About() {
  const facts = [
    { icon: MapPin, label: "Based in", value: "Pune, India" },
    { icon: GraduationCap, label: "Education", value: "B.Tech (2024)" },
    { icon: Briefcase, label: "Experience", value: "1+ Year" },
    { icon: Code2, label: "Focus", value: "Full Stack & AI" },
  ];

  const interests = [
    "Building scalable systems",
    "Machine Learning",
    "Cloud Architecture",
    "Open Source",
    "Problem Solving",
    "Tech Innovation",
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mb-20">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-700">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            The Story Behind the Code
          </h2>
          <p className="text-lg text-slate-600">
            Get to know the developer who turns ideas into scalable digital
            solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-3xl rotate-2" />
              <img
                src={ram}
                alt="Sriram Posimsetti"
                className="relative rounded-3xl w-full aspect-[4/5] object-cover shadow-xl"
              />

            </div>

            {/* Facts */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {facts.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm"
                >
                  <fact.icon className="w-5 h-5 text-indigo-500 mb-2" />
                  <p className="text-xs text-slate-500">{fact.label}</p>
                  <p className="font-semibold text-slate-800">{fact.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-8"
          >
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p className="text-xl">
                I'm{" "}
                <strong className="text-slate-900">
                  Sriram Posimsetti
                </strong>
                , a passionate Full Stack Developer and AI Engineer currently
                working at{" "}
                <strong className="text-indigo-600">
                  Intent Software Solutions
                </strong>{" "}
                in Pune.
              </p>

              <p>
                My journey in tech started during my B.Tech, where I discovered
                my passion for solving complex problems through code. An early
                internship as an ML Intern gave me hands-on experience with
                machine learning.
              </p>

              <p>
                Today, I work on enterprise-level platforms using React, Django
                REST Framework, PostgreSQL, and AWS, while integrating AI/ML into
                real-world products.
              </p>

              <p>
                Outside work, I explore new technologies, contribute to team
                discussions, and stay updated with generative AI and cloud
                computing trends.
              </p>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-500" />
                What Drives Me
              </h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, i) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-indigo-100 hover:text-indigo-700 transition"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact">
                <button className="h-12 px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold flex items-center">
                  Let's Work Together
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </Link>

              <Link to="/experience">
                <button className="h-12 px-6 border border-slate-300 rounded-full font-semibold text-slate-700 hover:bg-slate-100">
                  View My Journey
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
