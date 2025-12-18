import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Send,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sriramposimsetti2003@gmail.com",
      href: "mailto:sriramposimsetti2003@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9642308725",
      href: "tel:+919642308725",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/sriram-posimsetti-a78708394",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: null,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-100/50 to-cyan-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-700">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-600">
            Have a project in mind or just want to connect? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Ready to Start a Project?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Whether you need a full-stack application, AI integration,
                or a developer to join your team — I'm ready to help.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all group"
                    >
                      <div className="p-3 bg-indigo-50 rounded-xl">
                        <info.icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">{info.label}</p>
                        <p className="font-semibold text-slate-900">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100">
                      <div className="p-3 bg-slate-100 rounded-xl">
                        <info.icon className="w-6 h-6 text-slate-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">{info.label}</p>
                        <p className="font-semibold text-slate-900">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg space-y-5"
          >
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Send className="w-5 h-5 text-indigo-500" />
              Send a Message
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />

            <button
              type="submit"
              className="w-full h-12 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
