"use client";
import { motion } from "framer-motion";

export default function Reveal({ children, delay = 0, className, onLoad = false }) {
  const anim = onLoad ? { animate: { opacity: 1, y: 0 } } : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 14 }} {...anim} transition={{ duration: 0.55, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}
