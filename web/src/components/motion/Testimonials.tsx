"use client";

import { MessageSquareText } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "./constants";
import { SectionIntro } from "./SectionIntro";

export function Testimonials() {
  return (
    <section className="section-pad bg-[var(--bg)]" data-surface="paper">
      <div className="wrap">
        <SectionIntro title="built on trust and proximity." center />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <motion.figure
              key={testimonial.quote}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="rounded-[var(--radius)] border border-[var(--line)] bg-white p-8 shadow-sm"
            >
              <MessageSquareText className="mb-8 h-6 w-6 text-[var(--ink)]" />
              <blockquote className="display text-2xl font-medium leading-snug tracking-tight">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 text-sm text-muted">
                <span className="font-semibold text-[var(--ink)]">{testimonial.name}</span>
                <span className="mx-2 text-[var(--line)]">/</span>
                {testimonial.role}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
