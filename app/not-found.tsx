"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="For Our Parents"
            width={72}
            height={72}
            className="rounded-2xl shadow-md"
          />
        </div>

        {/* 404 display */}
        <div className="space-y-2">
          <p className="text-7xl font-extrabold text-orange-300">404</p>
          <h1 className="text-2xl font-bold text-gray-900">Page not found</h1>
          <p className="text-gray-500 text-base leading-relaxed">
            Sorry, we couldn&apos;t find the page you were looking for. It may
            have moved or the link might be incorrect.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 pt-2">
          <Link
            href="/"
            className="w-full min-h-[52px] bg-primary text-white text-lg font-bold
                       rounded-xl px-6 py-3 active:scale-[0.97] transition-all
                       no-underline flex items-center justify-center"
          >
            ← Go Home
          </Link>
          <Link
            href="/quiz"
            className="w-full min-h-[52px] border-2 border-orange-200 text-orange-700
                       bg-orange-50 hover:bg-orange-100 text-lg font-semibold
                       rounded-xl px-6 py-3 active:scale-[0.97] transition-all
                       no-underline flex items-center justify-center"
          >
            Practice Test
          </Link>
        </div>
      </div>
    </div>
  );
}
