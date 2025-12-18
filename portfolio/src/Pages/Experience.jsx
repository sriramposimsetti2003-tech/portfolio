import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Briefcase, GraduationCap } from "lucide-react";

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;

  const icon =
    item.type === "work"
      ? <Briefcase className="w-5 h-5" />
      : <GraduationCap className="w-5 h-5" />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative md:flex ${
        isLeft ? "md:justify-start" : "md:justify-end"
      }`}
    >
      {/* Card */}
      <div className="w-full md:w-[46%] bg-white rounded-3xl p-6 shadow-md border border-slate-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
            {icon}
          </div>
          <div>
            <h3 className="font-bold text-slate-900">{item.title}</h3>
            <p className="text-sm text-slate-500">{item.company}</p>
          </div>
        </div>

        <p className="text-sm text-indigo-600 font-medium mb-3">
          {item.period}
        </p>

        <p className="text-slate-600 leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8">
        <span className="w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 border-4 border-white shadow" />
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const timeline = [
    {
      title: "Full Stack Developer",
      company: "Intent Software Solutions Pvt. Ltd., Pune",
      period: "June 2024 – Present",
      description:
        "Building enterprise-level digital platforms using React.js, Django REST Framework, PostgreSQL, and AWS. Leading frontend development, implementing CI/CD pipelines, and collaborating in Agile teams.",
      type: "work",
    },
    {
      title: "B.Tech Graduate",
      company:
        "Y.S.R Engineering College of Yogi Vemana University, Kadapa",
      period: "2024",
      description:
        "Completed Bachelor of Technology with a strong foundation in programming, data structures, algorithms, and software engineering principles.",
      type: "education",
    },
    {
      title: "Machine Learning Intern",
      company: "SAK Informatics",
      period: "June 2023 – July 2023",
      description:
        "Worked on real-world ML projects involving data preprocessing, model training, and evaluation, gaining hands-on AI experience.",
      type: "internship",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white -z-10" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl mb-20">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-700">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-slate-600">
            The path that shaped me into the developer I am today
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-400" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Learn More?
          </h3>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Download my resume or reach out to discuss opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69418ef16335bfcf49e1213b/71747de1b_Sriram_Posimsetti_Resume2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-12 px-6 rounded-full bg-white text-slate-900 font-medium hover:bg-slate-100 transition"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center h-12 px-6 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
            >
              Contact Me
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
