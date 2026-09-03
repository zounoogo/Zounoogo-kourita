"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  /** délai avant l'animation (s) — utile pour décaler des éléments d'une liste */
  delay?: number;
  className?: string;
  /** balise HTML rendue (par défaut div) */
  as?: "div" | "li" | "section" | "article";
}

/**
 * Révèle son contenu quand il entre dans le viewport (fade + léger slide).
 * Respecte `prefers-reduced-motion` : dans ce cas, aucun mouvement.
 */
export function FadeIn({ children, delay = 0, className, as = "div" }: FadeInProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      {children}
    </MotionTag>
  );
}
