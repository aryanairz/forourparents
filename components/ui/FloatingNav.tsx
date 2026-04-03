"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";

export default function FloatingNav() {
  const { lang } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -64, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -64, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          aria-label="Floating navigation"
          style={{
            position: "fixed",
            top: 16,
            left: "50%",
            x: "-50%",
            zIndex: 1000,
            background: "rgba(255,255,255,0.96)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderRadius: 100,
            border: "1px solid #E5E7EB",
            boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
            padding: "8px 8px 8px 20px",
            display: "flex",
            alignItems: "center",
            gap: 16,
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              fontWeight: 700,
              fontSize: 14,
              color: "#1B2A4A",
              fontFamily: "var(--font-dm-sans, sans-serif)",
              letterSpacing: "-0.01em",
            }}
          >
            🇺🇸 For Our Parents
          </span>
          <Link
            href="/login"
            style={{
              background: "#C41E3A",
              color: "white",
              fontWeight: 700,
              fontSize: 13,
              padding: "9px 22px",
              borderRadius: 100,
              textDecoration: "none",
              fontFamily: "var(--font-dm-sans, sans-serif)",
              letterSpacing: "0.04em",
              textTransform: "uppercase" as const,
              transition: "background 0.15s ease",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            {t("landingGetStarted", lang)}
          </Link>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
