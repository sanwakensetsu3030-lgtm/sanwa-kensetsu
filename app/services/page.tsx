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
  {
    icon: "🌊",
    title: "河川工事",
    tag: "河川・水路",
    desc: "護岸の補修・改修、河床の清掃など、地域の河川環境を守る工事を手がけています。水害リスクの低減と河川環境の保全に取り組んでいます。",
    items: ["護岸補修・改修工事", "河床整備・清掃", "水路・暗渠工事", "排水設備整備"],
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

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <p className="section-subtitle">Our Services</p>
          <h2 className="section-title">主な事業内容</h2>
          <p className="text-gray-500 mt-2 mb-12 max-w-xl">
            東京都北区の道路インフラを守ることを中心に、公園・河川・災害対応まで幅広く対応しています。
          </p>

          <div className="space-y-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8"
                style={s.main
                  ? { backgroundColor: GREEN, border: `2px solid ${STRAW}` }
                  : { backgroundColor: CREAM, border: "1px solid #e5e7eb" }
                }
              >
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{s.icon}</span>
                    <div>
                      <span className="text-xs font-bold px-2 py-1 rounded mr-2" style={{ backgroundColor: STRAW, color: GREEN }}>
                        {s.tag}
                      </span>
                      <h3 className="text-xl font-black mt-1" style={{ color: s.main ? "white" : GREEN }}>
                        {s.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: s.main ? "#d1d5db" : "#4b5563" }}>
                    {s.desc}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ color: s.main ? STRAW : GREEN }}>
                    対応工事
                  </p>
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm" style={{ color: s.main ? "#d1d5db" : "#4b5563" }}>
                        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: STRAW }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
              <img src="/typhoon19-suibo.jpg" alt="台風19号に伴う水防作業" className="w-full object-cover" style={{ height: "220px" }} />
              <div className="px-4 py-3">
                <p style={{ color: GREEN }} className="text-sm font-bold">台風19号 水防作業</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm bg-white">
              <img src="/suibo-training1.jpg" alt="水防訓練" className="w-full object-cover" style={{ height: "220px" }} />
              <div className="px-4 py-3 flex items-baseline gap-3">
                <p style={{ color: GREEN }} className="text-sm font-bold">水防訓練</p>
                <p style={{ color: GREEN }} className="text-xs opacity-70">定期的に訓練をおこなっております</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-sm bg-white">
              <div className="grid grid-cols-2" style={{ height: "220px", gap: "3px", backgroundColor: STRAW }}>
                <img src="/arakawa-cleanup1.jpg" alt="荒川河川敷清掃作業" className="w-full h-full object-cover" />
                <img src="/arakawa-cleanup2.jpg" alt="荒川河川敷清掃作業" className="w-full h-full object-cover" />
              </div>
              <div className="px-4 py-3">
                <p style={{ color: GREEN }} className="text-sm font-bold">荒川河川敷 清掃作業</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#fafaf7" }}>
        <div className="max-w-6xl mx-auto px-4">
          <p className="section-subtitle">Works</p>
          <h2 className="section-title">施工実績</h2>
          <div className="mb-10"></div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl overflow-hidden shadow-sm">
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

          <div className="mt-16">
            <h3 style={{ color: GREEN }} className="text-xl font-black mb-2">施工写真</h3>
            <p className="text-gray-500 text-sm mb-8">石神井川堆積土搬出工事</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden shadow-sm" style={{ border: `2px solid ${STRAW}` }}>
                <img src="/ishikamigawa-before.jpg" alt="石神井川堆積土搬出工事 施工前" className="w-full object-cover" style={{ height: "280px" }} />
                <div className="px-4 py-3" style={{ backgroundColor: CREAM }}>
                  <p style={{ color: GREEN }} className="text-sm font-bold">施工前</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm" style={{ border: `2px solid ${STRAW}` }}>
                <img src="/ishikamigawa-after.jpg" alt="石神井川堆積土搬出工事 施工後" className="w-full object-cover" style={{ height: "280px" }} />
                <div className="px-4 py-3" style={{ backgroundColor: CREAM }}>
                  <p style={{ color: GREEN }} className="text-sm font-bold">施工後</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <p className="text-gray-500 text-sm mb-8">田端中学校新築グラウンド整備工事</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden shadow-sm" style={{ border: `2px solid ${STRAW}` }}>
                <img src="/tabata-before.jpg" alt="田端中学校新築グラウンド整備工事 施工前" className="w-full object-cover" style={{ height: "280px" }} />
                <div className="px-4 py-3" style={{ backgroundColor: CREAM }}>
                  <p style={{ color: GREEN }} className="text-sm font-bold">施工前</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm" style={{ border: `2px solid ${STRAW}` }}>
                <div className="grid grid-cols-2" style={{ height: "280px", gap: "3px", backgroundColor: STRAW }}>
                  <img src="/tabata-after1.jpg" alt="田端中学校新築グラウンド整備工事 施工後" className="w-full h-full object-cover" />
                  <img src="/tabata-after2.jpg" alt="田端中学校新築グラウンド整備工事 施工後" className="w-full h-full object-cover" />
                </div>
                <div className="px-4 py-3" style={{ backgroundColor: CREAM }}>
                  <p style={{ color: GREEN }} className="text-sm font-bold">施工後</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
