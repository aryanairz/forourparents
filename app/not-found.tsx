"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, BookOpen } from "lucide-react";

const excuses = [
  "went to get chai ☕",
  "is studying for the civics test 📖",
  "got lost like Congress 🏛️",
  "took a wrong turn at Article III ⚖️",
  "is helping Amma find her reading glasses 👓",
  "ran off to call Thatha 📞",
];

export default function NotFound() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const items = useMemo(() => excuses, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((prev) => (prev + 1) % items.length);
        setVisible(true);
      }, 300);
    }, 2400);
    return () => clearInterval(timer);
  }, [items]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg text-center space-y-8">

        {/* Bobbing logo */}
        <div className="flex justify-center animate-bob">
          <Image
            src="/logo.png"
            alt="For Our Parents"
            width={88}
            height={88}
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* 404 */}
        <p className="text-[7rem] leading-none font-extrabold text-orange-200 select-none animate-popIn">
          404
        </p>

        {/* Headline */}
        <div className="space-y-3 animate-fadeUp" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
            Oops! This page&nbsp;
            <span
              className="inline-block text-orange-500 font-semibold transition-all duration-300"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(-10px)" }}
            >
              {items[idx]}
            </span>
          </h1>

          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-sm mx-auto">
            Don&apos;t worry — finding the right page is easier than passing
            the civics test. (Though you&apos;ll ace that too! 🙏)
          </p>
        </div>

        {/* Fun civics fact card */}
        <div
          className="bg-orange-50 border border-orange-200 rounded-2xl px-5 py-4 text-sm text-orange-700 font-medium leading-relaxed mx-auto max-w-sm animate-fadeUp"
          style={{ animationDelay: "0.2s" }}
        >
          💡 <span className="font-semibold">Fun fact while you&apos;re here:</span>{" "}
          The U.S. Constitution has been amended 27 times. You only need to
          remember 10 of them for the civics test! 😄
        </div>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 justify-center pt-1 animate-fadeUp"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            href="/"
            className="flex items-center justify-center gap-2 min-h-[52px] bg-primary text-white
                       text-base font-bold rounded-xl px-8 py-3
                       hover:bg-primary-dark active:scale-[0.97] transition-all no-underline shadow-md"
          >
            <Home className="w-4 h-4" />
            Take me home
          </Link>
          <Link
            href="/quiz"
            className="flex items-center justify-center gap-2 min-h-[52px]
                       border-2 border-orange-300 text-orange-700 bg-orange-50
                       hover:bg-orange-100 text-base font-semibold rounded-xl px-8 py-3
                       active:scale-[0.97] transition-all no-underline"
          >
            <BookOpen className="w-4 h-4" />
            Practice instead
          </Link>
        </div>

      </div>
    </div>
  );
}
