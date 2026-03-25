"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";

const ParticlesBackground = dynamic(() => import("@/components/ParticleBg"), {
  ssr: false,
});

const roles = ["AI / ML Engineer", "Frontend Developer", "Flutter Developer"];

const RoleText = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={roleIndex}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3 }}
        className="font-mono text-sm tracking-widest"
        style={{ color: "#AFA9EC" }}
      >
        {roles[roleIndex]}
      </motion.p>
    </AnimatePresence>
  );
};

const Hero = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.22, 0.61, 0.36, 1] },
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-12 lg:px-24 pt-32 lg:pt-0 pb-16 lg:pb-0 overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      <ParticlesBackground />


      <motion.div
        {...fadeUp(0.1)}
        className="flex lg:hidden items-center gap-2 w-fit px-4 py-2 rounded-full border border-purple-400/30 order-0 mb-6 z-10"
        style={{ background: "rgba(127,119,221,0.07)" }}
      >
        <div className="w-2 h-2 rounded-full bg-teal-200 animate-pulse" />
        <span
          className="font-mono text-xs tracking-widest"
          style={{ color: "#AFA9EC" }}
        >
          available for work
        </span>
      </motion.div>

      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 z-10 max-w-xl relative w-full order-2 lg:order-1 mt-8 lg:mt-0">

        <motion.div
          {...fadeUp(0.1)}
          className="hidden lg:flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-purple-400/30"
          style={{ background: "rgba(127,119,221,0.07)" }}
        >
          <div className="w-2 h-2 rounded-full bg-teal-200 animate-pulse" />
          <span
            className="font-mono text-xs tracking-widest"
            style={{ color: "#AFA9EC" }}
          >
            available for work
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="font-display font-extrabold leading-none tracking-tight"
          style={{ fontSize: "clamp(48px, 7vw, 80px)", color: "#f0eeff" }}
        >
          Dev <br />
          <span
            style={{ color: "transparent", WebkitTextStroke: "2px #7F77DD" }}
          >
            Vithani
          </span>
        </motion.h1>

        <motion.div
          {...fadeUp(0.3)}
          className="flex items-center justify-center lg:justify-start gap-3 w-full"
        >
          <div
            className="w-7 h-px rounden-full"
            style={{ background: "var(--gradient-hero)" }}
          />
          <RoleText />
        </motion.div>

        <motion.p
          {...fadeUp(0.4)}
          className="text-base leading-relaxed font-mono"
          style={{ color: "rgba(160,155,210,0.55)" }}
        >
          I build intelligent systems, beautiful web interfaces, and
          cross-platform mobile apps.
        </motion.p>

        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-wrap justify-center lg:justify-start gap-4"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3 rounded-full text-sm font-medium text-white cursor-pointer transition-all duration-200"
            style={{ background: "var(--gradient-button)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "var(--glow-purple)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            View Projects
          </button>
          <a
            href="/resume.pdf"
            download="Dev's_Resume.pdf"
            className="px-7 py-3 rounded-full text-sm cursor-pointer transition-all duration-200 bg-transparent inline-flex items-center justify-center"
            style={{
              color: "rgba(200,196,255,0.75)",
              border: "1px solid rgba(255,255,255,0.13)",
              textDecoration: "none"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#7F77DD";
              e.currentTarget.style.color = "#f0eeff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.13)";
              e.currentTarget.style.color = "rgba(200,196,255,0.75)";
            }}
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.6)}
          className="flex justify-center lg:justify-start gap-8 pt-6 w-full"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          {[
            { num: "12+", label: "Projects" },
            { num: "5+", label: "Certs" },
            { num: "2+", label: "Years" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="font-display font-extrabold text-2xl"
                style={{ color: "#f0eeff" }}
              >
                {stat.num}
              </div>
              <div
                className="font-mono text-xs tracking-widest mt-1"
                style={{ color: "rgba(160,155,210,0.4)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
        className="z-10 relative flex items-center justify-center scale-[0.8] md:scale-90 lg:scale-100 order-1 lg:order-2 mb-8 lg:mb-0"
        style={{ width: 340, height: 420 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute rounded-full border border-dashed"
          style={{
            width: 360,
            height: 360,
            borderColor: "rgba(127,119,221,0.2)",
          }}
        />


        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute rounded-full border border-dashed"
          style={{
            width: 310,
            height: 310,
            borderColor: "rgba(93,202,165,0.15)",
          }}
        />

        <div
          className="relative z-10 rounded-3xl overflow-hidden border border-purple-400/20"
          style={{ background: "var(--bg-surface)" }}
        >
          <Image
            src="/me.png"
            alt="Me"
            width={400}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-14 -right-8 z-20 px-3 py-2 rounded-xl border border-purple-400/25"
          style={{ background: "var(--bg-surface)" }}
        >
          <div className="text-xs font-mono" style={{ color: "#AFA9EC" }}>
            🧠 AI Models
          </div>
          <div
            className="text-sm font-display font-bold"
            style={{ color: "#f0eeff" }}
          ></div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 4,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-12 -left-8 z-20 px-3 py-2 rounded-xl border border-purple-400/25"
          style={{ background: "var(--bg-surface)" }}
        >
          <div className="text-xs font-mono" style={{ color: "#AFA9EC" }}>
            📱 Flutter
          </div>
          <div
            className="text-sm font-display font-bold"
            style={{ color: "#f0eeff" }}
          >
            Play Store / App Store
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
