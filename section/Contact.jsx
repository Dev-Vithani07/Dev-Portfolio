"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const services = ["AI / ML", "App", "Full Stack Web App"];
  const budgets = ["₹2k - ₹5k", "₹5k - ₹10k", "₹10k - ₹50k", "₹50k+"];

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.com$/.test(formData.email)) {
      newErrors.email = "Enter valid email (must include @ and .com)";
    }

    if (!service) newErrors.service = "Select a service";
    if (!budget) newErrors.budget = "Select a budget";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    setErrors(validate());
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    setTouched({
      name: true,
      email: true,
      service: true,
      budget: true,
      message: true,
    });

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          ...formData,
          service,
          budget,
        },
        process.env.NEXT_PUBLIC_ACCOUNT_ID
      );

      setToast({ type: "success", text: "Message sent successfully!" });

      setFormData({ name: "", email: "", message: "" });
      setService("");
      setBudget("");
      setTouched({});
    } catch (err) {
      console.log("EMAIL ERROR:", err);
      setToast({ type: "error", text: "Failed to send message." });
    }

    setLoading(false);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 md:px-24 py-24 flex flex-col justify-center relative"
      style={{ background: "var(--bg-base)" }}
    >
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="fixed top-6 right-6 px-5 py-3 rounded-lg text-sm z-50"
            style={{
              background:
                toast.type === "success"
                  ? "rgba(93,202,165,0.15)"
                  : "rgba(255,100,100,0.15)",
              border:
                toast.type === "success"
                  ? "1px solid #5DCAA5"
                  : "1px solid #ff6b6b",
              color: "#fff",
            }}
          >
            {toast.text}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p
          className="font-mono text-xs tracking-widest uppercase mb-3"
          style={{ color: "#7F77DD" }}
        >
          04 / Contact
        </p>

        <h2
          className="font-display font-extrabold leading-none tracking-tight"
          style={{
            fontSize: "clamp(36px, 4vw, 52px)",
            color: "#f0eeff",
          }}
        >
          Let’s Work Together
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            I am always open to discussing new projects, creative ideas or opportunities.
          </p>

          {[
            { icon: "ri-discord-line", title: "Discord", value: "dev_vithani" },
            { icon: "ri-twitter-x-line", title: "X", value: "@@Dev_1405_" },
            { icon: "KG", title: "Kaggle", value: "kaggle.com/devvithani" },
            { icon: "ri-mail-line", title: "Email", value: "devvithani.k@gmail.com" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 rounded-xl border"
              style={{
                background: "var(--bg-surface)",
                borderColor: "var(--border-default)",
              }}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-(var(--bg-elevated)) text-purple-400">
                {item.icon === "KG" ? (
                  "KG"
                ) : (
                  <i className={`${item.icon} text-lg`}></i>
                )}
              </div>

              <div>
                <p className="text-xs text-(var(--text-muted))">{item.title}</p>
                <p className="text-sm font-semibold text-white">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 p-6 rounded-2xl border"
          style={{
            background: "var(--bg-surface)",
            borderColor: "var(--border-default)",
          }}
        >
          <div>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={() => handleBlur("name")}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#7F77DD]"
              style={{
                background: "var(--bg-elevated)",
                borderColor:
                  errors.name && touched.name
                    ? "#ff6b6b"
                    : "var(--border-subtle)",
                color: "#fff",
              }}
            />
            {errors.name && touched.name && (
              <p className="text-xs mt-1 text-red-400">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur("email")}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#7F77DD]"
              style={{
                background: "var(--bg-elevated)",
                borderColor:
                  errors.email && touched.email
                    ? "#ff6b6b"
                    : "var(--border-subtle)",
                color: "#fff",
              }}
            />
            {errors.email && touched.email && (
              <p className="text-xs mt-1 text-red-400">{errors.email}</p>
            )}
          </div>

          <div>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              onBlur={() => handleBlur("service")}
              className="w-full p-3 rounded-lg border"
              style={{
                background: "var(--bg-elevated)",
                borderColor:
                  errors.service && touched.service
                    ? "#ff6b6b"
                    : "var(--border-subtle)",
                color: service ? "#fff" : "var(--text-muted)",
              }}
            >
              <option value="">Something in mind?</option>
              {services.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            {errors.service && touched.service && (
              <p className="text-xs mt-1 text-red-400">{errors.service}</p>
            )}
          </div>

          <div>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              onBlur={() => handleBlur("budget")}
              className="w-full p-3 rounded-lg border"
              style={{
                background: "var(--bg-elevated)",
                borderColor:
                  errors.budget && touched.budget
                    ? "#ff6b6b"
                    : "var(--border-subtle)",
                color: budget ? "#fff" : "var(--text-muted)",
              }}
            >
              <option value="">Select Budget</option>
              {budgets.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
            {errors.budget && touched.budget && (
              <p className="text-xs mt-1 text-red-400">{errors.budget}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={() => handleBlur("message")}
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border resize-none focus:outline-none focus:ring-2 focus:ring-[#7F77DD]"
              style={{
                background: "var(--bg-elevated)",
                borderColor:
                  errors.message && touched.message
                    ? "#ff6b6b"
                    : "var(--border-subtle)",
                color: "#fff",
              }}
            />
            {errors.message && touched.message && (
              <p className="text-xs mt-1 text-red-400">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="py-3 rounded-lg font-semibold"
            style={{
              background: "var(--gradient-button)",
              opacity: loading ? 0.6 : 1,
              color: "#fff",
            }}
          >
            {loading ? "Sending..." : "Send Message →"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
