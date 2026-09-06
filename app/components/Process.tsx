"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "You call or send specs",
    body: "Tell us the grade, quantity, and when you need it on site. One call, day or night.",
  },
  {
    n: "02",
    title: "We batch to order",
    body: "Each mix is proportioned fresh on the Schwing Stetter line — nothing sits waiting.",
  },
  {
    n: "03",
    title: "Fleet dispatches on schedule",
    body: "Transit mixers leave the plant timed to your pour window, not ours.",
  },
  {
    n: "04",
    title: "Concrete arrives ready to pour",
    body: "Consistent slump, on the hour, so your crew isn't standing around waiting on a drum.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-navy py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <div className="max-w-2xl mb-16">
          <h2 className="text-offwhite font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight">
            Order to pour, on one timeline
          </h2>
          <p className="text-steel-light text-base sm:text-lg mt-4 leading-relaxed">
            This is the actual sequence a batch follows, from your call to
            the truck reaching site.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6"
        >
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <span className="text-orange/40 font-extrabold text-5xl tracking-tight">
                {s.n}
              </span>
              <h3 className="text-offwhite font-bold text-lg mt-4 mb-2">
                {s.title}
              </h3>
              <p className="text-steel-light text-[15px] leading-relaxed">
                {s.body}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 -right-3 w-6 h-px bg-orange/30" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
