"use client";

import Link from "next/link";
import { useState } from "react";

const GREEN = "#2D6A3F";
const GREEN_DARK = "#2D6A3F";
const STRAW = "#C8BA6A";

const navLinks = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "会社概要" },
  { href: "/services", label: "事業内容・実績" },
  { href: "/access", label: "アクセス" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: GREEN }} className="shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight">
          <span style={{ color: STRAW }} className="font-black text-xl tracking-wide">三和建設株式会社</span>
          <span className="text-white text-xs tracking-widest opacity-70">SANWA KENSETSU CO., LTD. est.1952</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-sm font-medium transition-colors duration-200 hover:opacity-80"
            >
              {link.label}
            </Link>
          ))}
          {/* お問い合わせ・採用情報ボタン — 常時表示 */}
          <Link
            href="/contact"
            className="text-sm font-bold rounded transition-colors duration-200"
            style={{
              backgroundColor: STRAW,
              color: GREEN_DARK,
              padding: "0.5rem 1.25rem",
              display: "inline-block",
            }}
          >
            お問い合わせ・採用情報
          </Link>
        </nav>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div style={{ backgroundColor: GREEN_DARK }} className="md:hidden px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-white py-3 border-b text-sm font-medium hover:opacity-80"
              style={{ borderColor: "#3D8A55" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-4 text-center text-sm font-bold rounded"
            style={{ backgroundColor: STRAW, color: GREEN_DARK, padding: "0.75rem" }}
            onClick={() => setMenuOpen(false)}
          >
            お問い合わせ・採用情報
          </Link>
        </div>
      )}
    </header>
  );
}
