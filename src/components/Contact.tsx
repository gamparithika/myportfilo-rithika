import { useState, FormEvent, ChangeEvent } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Contact] ${formData.subject}`,
          message: formData.message
        })
      });

      const data = await response.json();
      if (response.ok && data.success === 'true') {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to dispatch message. Please try again.');
      }
    } catch (err: any) {
      setIsSubmitting(false);
      setError(err?.message || 'An unexpected error occurred. Please try again.');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[18px] font-semibold text-[#F2B632] uppercase tracking-wider mb-2">
            Let's Collaborate
          </p>
          <h2 id="contact-heading" className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#171717] tracking-tight leading-[1.2]">
            Get In Touch <br />
            <span className="text-[#6A6A6A] font-medium">To Start Your Next Project</span>
          </h2>
        </div>

        {/* Contact Grid (2 columns on medium/large screens) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact info (5 columns width equivalent) */}
          <motion.div
            id="contact-info-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#171717] mb-4">Contact Information</h3>
              <p className="text-[#6A6A6A] text-[18px] leading-[1.6] mb-8">
                Have an ambitious idea or a software development project that needs a professional touch? 
                Reach out anytime. I am currently available for new full-stack engineering and development opportunities worldwide.
              </p>

              {/* Individual contact pills/cards */}
              <div className="space-y-6">
                
                {/* Email card */}
                <div className="flex items-start gap-4 p-5 rounded-lg bg-[#FFF9EF] border border-[#F2B632]/10">
                  <div className="w-12 h-12 rounded-lg bg-[#F2B632]/15 flex items-center justify-center text-[#F2B632] shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#171717] text-sm uppercase tracking-wider">Email Address</h4>
                    <a href={`mailto:${personalInfo.email}`} className="text-[#6A6A6A] text-[16px] hover:text-[#F2B632] transition-colors mt-1 block">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone card */}
                <div className="flex items-start gap-4 p-5 rounded-lg bg-[#FFF9EF] border border-[#F2B632]/10">
                  <div className="w-12 h-12 rounded-lg bg-[#F2B632]/15 flex items-center justify-center text-[#F2B632] shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#171717] text-sm uppercase tracking-wider">Phone Call</h4>
                    <a href={`tel:${personalInfo.phone}`} className="text-[#6A6A6A] text-[16px] hover:text-[#F2B632] transition-colors mt-1 block">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location card */}
                <div className="flex items-start gap-4 p-5 rounded-lg bg-[#FFF9EF] border border-[#F2B632]/10">
                  <div className="w-12 h-12 rounded-lg bg-[#F2B632]/15 flex items-center justify-center text-[#F2B632] shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#171717] text-sm uppercase tracking-wider">Location</h4>
                    <p className="text-[#6A6A6A] text-[16px] mt-1">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Space buffer instead of indicator */}
            <div className="mt-8"></div>
          </motion.div>

          {/* Right Column: Contact form (7 columns width equivalent) */}
          <motion.div
            id="contact-form-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#FFF9EF] p-8 sm:p-10 rounded-2xl border border-[#F2B632]/15 shadow-sm relative">
              <h3 className="text-2xl font-bold text-[#171717] mb-6">Send Me A Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-md font-medium">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-xs font-bold text-[#171717] uppercase tracking-wider mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Jane Doe"
                      className="bg-white border border-[#171717]/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#F2B632] focus:ring-1 focus:ring-[#F2B632] transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-xs font-bold text-[#171717] uppercase tracking-wider mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="jane@example.com"
                      className="bg-white border border-[#171717]/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#F2B632] focus:ring-1 focus:ring-[#F2B632] transition-colors"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-xs font-bold text-[#171717] uppercase tracking-wider mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Project Inquiry / Opportunity"
                    className="bg-white border border-[#171717]/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#F2B632] focus:ring-1 focus:ring-[#F2B632] transition-colors"
                  />
                </div>

                {/* Message field */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-xs font-bold text-[#171717] uppercase tracking-wider mb-2">Message Description</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Describe your project requirements in detail..."
                    className="bg-white border border-[#171717]/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#F2B632] focus:ring-1 focus:ring-[#F2B632] transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Action Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[16px] font-semibold bg-[#F2B632] text-[#171717] px-8 py-4 rounded-md hover:bg-[#E3A81A] transition-all duration-300 transform hover:scale-[1.03] shadow-md disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-[#171717]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Dispatching...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Inline visual Success Popup message container */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    id="contact-success-notification"
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="absolute inset-0 bg-[#FFF9EF]/95 rounded-2xl flex flex-col items-center justify-center p-8 text-center z-30 border border-[#F2B632]/40"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                      <CheckCircle size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-[#171717] mb-2">Message Dispatched!</h4>
                    <p className="text-[#6A6A6A] max-w-sm mb-4">
                      Thank you for reaching out. Rithika has received your inquiry and will contact you back in less than 24 business hours.
                    </p>
                    <div className="text-xs text-amber-800 bg-amber-50 border border-amber-100 rounded-md p-3.5 mb-6 max-w-sm text-left leading-relaxed">
                      <strong>Important:</strong> If this is the first time using this contact form, please check your inbox (<strong>{personalInfo.email}</strong>) for a confirmation email from FormSubmit.co and click the activate button to start receiving messages.
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-[#F2B632] hover:bg-[#E3A81A] text-[#171717] rounded-md text-sm font-bold transition-all duration-300 shadow-sm"
                    >
                      Dismiss
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
