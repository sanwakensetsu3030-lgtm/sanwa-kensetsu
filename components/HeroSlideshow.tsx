"use client";

import { useEffect, useState } from "react";

const images = ["/hero1.jpg", "/hero2.jpg"];
const GREEN = "#2D6A3F";

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute right-0 inset-y-0 w-3/5 overflow-hidden">
      {/* 写真 */}
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[2500ms]"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: i === 1 ? "120%" : "cover",
            opacity: i === current ? 1 : 0,
            filter: "sepia(55%) contrast(110%) brightness(82%) saturate(65%)",
          }}
        />
      ))}
      {/* 左側グラデーション（緑背景となじませる） */}
      <div
        className="absolute inset-y-0 left-0 z-10"
        style={{
          width: "35%",
          background: `linear-gradient(to right, ${GREEN} 0%, transparent 100%)`,
        }}
      />
      {/* 下側グラデーション（緑背景となじませる） */}
      <div
        className="absolute bottom-0 inset-x-0 z-10"
        style={{
          height: "30%",
          background: `linear-gradient(to top, ${GREEN} 0%, transparent 100%)`,
        }}
      />
      {/* 上側グラデーション */}
      <div
        className="absolute top-0 inset-x-0 z-10"
        style={{
          height: "15%",
          background: `linear-gradient(to bottom, ${GREEN} 0%, transparent 100%)`,
        }}
      />
    </div>
  );
}
