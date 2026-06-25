import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "三和建設株式会社 | 東京都北区の建設・土木工事",
  description:
    "三和建設株式会社は東京都北区を拠点に、区道の維持管理・補修、公園・河川工事など地域インフラを守る建設会社です。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta name="google-site-verification" content="t-ST77WRARa8R6alYj4OXITEhYsAC8f9ZftJkuxu2_k" />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        {/* 透かし文字：画面右側に横向き固定表示、右端が見切れる */}
        <div
          style={{
            position: "fixed",
            top: "calc(50% + 38px)",
            right: 0,
            transform: "translateX(calc(50% - clamp(14px, 3vw, 36px))) translateY(-50%) rotate(-90deg)",
            pointerEvents: "none",
            zIndex: 1,
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          <p style={{
            fontSize: "clamp(48px, 10vw, 120px)",
            fontWeight: 900,
            color: "#2D6A3F",
            opacity: 0.07,
            letterSpacing: "0.05em",
            lineHeight: 1,
            fontFamily: "'Noto Sans JP', sans-serif",
          }}>三和建設株式会社</p>
        </div>
      </body>
    </html>
  );
}
