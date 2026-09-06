"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

type Stat = {
  target: number;
  suffix: string;
  prefix?: string;
  label: string;
};

const stats: Stat[] = [
  { target: 24, suffix: "/7", label: "Plant operations, every day of the year" },
  { target: 25, prefix: "M", suffix: "", label: "Concrete grade batched to spec" },
  { target: 100, suffix: "%", label: "Reliable dispatch, order to pour" },
  { target: 5, suffix: "★", label: "Average rating from builders in Jammu" },
];

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [spring]);

  return <span ref={ref}>{display}</span>;
}

export default function StatsCounter() {
  return (
    <section className="bg-navy-deep py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:border-l lg:border-white/10 lg:first:border-l-0 lg:px-6">
              <div className="text-orange font-extrabold text-4xl sm:text-5xl tabular-nums tracking-tight">
                {s.prefix}
                <Counter value={s.target} />
                {s.suffix}
              </div>
              <p className="text-steel-light text-sm sm:text-[15px] mt-3 leading-snug max-w-[16ch] mx-auto">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
