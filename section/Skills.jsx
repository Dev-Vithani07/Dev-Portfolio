"use client";

import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = {
    ai: {
      label: "AI / ML",
      color: "#7F77DD",
      bg: "rgba(127, 119, 221, .08)",
      border: "rgba(127, 119, 221, .2)",
      items: [
        { name: "Data Visualization", level: 95 },
        { name: "Scikit-Learn", level: 90 },
        { name: "Pythorch", level: 80 },
        { name: "HuggingFace", level: 80 },
        { name: "Langchain", level: 78 },
      ],
    },
    flutter: {
      label: "Flutter",
      color: "#85B7EB",
      bg: "rgba(133, 183, 235, .08)",
      border: "rgba(133, 183, 235, .2)",
      items: [
        { name: "Flutter", level: 95 },
        { name: "Dart", level: 90 },
        { name: "State Management", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "API Calling", level: 80 },
      ],
    },
    fullstack: {
      label: "FullStack",
      color: "#5DCAA5",
      bg: "rgba(93, 202, 165, .08)",
      border: "rgba(93, 202, 165, .2)",
      items: [
        { name: "React / Next.js", level: 95 },
        { name: "Python", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "FastApi", level: 85 },
        { name: "Figma", level: 80 },
      ],
    },
  };
  return (
    <section
      id="skills"
      className="min-h-screen px-24 py-24 flex flex-col justify-center"
      style={{ background: "var(--bg-base)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
        className="mb-16"
      >
        <p
          className="font-mono text-xs tracking-widest uppercase mb-3"
          style={{ color: "#7F77DD" }}
        >
          02 / skills
        </p>
        <h2
          className="font-display font-extrabold leading-none tracking-tight"
          style={{ fontSize: "clamp(36px, 4vw, 52px)", color: "#f0eeff" }}
        >
          Tech Stack
        </h2>
      </motion.div>

      <div className="grid grid-cols-3 gap-6">
        {Object.values(skills).map((domain, i) => (
          <motion.div
            key={domain.label}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: i * 0.15,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            viewport={{ once: true }}
            whileHover={{ borderColor: domain.color, scale: 1.02 }}
            className="flex flex-col gap-5 p-6 rounded-2xl border"
            style={{
              background: "var(--bg-surface)",
              borderColor: "rgba(255,255,255,0.07)",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: domain.color }}
              />
              <h3
                className="font-display font-bold text-sm"
                style={{ color: "#f0eeff" }}
              >
                {domain.label}
              </h3>
            </div>

            {domain.items.map((skill, j) => (
              <div key={skill.name} className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <span
                    className="font-mono text-xs"
                    style={{ color: "rgba(160,155,210,0.6)" }}
                  >
                    {skill.name}
                  </span>
                  <span
                    className="font-mono text-xs"
                    style={{ color: domain.color }}
                  >
                    {skill.level}%
                  </span>
                </div>

                <div
                  className="w-full h-1 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1,
                      delay: i * 0.15 + j * 0.08,
                      ease: [0.22, 0.61, 0.36, 1],
                    }}
                    viewport={{ once: true }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${domain.color}, rgba(255,255,255,0.3))`,
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
