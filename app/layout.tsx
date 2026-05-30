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
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
