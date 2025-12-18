import React from "react";
import Navbar from "./Components/portfolio/Navbar";
import Footer from "./Components/portfolio/Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased">
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}
