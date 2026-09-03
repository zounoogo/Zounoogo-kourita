"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import { NavLinks } from "@/components/layout/NavLinks";

/**
 * En-tête discret affiché uniquement sur mobile / tablette (caché en lg+).
 * Il apparaît (glisse depuis le haut, fond flouté) après un petit défilement.
 */
export function MobileHeader() {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {shown && (
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -24 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-x-0 top-0 z-40 border-b border-navy-lighter/60 bg-navy/85 backdrop-blur lg:hidden"
        >
          <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-4 px-6 py-3">
            <a
              href="#content"
              className="font-mono text-sm font-semibold text-white"
            >
              {site.shortName}
            </a>
            <NavLinks orientation="horizontal" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
