"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative bg-navy overflow-hidden">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.05fr_1fr] min-h-[92vh] lg:min-h-screen">
        {/* Text panel */}
        <div className="relative z-10 flex flex-col justify-center px-5 sm:px-8 lg:pl-10 lg:pr-8 pt-32 pb-16 lg:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-offwhite font-extrabold text-[2.5rem] leading-[1.08] sm:text-5xl sm:leading-[1.08] lg:text-[3.4rem] lg:leading-[1.06] tracking-tight max-w-xl"
          >
            From plain ground to poured foundation, without the wait.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="text-steel-light text-base sm:text-lg mt-6 max-w-lg leading-relaxed"
          >
            We batch and deliver M25 ready-mix concrete straight from our
            Schwing Stetter plant on NH44, Bari Brahmana &mdash; consistent
            strength, on-time trucks, every hour of every day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="flex flex-wrap items-center gap-4 mt-9"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-bold px-7 py-3.5 rounded-sm transition-colors"
            >
              Get a Quote
              <ArrowRight
                size={18}
                strokeWidth={2.5}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#location"
              className="inline-flex items-center gap-2 border-2 border-offwhite/30 hover:border-orange text-offwhite font-semibold px-7 py-3.5 rounded-sm transition-colors"
            >
              <MapPin size={18} />
              View Our Location
            </a>
          </motion.div>
        </div>

        {/* Photo panel — the real plant, silo colors intact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative min-h-[46vh] lg:min-h-full order-first lg:order-last"
        >
          <Image
            src="/images/plant-silos.jpeg"
            alt="Indian Buildcon RMC batching plant — cement silos and site fence, Bari Brahmana, Jammu"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent lg:bg-gradient-to-r lg:from-navy lg:via-navy/0 lg:to-transparent lg:w-1/4" />
          <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-navy/60 via-transparent to-navy" />
        </motion.div>
      </div>

      <div className="batch-line" />
    </section>
  );
}
