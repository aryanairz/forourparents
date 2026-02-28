"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";
import { loginUser } from "@/lib/storage";

export default function LoginPage() {
  const { lang } = useLanguage();
  const router = useRouter();
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(false);
    setLoading(true);

    const user = await loginUser("മണിയമ്മ", pin);

    if (user) {
      router.push("/");
    } else {
      setError(true);
      setPin("");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6">
        {/* Welcome header */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <Image
              src="/flag.png"
              alt="American Flag"
              width={80}
              height={54}
              className="rounded-lg shadow-md"
              priority
            />
          </div>
          <h1 className="text-q-large font-bold text-primary">
            {t("loginWelcome", lang)}
          </h1>
          <p className="text-lg text-gray-600">{t("enterPin", lang)}</p>
        </div>

        {/* PIN input form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="tel"
              inputMode="numeric"
              maxLength={4}
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
              placeholder={t("pinPlaceholder", lang)}
              className="w-full min-h-[64px] px-6 text-2xl text-center font-bold
                         rounded-2xl border-2 border-gray-300
                         focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20
                         text-gray-900"
              autoFocus
              disabled={loading}
            />
          </div>

          {error && (
            <div className="bg-danger-light text-danger rounded-xl px-4 py-3 text-center font-semibold animate-[fadeIn_0.3s_ease-in]">
              {t("loginError", lang)}
            </div>
          )}

          <button
            type="submit"
            disabled={pin.length !== 4 || loading}
            className="w-full min-h-[64px] bg-primary text-white text-xl font-bold
                       rounded-2xl shadow-lg hover:bg-primary-dark
                       active:scale-[0.97] transition-all
                       disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
          >
            {loading ? "..." : t("loginButton", lang)}
          </button>
        </form>

        {/* Help text */}
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 text-center">
          <p className="text-sm text-blue-800">
            {lang === "en"
              ? "Default PIN is 1234. You can change it in Supabase."
              : "സാധാരണ പിൻ 1234 ആണ്."}
          </p>
        </div>
      </div>
    </div>
  );
}
