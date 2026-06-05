import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ・採用情報 | 三和建設株式会社",
  description: "三和建設株式会社へのお問い合わせ・採用情報ページです。現場監督・作業員募集中。未経験者歓迎。",
};

const GREEN = "#2D6A3F";
const STRAW = "#C8BA6A";
const CREAM = "#F0E8C0";

export default function ContactPage() {
  return (
    <>
      <section style={{ backgroundColor: CREAM }} className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p style={{ color: "#A89840" }} className="font-bold tracking-widest text-sm mb-3 uppercase">Contact & Recruit</p>
          <h1 style={{ color: GREEN }} className="text-4xl md:text-5xl font-black">お問い合わせ・採用情報</h1>
        </div>
      </section>

      <section style={{ backgroundColor: STRAW }} className="py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[["現場監督・現場係員", "募集中"], ["月給", "225,000円〜400,000円"], ["未経験者", "歓迎・年齢不問"]].map(([title, sub]) => (
            <div key={title}>
              <p style={{ color: GREEN }} className="text-2xl font-black">{title}</p>
              <p style={{ color: GREEN }} className="text-sm font-bold mt-1 opacity-70">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#fafaf7" }}>
        <div className="max-w-4xl mx-auto px-4">
          <p className="section-subtitle">Recruit</p>
          <h2 className="section-title">採用情報</h2>
          <p className="text-gray-500 mt-2 mb-10">北区の道路・公園・河川を守る仲間を募集しています。未経験者歓迎・年齢不問。</p>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {[
              { label: "職種", value: "①現場監督　②現場係員（現場監督補助）" },
              { label: "仕事内容", value: "主に北区内の公共事業を請負って土木工事を行います。現場監督または現場係員（現場監督補助）として活躍していただきます。" },
              { label: "雇用形態", value: "正社員（正社員登用あり・過去3年間実績あり）" },
              { label: "月給", value: "225,000円〜400,000円（基本給145,000円〜170,000円）" },
              { label: "各種手当", value: "物価手当42,000円〜90,000円 / 住宅手当20,000円〜50,000円 / 職務手当18,000円〜30,000円 / 現場・管理手当0円〜45,000円" },
              { label: "資格手当", value: "土木施工管理技士2級：7,000円 / 1級：15,000円" },
              { label: "昇給・賞与", value: "昇給あり（前年度実績あり）/ 賞与年2回・計6ヶ月分（前年度実績）" },
              { label: "通勤手当", value: "実費支給（上限あり・月額30,000円）" },
              { label: "勤務地", value: "東京都北区堀船3丁目43番1号（都電荒川線 梶原駅 徒歩5分）" },
              { label: "試用期間", value: "3ヶ月（試用期間中の条件は同条件）" },
              { label: "必要資格", value: "普通自動車運転免許（必須）" },
              { label: "学歴", value: "高校卒業以上" },
              { label: "必要経験", value: "不問（未経験者歓迎）" },
              { label: "資格取得支援", value: "土木施工管理技士2級・1級の取得を希望する場合、会社が支援します" },
              { label: "職場環境", value: "風通しがよく、休暇も取りやすい職場です" },
            ].map((item, i) => (
              <div key={item.label} className={`grid grid-cols-3 py-4 px-6 gap-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <dt style={{ color: GREEN }} className="text-sm font-bold col-span-1">{item.label}</dt>
                <dd className="text-sm text-gray-600 col-span-2">{item.value}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 style={{ color: GREEN }} className="font-black text-lg mb-6">会社情報</h2>
            <address className="not-italic space-y-4 text-sm text-gray-600">
              <div>
                <p style={{ color: GREEN }} className="font-bold mb-1">所在地</p>
                <p>〒114-0004</p>
                <p>東京都北区堀船3丁目43番1号</p>
              </div>
              <div>
                <p style={{ color: GREEN }} className="font-bold mb-1">設立</p>
                <p>昭和27年3月24日（1952年）</p>
              </div>
              <div>
                <p style={{ color: GREEN }} className="font-bold mb-1">営業時間</p>
                <p>平日 8:00〜17:00</p>
              </div>
            </address>

            <div className="mt-8 p-6 rounded-xl text-white" style={{ backgroundColor: GREEN }}>
              <p style={{ color: STRAW }} className="font-bold text-xs tracking-widest mb-3">採用募集中</p>
              <p className="text-sm font-bold mb-2">かっこいい仕事、一緒にしませんか？</p>
              <p className="text-gray-300 text-xs leading-relaxed">
                未経験者歓迎。家族のような職場で、地域を守る誇りある仕事を一緒にしましょう。
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 style={{ color: GREEN }} className="font-black text-lg mb-6">お問い合わせフォーム</h2>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdf6qTPfTVmotalMFNyqPwQYB8fhaNMC6WCmiUJxDuAgl9Rlg/viewform?embedded=true"
              width="100%"
              height="800"
              style={{ border: 0 }}
              title="お問い合わせフォーム"
            >読み込んでいます…</iframe>
          </div>
        </div>
      </section>
    </>
  );
}
