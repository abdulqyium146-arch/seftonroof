"use client";

import { useEffect, useRef, useState } from "react";

const statsData = [
  {
    value: 1850,
    suffix: "+",
    label: "Roofing Projects Completed",
    description: "Across Liverpool and Merseyside",
  },
  {
    value: 14,
    suffix: "+",
    label: "Years of Experience",
    description: "Serving Liverpool since 2010",
  },
  {
    value: 127,
    suffix: "+",
    label: "5-Star Reviews",
    description: "Verified Google & Checkatrade reviews",
  },
  {
    value: 60,
    suffix: " min",
    label: "Emergency Response",
    description: "Average call-to-arrival across Liverpool",
  },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-16 bg-brand-navy relative overflow-hidden"
      aria-label="Our track record in Liverpool roofing"
      ref={ref}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(240,90,40,0.3) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl sm:text-5xl font-black text-brand-orange mb-2">
                <CountUp target={stat.value} suffix={stat.suffix} active={isVisible} />
              </div>
              <div className="text-white font-bold text-base mb-1">{stat.label}</div>
              <div className="text-slate-500 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
