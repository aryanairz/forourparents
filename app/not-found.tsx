"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Home, BookOpen } from "lucide-react";

const excuses = [
  "went to get chai \u2615",
  "got lost like Congress \ud83c\udfd9\ufe0f",
  "is napping before the interview \ud83d\ude34",
  "is on the phone with Thatha \ud83d\udcde",
  "took a wrong turn at Article III \u2696\ufe0f",
  "is watching the swearing-in ceremony \ud83c\uddfa\ud83c\uddf8",
  "went to find Amma's glasses \ud83d\udc53",
  "is filing a petition to be found \ud83d\udcdc",
  "stepped out to vote \ud83d\uddfe\ufe0f",
  "ran off to make chai \ud83e\udeb4",
];

const facts = [
  "\ud83c\udf0e The U.S. spans six time zones and has every climate � from arctic tundra to tropical rainforest.",
  "\ud83c\udfd5\ufe0f Yellowstone (1872) was the world's first national park. There are now over 400 national park sites.",
  "\ud83d\udc3b Alaska is bigger than Texas, California, and Montana combined.",
  "\ud83e\udd20 The King Ranch in South Texas is larger than the entire state of Rhode Island.",
  "\ud83c\udf55 Americans eat roughly 3 billion pizzas a year.",
  "\ud83e\udd20 The fortune cookie was invented in San Francisco, not China.",
  "\ud83e\udd67 Apple pie isn't actually American � it originated in England.",
  "\ud83d\udcd6 The first American cookbook was published in 1796.",
  "\u26a1 Texas has its own power grid, separate from the rest of the country.",
  "\ud83c\uddfa\ud83c\uddf8 The original U.S. flag had 13 stars and 13 stripes � one for each colony.",
  "\ud83c\udf3a Hawaii was the last state admitted to the Union, in 1959.",
  "\ud83e\udd83 Benjamin Franklin wanted the wild turkey as the national bird instead of the bald eagle.",
  "\ud83d\uddfd The Statue of Liberty arrived from France in 350 pieces in 1885.",
  "\ud83d\udcdc The U.S. Constitution is the world's oldest still-active written national constitution.",
  "\ud83d\udee3\ufe0f The interstate highway system stretches over 48,000 miles.",
  "\ud83c\udfe6 The Mall of America could fit seven Yankee Stadiums inside.",
  "\ud83d\udcda The Library of Congress holds over 170 million items � the world's largest library.",
  "\ud83c\udfd6\ufe0f The U.S. has more coastline than any country except Canada.",
  "\ud83c\udf54 One in every eight Americans has worked at McDonald's at some point.",
];

export default function NotFound() {
  const [excuseIdx, setExcuseIdx] = useState(0);
  const [excuseVisible, setExcuseVisible] = useState(true);
  const [factIdx, setFactIdx] = useState(0);
  const [factVisible, setFactVisible] = useState(true);
  const excuseList = useMemo(() => excuses, []);
  const factList = useMemo(() => facts, []);

  useEffect(() => {
    const t = setInterval(() => {
      setExcuseVisible(false);
      setTimeout(() => {
        setExcuseIdx((p) => (p + 1) % excuseList.length);
        setExcuseVisible(true);
      }, 280);
    }, 2500);
    return () => clearInterval(t);
  }, [excuseList]);

  useEffect(() => {
    const t = setInterval(() => {
      setFactVisible(false);
      setTimeout(() => {
        setFactIdx((p) => (p + 1) % factList.length);
        setFactVisible(true);
      }, 280);
    }, 5000);
    return () => clearInterval(t);
  }, [factList]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg text-center space-y-8">

        <p className="text-[7rem] leading-none font-extrabold text-orange-200 select-none animate-popIn">
          404
        </p>

        <div className="space-y-3 animate-fadeUp" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Oops! This page�
          </h1>
          <div className="h-10 flex items-center justify-center overflow-hidden">
            <span
              className="text-xl sm:text-2xl font-semibold text-orange-500 transition-all duration-300 whitespace-nowrap"
              style={{
                opacity: excuseVisible ? 1 : 0,
                transform: excuseVisible ? "translateY(0)" : "translateY(-8px)",
              }}
            >
              {excuseList[excuseIdx]}
            </span>
          </div>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-sm mx-auto pt-1">
            Don&apos;t worry � finding this page is easier than passing the
            civics test. (And you&apos;ll ace that too! \ud83d\ude4f)
          </p>
        </div>

        <div
          className="bg-orange-50 border border-orange-200 rounded-2xl px-5 py-4 mx-auto max-w-sm animate-fadeUp min-h-[80px] flex items-center justify-center"
          style={{ animationDelay: "0.2s" }}
        >
          <p
            className="text-sm text-orange-700 font-medium leading-relaxed transition-all duration-300"
            style={{
              opacity: factVisible ? 1 : 0,
              transform: factVisible ? "translateY(0)" : "translateY(-6px)",
            }}
          >
            <span className="font-semibold">Did you know?</span>{" "}
            {factList[factIdx]}
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-3 justify-center pt-1 animate-fadeUp"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            href="/"
            className="flex items-center justify-center gap-2 min-h-[52px] bg-primary text-white text-base font-bold rounded-xl px-8 py-3 hover:bg-primary-dark active:scale-[0.97] transition-all no-underline shadow-md"
          >
            <Home className="w-4 h-4" />
            Take me home
          </Link>
          <Link
            href="/quiz"
            className="flex items-center justify-center gap-2 min-h-[52px] border-2 border-orange-300 text-orange-700 bg-orange-50 hover:bg-orange-100 text-base font-semibold rounded-xl px-8 py-3 active:scale-[0.97] transition-all no-underline"
          >
            <BookOpen className="w-4 h-4" />
            Practice instead
          </Link>
        </div>

      </div>
    </div>
  );
}
