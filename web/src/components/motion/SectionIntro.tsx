"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export function SectionIntro({
  eyebrow,
  title,
  body,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{title}</h2>
      {body ? <p className="lead mt-5 text-lg leading-8">{body}</p> : null}
    </motion.div>
  );
}
