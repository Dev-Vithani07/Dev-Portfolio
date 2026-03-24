"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.22, 0.61, 0.36, 1] },
  });

  return (
    <section
      id="about"
      className="min-h-screen flex items-center gap-20 px-24 py-24"
      style={{ background: "var(--bg-base)" }}
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        viewport={{ once: true }}
        className="relative flex shrink-0"
      >
        <div
          className="relative h-72 w-72 rounded-3xl overflow-hidden border border-purple-400/20"
          style={{ background: "var(--bg-surface)" }}
        >
          <Image
            src="/me.png"
            alt="Dev Vithani"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      <div className="flex flex-col gap-6 max-w-xl">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.1,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-widest uppercase"
          style={{ color: "#7F77DD" }}
        >
          01 / About Me
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.2,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="font-display font-extrabold leading-none tracking-tight"
          style={{ fontSize: "clamp(36px, 4vw, 52px)", color: "#f0eeff" }}
        >
          The Person <br /> behind the code.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.3,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="text-base leading-relaxed font-light"
          style={{ color: "rgba(160,155,210,0.6)" }}
        >
          I am the engineer, curious and constantly exploring the world of tech.
          I believe great software is both intelligent and beautiful.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.4,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="text-base leading-relaxed font-light"
          style={{ color: "rgba(160,155,210,0.6)" }}
        >
          My journey started with Flutter and evolved into building full-stack
          AI-powered products. I love turning complex research into real
          user-facing tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.5,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {[
            "Flutter",
            "Firebase",
            "Python",
            "Data Visualization",
            "scikit-learn",
            "Figma",
            "React",
            "Next.js",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 cursor-default rounded-full font-mono text-xs border border-purple-400/20"
              style={{ background: "rgba(127,119,221,0.05)", color: "#AFA9EC" }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
