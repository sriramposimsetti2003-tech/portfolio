import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        setStatus("success");
        e.target.reset();
      })
      .catch(() => {
        setStatus("error");
      });
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
    <section id="contact" className="min-h-screen pt-24 pb-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-100/50 to-cyan-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-700">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Let’s Build Something Amazing
          </h2>
          <p className="text-lg text-slate-600">
            Have a project in mind or want to collaborate? I’d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Contact Information
              </h3>
              <p className="text-slate-600">
                Reach out through any of the channels below.
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
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all"
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

          {/* RIGHT: Netlify Contact Form */}
          <motion.form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg space-y-5"
          >
            {/* Required hidden fields */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Send className="w-5 h-5 text-indigo-500" />
              Send a Message
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full h-12 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition disabled:opacity-60"
            >
              {status === "sending"
                ? "Sending..."
                : status === "success"
                ? "Message Sent ✔"
                : "Send Message"}
            </button>

            {status === "error" && (
              <p className="text-red-500 text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
