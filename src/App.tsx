/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF9EF] selection:bg-[#F2B632] selection:text-[#171717]">
      {/* Dynamic Header */}
      <Navbar />

      {/* Hero Workspace Section */}
      <Hero />

      {/* Informative About Section */}
      <About />

      {/* Services Portfolio Sections */}
      <Services />

      {/* Core Portfolio Grid */}
      <Portfolio />

      {/* Structural Career Timeline */}
      <Resume />

      {/* Verified Professional Certifications */}
      <Certifications />

      {/* High-Contrast Interactive Contact Module */}
      <Contact />

      {/* Beautiful Base Footer */}
      <Footer />
    </div>
  );
}
