"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "Best rmc plant in jammu.. service is exceptional, staff is highly professional. Overall great experience.",
    name: "Aditya",
  },
  {
    quote:
      "Best quality concrete and service is too fast. Strengthable concrete anyone can go for it to built a strong house or project.",
    name: "Mohit Tandon",
  },
  {
    quote:
      "Seamless coordination from order to pour. Professional team, reliable fleet, and exactly the kind of efficiency a large project needs.",
    name: "Shubham Bandral",
  },
  {
    quote: "Excellent and fast service and nice staff.",
    name: "Arya Bandral",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-orange mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-concrete py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-navy font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight">
            Trusted by builders across Jammu
          </h2>
          <p className="text-steel text-base sm:text-lg mt-4 leading-relaxed">
            These are unedited reviews from Google, from people who&rsquo;ve
            actually taken delivery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-offwhite border border-navy/8 p-7 sm:p-8"
            >
              <Stars />
              <blockquote className="text-navy text-[15px] sm:text-base leading-relaxed">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="text-steel font-semibold text-sm mt-5">
                &mdash; {r.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
