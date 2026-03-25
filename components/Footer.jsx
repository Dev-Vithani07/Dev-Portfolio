"use client";

import React from "react";
import { motion } from "framer-motion";
import { RiLinkedinLine, RiTwitterXLine, RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer
      className="px-6 md:px-12 lg:px-24 py-10 border-t"
      style={{
        background: "var(--bg-base)",
        borderColor: "var(--border-subtle)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-0"
      >

        <div className="flex-1 flex flex-col gap-2 text-center md:text-left items-center md:items-start w-full">
          <h3
            className="font-display font-bold text-lg"
            style={{ color: "#f0eeff" }}
          >
            Dev Vithani
          </h3>
          <span
            className="text-xs font-mono"
            style={{ color: "var(--text-muted)" }}
          >
            Building clean & modern experiences
          </span>
        </div>

        <div className="flex-1 flex justify-center gap-6 text-xs font-mono w-full">
          {["Home", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:opacity-80 transition"
              style={{ color: "var(--text-secondary)" }}
            >
              {link}
            </a>
          ))}
        </div>


        <div className="flex-1 flex justify-center md:justify-end gap-5 text-lg w-full">
          <a
            href="https://www.instagram.com/_dev__1405/"
            className="transition hover:scale-110"
            style={{ color: "#7F77DD" }}
          >
            <RiInstagramLine />
          </a>

          <a
            href="https://www.linkedin.com/in/dev-vithani/"
            className="transition hover:scale-110"
            style={{ color: "#5DCAA5" }}
          >
            <RiLinkedinLine />
          </a>

          <a
            href="https://x.com/Dev_1405_"
            className="transition hover:scale-110"
            style={{ color: "#85B7EB" }}
          >
            <RiTwitterXLine />
          </a>
        </div>
      </motion.div>

      <div className="mt-8 text-center text-xs font-mono">
        <span style={{ color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} Dev Vithani. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
