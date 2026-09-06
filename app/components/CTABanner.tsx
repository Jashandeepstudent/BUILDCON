"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-orange relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-7">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white font-extrabold text-2xl sm:text-3xl text-center sm:text-left leading-tight"
        >
          Need concrete on site this week?
          <br className="hidden sm:block" /> Call the plant directly.
        </motion.h2>
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          href="tel:09779767675"
          className="inline-flex items-center gap-3 bg-navy hover:bg-navy-deep text-white font-bold text-lg px-8 py-4 rounded-sm transition-colors shrink-0"
        >
          <Phone size={20} strokeWidth={2.5} />
          09779767675
        </motion.a>
      </div>
    </section>
  );
}
