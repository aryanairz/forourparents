"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { getCurrentUser, logoutUser } from "@/lib/storage";
import { t } from "@/lib/i18n";
import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Lang } from "@/data/questions";
import { Globe, Menu, X, LogOut, LogIn, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const langMeta: Record<Lang, { short: string; native: string }> = {
  en: { short: "EN", native: "English" },
  ml: { short: "ML", native: "മലയാളം" },
  gu: { short: "GU", native: "ગુજરાતી" },
  vi: { short: "VI", native: "Tiếng Việt" },
  tl: { short: "TL", native: "Tagalog" },
  es: { short: "ES", native: "Español" },
};

export default function Header() {
  const { lang, setLang, mounted } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [preferredLang, setPreferredLang] = useState<Lang | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const langRef = useRef<HTMLDivElement>(null);

  const isLandingPage = pathname === "/";
  const isAuthPage = pathname === "/login" || pathname === "/onboarding";

  useEffect(() => {
    const user = getCurrentUser();
    setIsLoggedIn(!!user);
    if (user?.preferredLang && user.preferredLang !== "en") {
      setPreferredLang(user.preferredLang);
    }
  }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = () => {
    logoutUser();
    setIsLoggedIn(false);
    setMobileOpen(false);
    window.location.href = "/";
  };

  const l = (en: string, ml: string, gu?: string, vi?: string, tl?: string, es?: string) =>
    lang === "en" ? en : lang === "ml" ? ml : lang === "gu" ? (gu ?? en) : lang === "vi" ? (vi ?? en) : lang === "tl" ? (tl ?? en) : (es ?? en);

  // ── Auth pages: no header ──
  if (isAuthPage) return null;

  // ── Landing Header (navy/red American theme) ──
  if (isLandingPage && !isLoggedIn) {
    return (
      <header style={{ background: "#FFFFFF", borderBottom: "1px solid #E5E7EB", height: 64, position: "sticky", top: 0, zIndex: 50 }}>
        <div className="mx-auto px-6 h-full flex items-center justify-between" style={{ maxWidth: 1100 }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
            <Image src="/logo.png" alt="For Our Parents" width={34} height={34} className="rounded-xl flex-shrink-0" />
            <span
              className="font-bold leading-tight hidden xs:block"
              style={{ fontFamily: "var(--font-dm-sans, system-ui, sans-serif)", fontSize: 17, fontWeight: 700, color: "#1B2A4A" }}
            >
              For Our Parents
            </span>
          </Link>

          {/* Right side: language selector + CTA */}
          <div className="flex items-center gap-3">
            {mounted && (
              <div className="relative" ref={langRef}>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setLangOpen(!langOpen); }}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-transparent border-none cursor-pointer"
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    color: "#6B7280",
                    textTransform: "uppercase" as const,
                    fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                  }}
                  aria-label={l("Select site language", "സൈറ്റിന്റെ ഭാഷ തിരഞ്ഞെടുക്കുക", "સાઇટની ભાષા પસંદ કરો", "Chọn ngôn ngữ trang web", "Pumili ng wika")}
                  aria-expanded={langOpen}
                >
                  {langMeta[lang].short}
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                    style={{ color: "#9CA3AF" }}
                  />
                </button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.96 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute right-0 top-full mt-2 bg-white rounded-2xl overflow-hidden z-50"
                      style={{ width: 200, boxShadow: "0 8px 24px rgba(0,0,0,0.12)", border: "1px solid #E5E7EB" }}
                      role="menu"
                    >
                      {(Object.keys(langMeta) as Lang[]).map((code) => (
                        <button
                          key={code}
                          role="menuitem"
                          onClick={() => { setLang(code); setLangOpen(false); }}
                          className="w-full px-4 py-3 text-left flex items-center justify-between transition-colors"
                          style={{
                            fontSize: 15,
                            fontWeight: lang === code ? 700 : 500,
                            color: lang === code ? "#C41E3A" : "#374151",
                            backgroundColor: lang === code ? "#FFF0F3" : "transparent",
                            fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                          }}
                          onMouseEnter={(e) => {
                            if (lang !== code) (e.currentTarget as HTMLElement).style.backgroundColor = "#F9FAFB";
                          }}
                          onMouseLeave={(e) => {
                            if (lang !== code) (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                          }}
                        >
                          <span>{langMeta[code].native}</span>
                          {lang === code && <Check size={16} style={{ color: "#C41E3A" }} />}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            <Link
              href="/onboarding"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "8px 20px",
                borderRadius: 10,
                backgroundColor: "#C41E3A",
                color: "#FFFFFF",
                fontSize: 13,
                fontWeight: 700,
                textTransform: "uppercase" as const,
                letterSpacing: "0.06em",
                textDecoration: "none",
                fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                boxShadow: "0 3px 0 #8B1429",
                transform: "translateY(0)",
                transition: "transform 0.1s ease, box-shadow 0.1s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 0 #8B1429";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 3px 0 #8B1429";
              }}
            >
              {t("landingGetStarted", lang)}
            </Link>
          </div>
        </div>
      </header>
    );
  }

  // ── Full Header (all other pages / logged-in users) ──
  const navLinks: { href: string; label: Record<Lang, string> }[] = [
    { href: "/dashboard", label: { en: "Home", ml: "ഹോം", gu: "હોમ", vi: "Trang chủ", tl: "Home", es: "Inicio" } },
    { href: "/quiz", label: { en: "Practice Test", ml: "പ്രാക്ടീസ് ടെസ്റ്റ്", gu: "પ્રેક્ટિસ ટેસ્ટ", vi: "Bài thi thử", tl: "Pagsusulit", es: "Examen de Práctica" } },
    { href: "/eligibility", label: { en: "Do You Qualify?", ml: "യോഗ്യത?", gu: "શું તમે લાયક છો?", vi: "Điều kiện?", tl: "Kwalipikado Ka?", es: "¿Calificas?" } },
    { href: "/help", label: { en: "Help", ml: "സഹായം", gu: "મદદ", vi: "Trợ giúp", tl: "Tulong", es: "Ayuda" } },
  ];

  const isActive = (href: string) =>
    href === "/dashboard" ? pathname === "/dashboard" || pathname === "/" : pathname.startsWith(href);

  return (
    <header style={{ background: "#1B2A4A", borderBottom: "1px solid #243658" }} className="sticky top-0 z-50">
      <div className="max-w-grid mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0 group">
          <Image src="/logo.png" alt="For Our Parents" width={36} height={36} className="rounded-xl flex-shrink-0" />
          <span className="font-bold text-[1.0625rem] leading-tight font-serif hidden xs:block transition-colors" style={{ color: "#FFFFFF" }}>
            For Our Parents
          </span>
        </Link>

        {/* ── Desktop Nav (centered) ── */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={false}
              className="relative px-4 py-2 text-[0.9375rem] font-medium transition-colors no-underline min-h-[40px] flex items-center whitespace-nowrap"
              style={{ color: isActive(link.href) ? "#FFFFFF" : "rgba(255,255,255,0.65)", fontWeight: isActive(link.href) ? 600 : 500 }}
            >
              {link.label[lang]}
              {isActive(link.href) && (
                <div
                  className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full"
                  style={{ background: "#C41E3A" }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* ── Right Side ── */}
        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">

          {/* Language Toggle — switches between English and preferred language */}
          {mounted && (
            <button
              type="button"
              onClick={() => {
                if (preferredLang && preferredLang !== "en") {
                  setLang(lang === "en" ? preferredLang : "en");
                } else {
                  // No preferred lang set (or it's English) — cycle through all
                  const order: Lang[] = Object.keys(langMeta) as Lang[];
                  const idx = order.indexOf(lang);
                  setLang(order[(idx + 1) % order.length]);
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all min-h-[40px] min-w-[40px]"
              style={{ border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.08)" }}
              aria-label={l("Switch language", "ഭാഷ മാറ്റുക", "ભાષા બદલો", "Đổi ngôn ngữ", "Palitan ang wika")}
            >
              <Globe size={16} style={{ color: "#C41E3A" }} className="flex-shrink-0" />
              <span className="hidden sm:inline">{langMeta[lang].native}</span>
              <span className="sm:hidden">{langMeta[lang].short}</span>
            </button>
          )}

          {/* Login / Logout — desktop */}
          {mounted && !isLoggedIn && (
            <Link
              href="/login"
              prefetch={false}
              className="hidden sm:flex items-center gap-1.5 px-5 py-2 rounded-btn text-sm font-semibold transition-all min-h-[40px] no-underline hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: "#C41E3A", color: "#FFFFFF", boxShadow: "0 2px 0 #8B1429" }}
            >
              <LogIn size={15} />
              {t("login", lang)}
            </Link>
          )}
          {mounted && isLoggedIn && (
            <button
              onClick={handleLogout}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-btn text-sm font-medium transition-colors min-h-[40px]"
              style={{ border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)" }}
            >
              <LogOut size={15} />
              {t("logout", lang)}
            </button>
          )}

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-btn min-h-[40px] min-w-[40px] flex items-center justify-center transition-colors"
            style={{ color: "rgba(255,255,255,0.8)" }}
            aria-label={mobileOpen
              ? l("Close menu", "മെനു അടയ്ക്കുക", "મેનુ બંધ કરો", "Đóng menu", "Isara ang menu")
              : l("Open menu", "മെനു തുറക്കുക", "મેનુ ખોલો", "Mở menu", "Buksan ang menu")}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu (slide drawer) ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] shadow-xl z-50 md:hidden flex flex-col"
              style={{ background: "#1B2A4A" }}
            >
              <div className="flex items-center justify-between px-5 h-16" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <span className="font-bold text-[1rem]" style={{ color: "#FFFFFF", fontFamily: "var(--font-dm-sans, system-ui, sans-serif)" }}>
                  {l("Menu", "മെനു", "મેનુ", "Menu", "Menu")}
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-btn min-h-[40px] min-w-[40px] flex items-center justify-center"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                  aria-label={l("Close menu", "മെനു അടയ്ക്കുക", "મેનુ બંધ કરો", "Đóng menu", "Isara ang menu")}
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={false}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3.5 rounded-btn text-[1rem] font-medium no-underline transition-colors min-h-[48px] flex items-center"
                    style={{
                      color: isActive(link.href) ? "#FFFFFF" : "rgba(255,255,255,0.65)",
                      background: isActive(link.href) ? "rgba(196,30,58,0.3)" : "transparent",
                      fontWeight: isActive(link.href) ? 600 : 500,
                    }}
                  >
                    {link.label[lang]}
                  </Link>
                ))}
              </nav>
              <div className="px-4 pb-6 pt-2 space-y-2" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                {!isLoggedIn ? (
                  <Link
                    href="/login"
                    prefetch={false}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-btn text-[1rem] font-semibold no-underline min-h-[48px] transition-colors"
                    style={{ background: "#C41E3A", color: "#FFFFFF", boxShadow: "0 3px 0 #8B1429" }}
                  >
                    <LogIn size={18} />
                    {t("login", lang)}
                  </Link>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-btn text-[1rem] font-medium w-full min-h-[48px] transition-colors"
                    style={{ color: "#FCA5A5", border: "1px solid rgba(252,165,165,0.3)" }}
                  >
                    <LogOut size={18} />
                    {t("logout", lang)}
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
