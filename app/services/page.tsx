import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "事業内容・施工実績 | 三和建設株式会社",
  description: "三和建設株式会社の事業内容と施工実績をご紹介します。",
};

const GREEN = "#2D6A3F";
const STRAW = "#C8BA6A";
const CREAM = "#F0E8C0";

const services = [
  {
    icon: "🛣️",
    title: "道路維持管理・補修工事",
    tag: "メイン事業",
    desc: "東京都北区役所から委託を受け、区内の道路（区道）の日常的なメンテナンス・点検・補修・整備を担当。車道・歩道の舗装、L形ブロック、防護柵、集水桝や取付管など、地域の道路を365日守り続けています。",
    items: ["車道・歩道の舗装工事", "L形ブロック・防護柵設置", "集水桝・取付管工事", "緊急補修対応"],
    main: true,
  },
  {
    icon: "🌳",
    title: "公園・河川・下水道整備・学校グラウンド工事",
    tag: "インフラ整備",
    desc: "地域住民が安心して利用できる公園の整備・改修、河川護岸工事、下水道整備、学校グラウンドの整備まで幅広く対応しています。子どもたちが安全に活動できる環境づくりも担っています。",
    items: ["公園施設整備・改修", "学校グラウンド整備", "河川護岸補修工事", "下水道・汚水桝等整備"],
    main: false,
  },
];

const achievements = [
  { area: "東京都第六建設事務所", type: "路面補修工事（25・六の13・歩道改善）", scale: "2014.03〜2014.11" },
  { area: "東京都北区", type: "幹線区道新設整備工事・汚水桝等調整工事", scale: "2014.12〜2015.06" },
  { area: "東京都北区", type: "公共施設等雨水流出抑制施設整備工事（赤羽台四丁目公園）", scale: "2015.11〜2016.03" },
  { area: "東京都北区", type: "滝野川六、七丁目付近下水道再構築工事（その2）", scale: "2015.07〜2016.03" },
  { area: "東京都財務局", type: "妙正寺川整備工事（その201-2）J.V", scale: "2015.07〜2018.01" },
  { area: "東京都北区", type: "道路維持工事・汚水桝等調整工事（北1326号）", scale: "2017.01〜2017.03" },
  { area: "東京都北区", type: "滝野川桜通りバリアフリー化工事・汚水桝等調整工事", scale: "2017.07〜2018.03" },
  { area: "東京都北区", type: "板橋駅前広場バリアフリー化工事・汚水桝等調整工事", scale: "2018.06〜2019.03" },
  { area: "東京都北区", type: "田端中学校新築グラウンド整備工事", scale: "2018.02〜2019.02" },
  { area: "東京都北区", type: "補助87号線街路築造工事・交差点改良工事", scale: "2021.05〜2022.10" },
  { area: "東京都北区", type: "西が丘小学校新築グラウンド整備工事", scale: "2021.11〜2023.02" },
  { area: "東京都北区", type: "石神井川堆積土搬出工事", scale: "2022.11〜2023.03" },
  { area: "東京都北区", type: "路面補修等工事・汚水桝等調整工事（北1293号）", scale: "2023.07〜2024.03" },
  { area: "東京都北区", type: "路面補修等工事・汚水桝等調整工事（北1293号：2工区）", scale: "2024.06〜2025.03" },
  { area: "東京都北区", type: "王子一丁目遊び場撤去工事", scale: "2024.10〜2024.12" },
  { area: "東京都北区", type: "路面補修等工事・汚水桝等調整工事（北1293号：3工区）", scale: "2025.07〜2025.11" },
];

export default function ServicesPage() {
  return (
    <>
      <section style={{ backgroundColor: CREAM }} className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p style={{ color: "#A89840" }} className="font-bold tracking-widest text-sm mb-3 uppercase">Services & Works</p>
          <h1 style={{ color: GREEN }} className="text-4xl md:text-5xl font-black">事業内容・施工実績</h1>
          <p style={{ color: GREEN }} className="mt-3 text-sm opacity-60">道路維持管理を中心に、公園・河川・災害緊急対応まで</p>
        </div>
      </section>

      <section id="main-services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="section-heading">
            <p className="section-subtitle">Our Services</p>
            <h2 className="section-title">主な事業内容</h2>
          </div>


          <div className="space-y-8">
            {/* 道路（メイン事業） */}
            {(() => {
              const s = services[0];
              return (
                <div key={s.title} className="rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8" style={{ backgroundColor: GREEN, border: `2px solid ${STRAW}` }}>
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">{s.icon}</span>
                      <div>
                        <span className="text-xs font-bold px-2 py-1 rounded mr-2" style={{ backgroundColor: STRAW, color: GREEN }}>{s.tag}</span>
                        <h3 className="text-xl font-black mt-1" style={{ color: "white" }}>{s.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#d1d5db" }}>{s.desc}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ color: STRAW }}>対応工事</p>
                    <ul className="space-y-2">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "#d1d5db" }}>
                          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: STRAW }} />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })()}

            {/* 公園 */}
            {(() => {
              const s = services[1];
              return (
                <div className="rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8" style={{ backgroundColor: CREAM, border: "1px solid #e5e7eb" }}>
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">{s.icon}</span>
                      <div>
                        <span className="text-xs font-bold px-2 py-1 rounded mr-2" style={{ backgroundColor: STRAW, color: GREEN }}>{s.tag}</span>
                        <h3 className="text-xl font-black mt-1" style={{ color: GREEN }}>{s.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#4b5563" }}>{s.desc}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ color: GREEN }}>対応工事</p>
                    <ul className="space-y-2">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "#4b5563" }}>
                          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: STRAW }} />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })()}
          </div>

          <div className="mt-16">
            <div className="section-heading">
              <p className="section-subtitle">Works</p>
              <h2 className="section-title">施工実績</h2>
            </div>

            <div className="overflow-x-auto shadow-sm" style={{ border: `2px solid ${GREEN}` }}>
              <table className="w-full text-sm bg-white" style={{ borderCollapse: "collapse" }}>
                <thead style={{ backgroundColor: GREEN }}>
                  <tr>
                    <th className="py-4 px-6 text-left font-bold text-white">発注者</th>
                    <th className="py-4 px-6 text-left font-bold text-white">工事件名</th>
                    <th className="py-4 px-6 text-left font-bold text-white">工事期間</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {achievements.map((a, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 text-gray-700">{a.area}</td>
                      <td className="py-4 px-6 font-medium" style={{ color: GREEN }}>{a.type}</td>
                      <td className="py-4 px-6 text-gray-500">{a.scale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-16">
            <div className="section-heading">
              <p className="section-subtitle">Construction Photos</p>
              <h2 className="section-title">施工写真</h2>
            </div>

            {/* 補助87 */}
            <div className="inline-block px-4 py-1 text-sm font-bold rounded-tl-xl rounded-tr-xl relative z-10" style={{ border: `2px solid ${STRAW}`, borderBottom: "none", color: GREEN, backgroundColor: "white", marginBottom: "-2px" }}>補助87号線街路築造工事・交差点改良工事</div>
            <div className="rounded-b-2xl rounded-tr-2xl overflow-hidden shadow-sm" style={{ border: `2px solid ${STRAW}` }}>
              {/* Mobile */}
              <div className="md:hidden relative">
                <div className="relative">
                  <img src="/hojo87-before1.jpg" alt="補助87号線街路築造工事 施工前①" className="w-full object-cover" style={{ height: "280px" }} />
                </div>
                <div className="relative">
                  <img src="/hojo87-before2.jpg" alt="補助87号線街路築造工事 施工前②" className="w-full object-cover" style={{ height: "280px" }} />
                  <span className="absolute bottom-2 right-2 text-xs font-bold px-2 py-1" style={{ backgroundColor: GREEN, color: "white" }}>施工前</span>
                </div>
                <div className="absolute left-0 right-0 z-10 flex justify-center items-center" style={{ top: "560px", transform: "translateY(-50%)", height: "60px" }}>
                  <div className="absolute left-0 right-0" style={{ height: "2px", backgroundColor: STRAW }} />
                  <svg style={{ width: "40px", height: "60px", position: "relative", zIndex: 1, filter: "drop-shadow(0 0 4px rgba(0,0,0,0.5))" }} viewBox="0 0 40 60" xmlns="http://www.w3.org/2000/svg">
                    <line x1="20" y1="0" x2="20" y2="42" stroke={STRAW} strokeWidth="7" strokeLinecap="round" />
                    <polygon points="6,36 20,60 34,36" fill={STRAW} />
                  </svg>
                </div>
                <div className="relative">
                  <img src="/hojo87-after1.jpg" alt="補助87号線街路築造工事 施工後①" className="w-full object-cover" style={{ height: "280px", filter: "brightness(1.3)" }} />
                </div>
                <div className="relative">
                  <img src="/hojo87-after2.jpg" alt="補助87号線街路築造工事 施工後②" className="w-full object-cover" style={{ height: "280px", filter: "brightness(1.3)" }} />
                  <span className="absolute bottom-2 right-2 text-xs font-bold px-2 py-1" style={{ backgroundColor: GREEN, color: "white" }}>施工後</span>
                </div>
              </div>
              {/* Desktop */}
              <div className="hidden md:block relative">
                <div className="grid grid-cols-2">
                  <div className="flex flex-col">
                    <div className="relative">
                      <img src="/hojo87-before1.jpg" alt="補助87号線街路築造工事 施工前①" className="w-full object-cover" style={{ height: "280px" }} />
                    </div>
                    <div className="relative">
                      <img src="/hojo87-before2.jpg" alt="補助87号線街路築造工事 施工前②" className="w-full object-cover" style={{ height: "280px" }} />
                      <span className="absolute bottom-2 right-2 text-xs font-bold px-2 py-1" style={{ backgroundColor: GREEN, color: "white" }}>施工前</span>
                    </div>
                  </div>
                  <div className="flex flex-col border-l-2 border-[#C8BA6A]">
                    <div className="relative">
                      <img src="/hojo87-after1.jpg" alt="補助87号線街路築造工事 施工後①" className="w-full object-cover" style={{ height: "280px", filter: "brightness(1.3)" }} />
                    </div>
                    <div className="relative">
                      <img src="/hojo87-after2.jpg" alt="補助87号線街路築造工事 施工後②" className="w-full object-cover" style={{ height: "280px", filter: "brightness(1.3)" }} />
                      <span className="absolute bottom-2 right-2 text-xs font-bold px-2 py-1" style={{ backgroundColor: GREEN, color: "white" }}>施工後</span>
                    </div>
                  </div>
                </div>
                <svg className="absolute z-10" style={{ left: "50%", top: "280px", transform: "translateX(-50%) translateY(-50%)", width: "80px", height: "40px", filter: "drop-shadow(0 0 5px rgba(0,0,0,1)) drop-shadow(2px 2px 0 rgba(0,0,0,0.9))" }} viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="20" x2="60" y2="20" stroke={STRAW} strokeWidth="7" strokeLinecap="round" />
                  <polygon points="56,6 80,20 56,34" fill={STRAW} />
                </svg>
              </div>
            </div>

            {/* 路面補修 */}
            <div className="mt-10 inline-block px-4 py-1 text-sm font-bold rounded-tl-xl rounded-tr-xl relative z-10" style={{ border: `2px solid ${STRAW}`, borderBottom: "none", color: GREEN, backgroundColor: "white", marginBottom: "-2px" }}>路面補修等工事・汚水桝等調整工事（北1293号：3工区）</div>
            <div className="rounded-b-2xl rounded-tr-2xl overflow-hidden shadow-sm" style={{ border: `2px solid ${STRAW}` }}>
              {/* Mobile */}
              <div className="md:hidden relative">
                <div className="relative">
                  <img src="/ukima-before3.jpg" alt="路面補修等工事 施工前" className="w-full object-cover" style={{ height: "280px" }} />
                  <span className="absolute bottom-2 right-2 text-xs font-bold px-2 py-1" style={{ backgroundColor: GREEN, color: "white" }}>施工前</span>
                </div>
                <div className="absolute left-0 right-0 z-10 flex justify-center items-center" style={{ top: "280px", transform: "translateY(-50%)", height: "60px" }}>
                  <div className="absolute left-0 right-0" style={{ height: "2px", backgroundColor: STRAW }} />
                  <svg style={{ width: "40px", height: "60px", position: "relative", zIndex: 1, filter: "drop-shadow(0 0 4px rgba(0,0,0,0.5))" }} viewBox="0 0 40 60" xmlns="http://www.w3.org/2000/svg">
                    <line x1="20" y1="0" x2="20" y2="42" stroke={STRAW} strokeWidth="7" strokeLinecap="round" />
                    <polygon points="6,36 20,60 34,36" fill={STRAW} />
                  </svg>
                </div>
                <div className="relative">
                  <img src="/ukima-after3.jpg" alt="路面補修等工事 施工後" className="w-full object-cover" style={{ height: "280px" }} />
                  <span className="absolute bottom-2 right-2 text-xs font-bold px-2 py-1" style={{ backgroundColor: GREEN, color: "white" }}>施工後</span>
                </div>
              </div>
              {/* Desktop */}
              <div className="hidden md:grid grid-cols-2 items-stretch relative">
                <div className="flex flex-col">
                  <div className="relative flex-1">
                    <img src="/ukima-before3.jpg" alt="路面補修等工事 施工前" className="w-full object-cover" style={{ minHeight: "280px" }} />
                    <span className="absolute bottom-2 right-2 text-xs font-bold px-2 py-1" style={{ backgroundColor: GREEN, color: "white" }}>施工前</span>
                  </div>
                </div>
                <svg className="absolute z-10" style={{ left: "50%", top: "calc(50% - 22px)", transform: "translateX(-50%) translateY(-50%)", width: "80px", height: "40px", filter: "drop-shadow(0 0 5px rgba(0,0,0,1)) drop-shadow(2px 2px 0 rgba(0,0,0,0.9))" }} viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="20" x2="60" y2="20" stroke={STRAW} strokeWidth="7" strokeLinecap="round" />
                  <polygon points="56,6 80,20 56,34" fill={STRAW} />
                </svg>
                <div className="flex flex-col border-l-2 border-[#C8BA6A]">
                  <div className="relative flex-1">
                    <img src="/ukima-after3.jpg" alt="路面補修等工事 施工後" className="w-full object-cover" style={{ minHeight: "280px" }} />
                    <span className="absolute bottom-2 right-2 text-xs font-bold px-2 py-1" style={{ backgroundColor: GREEN, color: "white" }}>施工後</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 石神井川 */}
            <div className="mt-10 inline-block px-4 py-1 text-sm font-bold rounded-tl-xl rounded-tr-xl relative z-10" style={{ border: `2px solid ${STRAW}`, borderBottom: "none", color: GREEN, backgroundColor: "white", marginBottom: "-2px" }}>石神井川堆積土搬出工事</div>
            <div className="rounded-b-2xl rounded-tr-2xl overflow-hidden shadow-sm" style={{ border: `2px solid ${STRAW}` }}>
              {/* Mobile */}
              <div className="md:hidden relative">
                <div className="relative">
                  <img src="/ishikamigawa-before.jpg" alt="石神井川堆積土搬出工事 施工前" className="w-full object-cover" style={{ height: "280px" }} />
                  <span className="absolute bottom-2 right-2 text-xs font-bold px-2 py-1" style={{ backgroundColor: GREEN, color: "white" }}>施工前</span>
                </div>
                <div className="absolute left-0 right-0 z-10 flex justify-center items-center" style={{ top: "280px", transform: "translateY(-50%)", height: "60px" }}>
                  <div className="absolute left-0 right-0" style={{ height: "2px", backgroundColor: STRAW }} />
                  <svg style={{ width: "40px", height: "60px", position: "relative", zIndex: 1, filter: "drop-shadow(0 0 4px rgba(0,0,0,0.5))" }} viewBox="0 0 40 60" xmlns="http://www.w3.org/2000/svg">
                    <line x1="20" y1="0" x2="20" y2="42" stroke={STRAW} strokeWidth="7" strokeLinecap="round" />
                    <polygon points="6,36 20,60 34,36" fill={STRAW} />
                  </svg>
                </div>
                <div className="relative">
                  <img src="/ishikamigawa-after.jpg" alt="石神井川堆積土搬出工事 施工後" className="w-full object-cover" style={{ height: "280px" }} />
                  <span className="absolute bottom-2 right-2 text-xs font-bold px-2 py-1" style={{ backgroundColor: GREEN, color: "white" }}>施工後</span>
                </div>
              </div>
              {/* Desktop */}
              <div className="hidden md:grid grid-cols-2 items-stretch relative">
                <div className="flex flex-col">
                  <div className="relative flex-1">
                    <img src="/ishikamigawa-before.jpg" alt="石神井川堆積土搬出工事 施工前" className="w-full object-cover" style={{ minHeight: "280px" }} />
                    <span className="absolute bottom-2 right-2 text-xs font-bold px-2 py-1" style={{ backgroundColor: GREEN, color: "white" }}>施工前</span>
                  </div>
                </div>
                <svg className="absolute z-10" style={{ left: "50%", top: "calc(50% - 22px)", transform: "translateX(-50%) translateY(-50%)", width: "80px", height: "40px", filter: "drop-shadow(0 0 5px rgba(0,0,0,1)) drop-shadow(2px 2px 0 rgba(0,0,0,0.9))" }} viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="20" x2="60" y2="20" stroke={STRAW} strokeWidth="7" strokeLinecap="round" />
                  <polygon points="56,6 80,20 56,34" fill={STRAW} />
                </svg>
                <div className="flex flex-col border-l-2 border-[#C8BA6A]">
                  <div className="relative flex-1">
                    <img src="/ishikamigawa-after.jpg" alt="石神井川堆積土搬出工事 施工後" className="w-full object-cover" style={{ minHeight: "280px" }} />
                    <span className="absolute bottom-2 right-2 text-xs font-bold px-2 py-1" style={{ backgroundColor: GREEN, color: "white" }}>施工後</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 田端中学校 */}
            <div className="mt-10 inline-block px-4 py-1 text-sm font-bold rounded-tl-xl rounded-tr-xl relative z-10" style={{ border: `2px solid ${STRAW}`, borderBottom: "none", color: GREEN, backgroundColor: "white", marginBottom: "-2px" }}>田端中学校新築グラウンド整備工事</div>
            <div className="rounded-b-2xl rounded-tr-2xl overflow-hidden shadow-sm" style={{ border: `2px solid ${STRAW}` }}>
              {/* Mobile */}
              <div className="md:hidden relative">
                <div className="relative">
                  <img src="/tabata-before.jpg" alt="田端中学校新築グラウンド整備工事 施工前" className="w-full object-cover" style={{ height: "280px" }} />
                  <span className="absolute bottom-2 right-2 text-xs font-bold px-2 py-1" style={{ backgroundColor: GREEN, color: "white" }}>施工前</span>
                </div>
                <div className="absolute left-0 right-0 z-10 flex justify-center items-center" style={{ top: "280px", transform: "translateY(-50%)", height: "60px" }}>
                  <div className="absolute left-0 right-0" style={{ height: "2px", backgroundColor: STRAW }} />
                  <svg style={{ width: "40px", height: "60px", position: "relative", zIndex: 1, filter: "drop-shadow(0 0 4px rgba(0,0,0,0.5))" }} viewBox="0 0 40 60" xmlns="http://www.w3.org/2000/svg">
                    <line x1="20" y1="0" x2="20" y2="42" stroke={STRAW} strokeWidth="7" strokeLinecap="round" />
                    <polygon points="6,36 20,60 34,36" fill={STRAW} />
                  </svg>
                </div>
                <div className="relative">
                  <img src="/tabata-after1.jpg" alt="田端中学校新築グラウンド整備工事 施工後" className="w-full object-cover" style={{ height: "280px" }} />
                  <span className="absolute bottom-2 right-2 text-xs font-bold px-2 py-1" style={{ backgroundColor: GREEN, color: "white" }}>施工後</span>
                </div>
              </div>
              {/* Desktop */}
              <div className="hidden md:grid grid-cols-2 items-stretch relative">
                <div className="flex flex-col">
                  <div className="relative flex-1">
                    <img src="/tabata-before.jpg" alt="田端中学校新築グラウンド整備工事 施工前" className="w-full object-cover" style={{ minHeight: "280px" }} />
                    <span className="absolute bottom-2 right-2 text-xs font-bold px-2 py-1" style={{ backgroundColor: GREEN, color: "white" }}>施工前</span>
                  </div>
                </div>
                <svg className="absolute z-10" style={{ left: "50%", top: "calc(50% - 22px)", transform: "translateX(-50%) translateY(-50%)", width: "80px", height: "40px", filter: "drop-shadow(0 0 5px rgba(0,0,0,1)) drop-shadow(2px 2px 0 rgba(0,0,0,0.9))" }} viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="20" x2="60" y2="20" stroke={STRAW} strokeWidth="7" strokeLinecap="round" />
                  <polygon points="56,6 80,20 56,34" fill={STRAW} />
                </svg>
                <div className="flex flex-col border-l-2 border-[#C8BA6A]">
                  <div className="relative flex-1">
                    <img src="/tabata-after1.jpg" alt="田端中学校新築グラウンド整備工事 施工後" className="w-full object-cover" style={{ minHeight: "280px" }} />
                    <span className="absolute bottom-2 right-2 text-xs font-bold px-2 py-1" style={{ backgroundColor: GREEN, color: "white" }}>施工後</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="emergency" style={{ backgroundColor: STRAW }} className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-14">
            <div>
              <p style={{ color: GREEN }} className="font-bold tracking-widest text-xs mb-4 uppercase opacity-70">Emergency Response</p>
              <h2 style={{ color: GREEN }} className="text-3xl font-black leading-tight mb-6">
                土木緊急工作隊として、<br />災害の最前線へ。
              </h2>
              <p style={{ color: GREEN }} className="leading-relaxed mb-4 opacity-80">
                私たちは「土木緊急工作隊」に所属しています。台風・大雪・大雨などの自然災害が発生した際に、消防や自衛隊とともに危険なエリアの最前線で活動します。
              </p>
              <p style={{ color: GREEN }} className="text-sm leading-relaxed opacity-70">
                土木建設業者も、災害時に地域を守る重要な力です。日常のインフラ管理で培った技術と経験を、いざというときに地域のために活かしています。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🌀", label: "台風対応" },
                { icon: "❄️", label: "大雪対応" },
                { icon: "🌧️", label: "大雨・洪水対応" },
                { icon: "🚧", label: "緊急道路補修" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <p className="text-3xl mb-2">{item.icon}</p>
                  <p style={{ color: GREEN }} className="font-bold text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-2xl overflow-hidden shadow-sm bg-white">
              <img src="/typhoon19-suibo.jpg" alt="台風19号に伴う水防作業" className="w-full object-cover" style={{ height: "320px" }} />
              <div className="px-4 py-3">
                <p style={{ color: GREEN }} className="text-sm font-bold">台風19号 水防作業</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm bg-white">
              <img src="/suibo-training1.jpg" alt="水防訓練" className="w-full object-cover" style={{ height: "320px" }} />
              <div className="px-4 py-3 flex items-baseline gap-3">
                <p style={{ color: GREEN }} className="text-sm font-bold">水防訓練</p>
                <p style={{ color: GREEN }} className="text-xs opacity-70">定期的に訓練をおこなっております</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl shadow-sm bg-white overflow-hidden">
            <div className="rounded-t-2xl overflow-hidden grid grid-cols-2" style={{ height: "320px", gap: "3px", backgroundColor: STRAW }}>
              <img src="/arakawa-cleanup1.jpg" alt="荒川河川敷清掃作業" className="w-full h-full object-cover" />
              <img src="/arakawa-cleanup2.jpg" alt="荒川河川敷清掃作業" className="w-full h-full object-cover" />
            </div>
            <div className="px-4 py-3">
              <p style={{ color: GREEN }} className="text-sm font-bold">荒川河川敷 清掃作業</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
