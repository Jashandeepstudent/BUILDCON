"use client";

import { motion } from "framer-motion";
import { Layers, Clock, Truck } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Premium M25 Concrete",
    body: "Batched to spec on Schwing Stetter equipment, at prices that hold up against any plant in the region — strength you can pour with confidence, whatever the project size.",
  },
  {
    icon: Clock,
    title: "24/7 Operations",
    body: "The plant runs around the clock, seven days a week, so a late-stage change to your pour schedule doesn't mean waiting until Monday.",
  },
  {
    icon: Truck,
    title: "Reliable Fleet",
    body: "Coordination from the moment you order to the moment the drum tips — our transit mixers arrive on the hour, not somewhere in a four-hour window.",
  },
];

export default function Features() {
  return (
    <section id="why-us" className="bg-offwhite py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-navy font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight">
            Ready to build smarter?
          </h2>
          <p className="text-steel text-base sm:text-lg mt-4 leading-relaxed">
            Three things builders across Jammu tell us matter most when they
            pick a concrete supplier — so it&rsquo;s what we built the plant
            around.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-navy/10">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-offwhite p-8 sm:p-10"
            >
              <f.icon size={30} strokeWidth={1.75} className="text-orange" />
              <h3 className="text-navy font-bold text-xl mt-6 mb-3">
                {f.title}
              </h3>
              <p className="text-steel text-[15px] leading-relaxed">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
