"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";

export default function ContactLocation() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div id="location" className="scroll-mt-20" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
        <div className="max-w-2xl mb-16">
          <h2 className="text-navy font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight">
            Visit us today
          </h2>
          <p className="text-steel text-base sm:text-lg mt-4 leading-relaxed">
            On NH44, opposite the Ganga filling station &mdash; open around
            the clock, every day of the week.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: contact details + form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <Phone size={22} className="text-orange shrink-0 mt-0.5" />
                <div>
                  <p className="text-navy font-bold">Phone</p>
                  <a
                    href="tel:09779767675"
                    className="text-steel hover:text-orange transition-colors"
                  >
                    09779767675
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin size={22} className="text-orange shrink-0 mt-0.5" />
                <div>
                  <p className="text-navy font-bold">Address</p>
                  <p className="text-steel leading-relaxed">
                    NH44, opposite Ganga filling station, Adda, Bari
                    Brahmana, Sarore, Jammu and Kashmir 181133
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock size={22} className="text-orange shrink-0 mt-0.5" />
                <div>
                  <p className="text-navy font-bold">Hours</p>
                  <p className="text-steel">Open 24 hours, Monday to Sunday</p>
                </div>
              </div>
            </div>

            <form className="space-y-4 border-t border-navy/10 pt-8">
              <p className="text-navy font-bold text-sm mb-1">
                Or request a quote here
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="bg-concrete border border-navy/10 px-4 py-3 text-sm text-navy placeholder:text-steel/70 focus:outline-none focus:border-orange"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="bg-concrete border border-navy/10 px-4 py-3 text-sm text-navy placeholder:text-steel/70 focus:outline-none focus:border-orange"
                />
              </div>
              <textarea
                placeholder="Quantity needed, grade, and delivery timing"
                rows={3}
                className="w-full bg-concrete border border-navy/10 px-4 py-3 text-sm text-navy placeholder:text-steel/70 focus:outline-none focus:border-orange resize-none"
              />
              <button
                type="submit"
                className="bg-navy hover:bg-navy-deep text-white font-bold px-7 py-3.5 rounded-sm transition-colors"
              >
                Request Quote
              </button>
            </form>
          </motion.div>

          {/* Right: real embedded map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-[380px] sm:h-[460px] lg:h-full lg:min-h-[460px] w-full border border-navy/10"
          >
            <iframe
              title="Indian Buildcon RMC Plant location — Plus Code JW7M+PJ Sarore"
              src="https://www.google.com/maps?q=JW7M%2BPJ+Sarore,+Jammu+and+Kashmir&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
