import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-indigo-300 to-white bg-clip-text text-transparent">
                Sriram Posimsetti
              </span>
            </h3>
            <p className="text-slate-400 mb-6">
              Full Stack Developer & AI Engineer building scalable, modern web
              solutions.
            </p>

            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/sriram-posimsetti-a78708394"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-xl hover:bg-indigo-600 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:sriramposimsetti2003@gmail.com"
                className="p-3 bg-white/5 rounded-xl hover:bg-indigo-600 transition"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+919642308725"
                className="p-3 bg-white/5 rounded-xl hover:bg-indigo-600 transition"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-3">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-slate-400 hover:text-white hover:translate-x-1 transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-4 text-slate-400">
              <p>Email: sriramposimsetti2003@gmail.com</p>
              <p>Phone: +91 9642308725</p>
              <p>Pune, India</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Sriram Posimsetti
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
