/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PreviewBanner from "./components/PreviewBanner";
import Services from "./components/Services";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] selection:bg-[#C5A880] selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <PreviewBanner />
        <Services />
        <Tools />
        <Projects />
        <About />
        <FAQ />
        <Contact />
      </motion.main>

      <Footer />
    </div>
  );
}
