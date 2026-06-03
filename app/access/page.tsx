import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アクセス | 三和建設株式会社",
  description: "三和建設株式会社へのアクセス情報です。東京都北区堀船3丁目43番1号。都電荒川線 梶原駅 徒歩5分。",
};

const GREEN = "#2D6A3F";
const STRAW = "#C8BA6A";
const CREAM = "#F0E8C0";

export default function AccessPage() {
  return (
    <>
      <section style={{ backgroundColor: CREAM }} className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p style={{ color: "#A89840" }} className="font-bold tracking-widest text-sm mb-3 uppercase">Access</p>
          <h1 style={{ color: GREEN }} className="text-4xl md:text-5xl font-black">アクセス</h1>
          <p style={{ color: GREEN }} className="mt-3 text-sm opacity-60">東京都北区堀船3丁目43番1号</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 style={{ color: GREEN }} className="text-2xl font-black mb-6">会社所在地</h2>
            <address className="not-italic space-y-4 text-gray-600">
              <div>
                <p style={{ color: GREEN }} className="font-bold text-sm mb-1">住所</p>
                <p className="text-sm leading-relaxed">〒114-0004<br />東京都北区堀船3丁目43番1号</p>
              </div>
              <div>
                <p style={{ color: GREEN }} className="font-bold text-sm mb-1">最寄り駅</p>
                <p className="text-sm">都電荒川線 梶原駅 徒歩5分</p>
                <p className="text-sm mt-1">JR京浜東北線 王子駅より徒歩15分</p>
              </div>
              <div>
                <p style={{ color: GREEN }} className="font-bold text-sm mb-1">営業時間</p>
                <p className="text-sm">平日 8:00〜17:00</p>
              </div>
            </address>

            <div className="mt-8 rounded-2xl p-6" style={{ backgroundColor: CREAM, borderLeft: `4px solid ${STRAW}` }}>
              <p style={{ color: GREEN }} className="font-bold text-sm mb-3">周辺ランドマーク</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-base">🗞️</span>
                  読売新聞東京本社（近隣）
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-base">🚃</span>
                  都電荒川線 荒川車庫
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-base">🎡</span>
                  荒川遊園地（あらかわ遊園）
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-base">🏛️</span>
                  独立行政法人 造幣局（東京支局）
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md" style={{ border: `2px solid ${STRAW}` }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.583!2d139.7325!3d35.7543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018916c51f63b9b%3A0x9d4f49f9f1b6c2e!2z5p2x5Lqs6YO95YyX5Yy65aGp5Yem77yT5LiB55uu77yU77yT!5e0!3m2!1sja!2sjp!4v1717400000000!5m2!1sja!2sjp"
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="三和建設株式会社 地図"
            />
          </div>
        </div>
      </section>
    </>
  );
}
