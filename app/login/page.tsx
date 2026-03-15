"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";
import { loginUserByNamePin, signupUser, setCurrentUser, clearAllMistakes } from "@/lib/storage";
import { getStateOptions, getDistrictOptions, isAtLargeState } from "@/data/representatives";

type Mode = "login" | "signup";

export default function LoginPage() {
  const { lang, mounted } = useLanguage();
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("login");
  // login fields
  const [email, setEmail] = useState("");
  // signup fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  function formatPhone(raw: string): string {
    const digits = raw.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 3) return digits.length ? `(${digits}` : "";
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }

  const resetFields = () => {
    setEmail(""); setFirstName(""); setLastName("");
    setSignupEmail(""); setPhone(""); setPin("");
    setSelectedState(""); setSelectedDistrict("");
    setError(""); setSuccess("");
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email.trim()) {
      setError(lang === "en" ? "Please enter your email." : lang === "ml" ? "ദയവായി ഇ-മെയിൽ നൽകുക." : "કૃપા કરીને ઇ-મેઇલ દાખલ કરો.");
      return;
    }
    if (pin.length !== 4) {
      setError(lang === "en" ? "Please enter your 4-digit PIN." : lang === "ml" ? "ദയവായി 4 അക്ക പിൻ നൽകുക." : "કૃપા કરીને 4-અંકનો PIN દાખલ કરો.");
      return;
    }

    setLoading(true);

    const user = await loginUserByNamePin(email.trim(), pin);
    if (user) {
      router.push("/");
    } else {
      setError(t("loginError", lang));
      setPin("");
    }
    setLoading(false);
  };

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!firstName.trim() || !lastName.trim()) {
      setError(lang === "en" ? "Please enter your first and last name." : lang === "ml" ? "ദയവായി നിങ്ങളുടെ പേര് നൽകുക." : "કૃપા કરીને તમારું નામ દાખલ કરો.");
      return;
    }
    if (!signupEmail.trim()) {
      setError(lang === "en" ? "Please enter your email address." : lang === "ml" ? "ദയവായി ഇ-മെയിൽ വിലാസം നൽകുക." : "કૃપા કરીને ઇ-મેઇલ સરનામું દાખલ કરો.");
      return;
    }
    if (pin.length !== 4) {
      setError(lang === "en" ? "Please choose a 4-digit PIN." : lang === "ml" ? "ദയവായി 4 അക്ക പിൻ തിരഞ്ഞെടുക്കുക." : "કૃપા કરીને 4-અંકનો PIN પસંદ કરો.");
      return;
    }

    setLoading(true);

    const { user, errorMsg } = await signupUser(firstName.trim(), lastName.trim(), signupEmail.trim(), pin, phone.trim() || undefined, selectedState || undefined, selectedDistrict ? Number(selectedDistrict) : undefined);
    if (user) {
      setSuccess(t("signupSuccess", lang));
      setCurrentUser(user);
      clearAllMistakes(); // fresh start for new user
      setTimeout(() => router.push("/"), 2000);
    } else {
      setError(errorMsg || t("signupError", lang));
    }
    setLoading(false);
  };

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo & welcome */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="For Our Parents"
              width={88}
              height={88}
              className="rounded-2xl shadow-lg"
              priority
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            For Our Parents
          </h1>
          <p className="text-base sm:text-lg text-gray-500">
            {t("heroTagline", lang)}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex rounded-xl overflow-hidden border-2 border-gray-200">
          <button
            onClick={() => { setMode("login"); resetFields(); }}
            className={`flex-1 py-3 text-lg font-semibold transition-all
              ${mode === "login"
                ? "bg-primary text-white"
                : "bg-white text-gray-500 hover:bg-gray-50"}`}
          >
            {t("login", lang)}
          </button>
          <button
            onClick={() => { setMode("signup"); resetFields(); }}
            className={`flex-1 py-3 text-lg font-semibold transition-all
              ${mode === "signup"
                ? "bg-primary text-white"
                : "bg-white text-gray-500 hover:bg-gray-50"}`}
          >
            {t("signup", lang)}
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={mode === "login" ? handleLogin : handleSignup}
          className="space-y-4"
        >
          {mode === "login" ? (
            /* ── Login: email + PIN ── */
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1.5 ml-1">
                  {t("loginEmailLabel", lang)}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full min-h-[56px] px-5 text-lg font-medium
                             rounded-xl border-2 border-gray-200 bg-white
                             focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20
                             text-gray-900 placeholder:text-gray-400"
                  disabled={loading}
                  autoComplete="email"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1.5 ml-1">
                  {t("enterPin", lang)}
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={4}
                  value={pin}
                  onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
                  placeholder="● ● ● ●"
                  className="w-full min-h-[56px] px-5 text-xl text-center font-bold tracking-[0.5em]
                             rounded-xl border-2 border-gray-200 bg-white
                             focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20
                             text-gray-900 placeholder:text-gray-300 placeholder:tracking-[0.3em]"
                  disabled={loading}
                  autoComplete="current-password"
                />
              </div>
            </>
          ) : (
            /* ── Sign Up: first name, last name, email, phone (optional), PIN ── */
            <>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1.5 ml-1">
                    {t("firstName", lang)}
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder={t("enterFirstName", lang)}
                    className="w-full min-h-[56px] px-4 text-base font-medium
                               rounded-xl border-2 border-gray-200 bg-white
                               focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20
                               text-gray-900 placeholder:text-gray-400"
                    disabled={loading}
                    autoComplete="given-name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1.5 ml-1">
                    {t("lastName", lang)}
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder={t("enterLastName", lang)}
                    className="w-full min-h-[56px] px-4 text-base font-medium
                               rounded-xl border-2 border-gray-200 bg-white
                               focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20
                               text-gray-900 placeholder:text-gray-400"
                    disabled={loading}
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1.5 ml-1">
                  {t("email", lang)}
                </label>
                <input
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full min-h-[56px] px-5 text-lg font-medium
                             rounded-xl border-2 border-gray-200 bg-white
                             focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20
                             text-gray-900 placeholder:text-gray-400"
                  disabled={loading}
                  autoComplete="email"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1.5 ml-1">
                  {t("phone", lang)}
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                  placeholder="(555) 123-4567"
                  className="w-full min-h-[56px] px-5 text-lg font-medium
                             rounded-xl border-2 border-gray-200 bg-white
                             focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20
                             text-gray-900 placeholder:text-gray-400"
                  disabled={loading}
                  autoComplete="tel"
                />
              </div>

              {/* State & Congressional District */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1.5 ml-1">
                    {t("state", lang)}
                  </label>
                  <select
                    value={selectedState}
                    onChange={(e) => {
                      setSelectedState(e.target.value);
                      setSelectedDistrict("");
                    }}
                    className="w-full min-h-[56px] px-4 text-base font-medium
                               rounded-xl border-2 border-gray-200 bg-white
                               focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20
                               text-gray-900 appearance-none"
                    disabled={loading}
                  >
                    <option value="">{t("selectState", lang)}</option>
                    {getStateOptions().map((s) => (
                      <option key={s.code} value={s.code}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1.5 ml-1">
                    {t("congressionalDistrict", lang)}
                  </label>
                  <select
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    className="w-full min-h-[56px] px-4 text-base font-medium
                               rounded-xl border-2 border-gray-200 bg-white
                               focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20
                               text-gray-900 appearance-none"
                    disabled={loading || !selectedState}
                  >
                    <option value="">{t("selectDistrict", lang)}</option>
                    {selectedState &&
                      getDistrictOptions(selectedState).map((d) => (
                        <option key={d.value} value={d.value}>
                          {d.value === 0 ? t("atLargeDistrict", lang) : d.label}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              {/* Find your district link */}
              <a
                href="https://www.house.gov/representatives/find-your-representative"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-sm text-primary font-semibold hover:underline -mt-1"
              >
                {t("findYourDistrict", lang)}
              </a>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1.5 ml-1">
                  {t("enterPin", lang)}
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={4}
                  value={pin}
                  onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
                  placeholder="● ● ● ●"
                  className="w-full min-h-[56px] px-5 text-xl text-center font-bold tracking-[0.5em]
                             rounded-xl border-2 border-gray-200 bg-white
                             focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20
                             text-gray-900 placeholder:text-gray-300 placeholder:tracking-[0.3em]"
                  disabled={loading}
                  autoComplete="new-password"
                />
              </div>
            </>
          )}

          {/* Error */}
          {error && (
            <div className="bg-red-50 text-red-700 rounded-xl px-4 py-3 text-center font-semibold text-base border border-red-200 animate-[fadeIn_0.3s_ease-in]">
              {error}
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="bg-green-50 text-green-700 rounded-xl px-4 py-3 text-center font-semibold text-base border border-green-200 animate-[fadeIn_0.3s_ease-in]">
              {success}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={
              loading ||
              pin.length !== 4 ||
              (mode === "login"
                ? !email.trim()
                : !firstName.trim() || !lastName.trim() || !signupEmail.trim())
            }
            className="w-full min-h-[60px] bg-primary text-white text-xl font-bold
                       rounded-xl shadow-md hover:bg-primary-dark
                       active:scale-[0.97] transition-all
                       disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
          >
            {loading
              ? "..."
              : mode === "login"
                ? t("loginButton", lang)
                : t("signupButton", lang)}
          </button>
        </form>

        {/* Switch prompt */}
        <p className="text-center text-sm text-gray-500">
          {mode === "login" ? t("needAccount", lang) : t("alreadyHaveAccount", lang)}{" "}
          <button
            onClick={() => { setMode(mode === "login" ? "signup" : "login"); resetFields(); }}
            className="text-primary font-semibold hover:underline"
          >
            {mode === "login" ? t("signup", lang) : t("login", lang)}
          </button>
        </p>
      </div>
    </div>
  );
}
