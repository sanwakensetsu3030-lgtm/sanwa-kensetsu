import Link from "next/link";

const GREEN = "#2D6A3F";
const GREEN_DARK = "#1E4D2B";
const GREEN_LIGHT = "#3D8A55";
const STRAW = "#C8BA6A";
const STRAW_DARK = "#A89840";
const CREAM = "#F0E8C0";

const services = [
  {
    icon: "🛣️",
    title: "道路維持管理・補修",
    tag: "メイン事業",
    desc: "東京都北区から委託を受け、区道の日常的なメンテナンス・整備・補修を担当。車道・歩道の舗装、L形ブロック、防護柵、集水桝や取付管など、地域の交通安全を毎日守り続けています。",
  },
  {
    icon: "🌳",
    title: "公園・河川・下水道整備・学校グラウンド工事",
    tag: "インフラ整備",
    desc: "地域の公園整備、河川護岸工事、学校グラウンドの整備まで。人々が安心して暮らし、子どもたちが安全に活動できる環境づくりを担っています。",
  },
  {
    icon: "🚨",
    title: "土木緊急工作隊",
    tag: "災害対応",
    desc: "台風・大雪・大雨などの災害時に最前線で活動。消防・自衛隊と連携し、地域を守る緊急対応チームです。",
  },
];

const strengths = [
  { num: "1952年", label: "（昭和27年）設立" },
  { num: "70年以上", label: "の地域実績" },
  { num: "北区", label: "地域密着" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: GREEN, minHeight: "90vh" }} className="relative flex items-center">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `repeating-linear-gradient(45deg, ${STRAW} 0px, ${STRAW} 2px, transparent 2px, transparent 80px)` }}
        />
        <div className="relative max-w-6xl mx-auto px-4 w-full py-24">
          <div className="mb-5 flex items-center gap-3">
            <span className="inline-block w-8 h-0.5" style={{ backgroundColor: STRAW }} />
            <p style={{ color: STRAW }} className="font-bold tracking-widest text-xs uppercase">
              Since 1952 — 東京都北区地域密着
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-white">
            この街の道を、<br />
            <span style={{ color: STRAW }}>守り続ける仕事。</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-4 max-w-2xl">
            三和建設株式会社は、<strong className="text-white">昭和27年（1952年）に設立</strong>し、
            70年以上にわたって東京都北区の道路・公園・河川を守り続けてきた地域密着型ゼネコンです。
          </p>
          <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-xl">
            「危険・汚い・きつい」ではなく、
            <strong className="text-white">かっこよく、頼りにされ、憧れられる仕事</strong>へ。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services" className="btn-straw text-center">事業内容・実績を見る</Link>
            <Link href="/contact" className="btn-outline text-center">採用情報・お問い合わせ</Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-xs gap-2 animate-bounce" style={{ color: STRAW, opacity: 0.6 }}>
          <span>SCROLL</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Strengths bar */}
      <section style={{ backgroundColor: STRAW }} className="py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 gap-4 text-center">
          {strengths.map((s) => (
            <div key={s.label}>
              <p style={{ color: GREEN_DARK }} className="text-2xl md:text-3xl font-black">{s.num}</p>
              <p style={{ color: GREEN_DARK }} className="text-xs md:text-sm font-bold mt-1 opacity-80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <p className="section-subtitle">Our Services</p>
          <h2 className="section-title">私たちの仕事</h2>
          <p className="text-gray-500 mb-12 max-w-xl">日常の道路管理から災害時の緊急対応まで。地域インフラを守るプロフェッショナルです。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow bg-white" style={{ borderTop: `4px solid ${STRAW}` }}>
                <div className="text-4xl mb-3">{s.icon}</div>
                <span className="inline-block text-xs font-bold px-2 py-0.5 rounded mb-3" style={{ backgroundColor: STRAW, color: GREEN_DARK }}>{s.tag}</span>
                <h3 style={{ color: GREEN }} className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-primary">詳しい事業内容を見る</Link>
          </div>
        </div>
      </section>

      {/* Emergency Team */}
      <section style={{ backgroundColor: GREEN }} className="py-20 text-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p style={{ color: STRAW }} className="font-bold tracking-widest text-xs mb-4 uppercase">Emergency Response</p>
            <h2 className="text-3xl font-black leading-tight mb-6">
              災害の最前線で、<br /><span style={{ color: STRAW }}>地域を守る。</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              私たちは「土木緊急工作隊」に所属しています。台風・大雪・大雨などの災害が発生した際、消防や自衛隊と並び、危険なエリアの最前線で対応にあたります。
            </p>
            <div className="mt-4 rounded-xl p-4 text-sm font-bold" style={{ backgroundColor: GREEN_LIGHT, color: STRAW }}>
              日常の確かな仕事の積み重ねが、いざというときの力になる。<br />地域に頼りにされる存在であること——それが私たちの誇りです。
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[{ icon: "🌀", label: "台風対応" }, { icon: "❄️", label: "大雪対応" }, { icon: "🌧️", label: "大雨・洪水対応" }, { icon: "🚧", label: "緊急道路補修" }].map((item) => (
              <div key={item.label} className="rounded-xl p-6 text-center" style={{ backgroundColor: GREEN_LIGHT }}>
                <p className="text-3xl mb-2">{item.icon}</p>
                <p style={{ color: STRAW }} className="font-bold text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3K + Our Work */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl p-10" style={{ backgroundColor: CREAM, borderLeft: `4px solid ${STRAW}` }}>
            <p style={{ color: STRAW_DARK }} className="font-bold tracking-widest text-xs mb-6 uppercase">Changing the Image</p>
            <p style={{ color: GREEN }} className="text-2xl font-black leading-relaxed mb-6">
              「3K」を、<br /><span style={{ color: STRAW_DARK }}>かっこいい仕事</span>へ。
            </p>
            <div className="space-y-3 text-sm">
              {[["危険", "頼りにされる最前線の仕事"], ["汚い", "街を美しく保つプロの仕事"], ["きつい", "仲間と誇りを持てる仕事"]].map(([before, after]) => (
                <div key={before} className="flex items-center gap-4">
                  <span className="line-through text-gray-400">{before}</span>
                  <span style={{ color: GREEN }}>→</span>
                  <span style={{ color: GREEN }} className="font-bold">{after}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="section-subtitle">Our Work</p>
            <h2 className="section-title">道路の表も裏も、<br />私たちが守っています。</h2>
            <p className="text-gray-600 leading-relaxed mt-4 mb-3">
              私たちの仕事は、皆さんが毎日利用する道路の整備・補修が中心です。具体的には以下のような工事を行っています。
            </p>
            <ul className="mb-6 space-y-2">
              {["車道・歩道の舗装", "L形ブロック", "防護柵", "集水桝や取付管など"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: STRAW }} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed mb-6">
              目に見える部分も、見えない部分も——地域のインフラを支える仕事として、誠実に取り組み続けています。
            </p>
            <Link href="/services" className="btn-primary inline-block">事業内容を詳しく見る</Link>
          </div>
        </div>
      </section>

      {/* 地域からの感謝 */}
      <section style={{ backgroundColor: CREAM }} className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="section-subtitle">Community</p>
          <h2 className="section-title">地域の人々や子どもたちが、<br />感謝してくれる仕事。</h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm" style={{ borderTop: `4px solid ${STRAW}` }}>
              <p className="text-3xl mb-4">💌</p>
              <h3 style={{ color: GREEN }} className="text-lg font-bold mb-3">地域の方からの感謝</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                現場では、地域の子どもたちから「ありがとう」と声をかけてもらうことがあります。子どもたちだけでなく、地域の方から感謝のお手紙をいただくこともあります。
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                こうした地域からの感謝は、私たちの大きな力になります。日々の仕事への誇りと、もっと良い街をつくりたいという気持ちの源です。
              </p>
              <div className="rounded-xl p-5 text-sm" style={{ backgroundColor: CREAM }}>
                <p style={{ color: "#A89840" }} className="font-bold text-xs tracking-widest mb-3 uppercase">Voice from Community</p>
                <div className="space-y-3">
                  {[
                    "毎日この道を通っています。いつもきれいに整備してくれてありがとう。",
                    "工事中も丁寧に誘導してくれて、子どもが安心して通れました。",
                    "雨の日も休まず作業してくれる姿に、頭が下がります。",
                  ].map((voice, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <span style={{ color: STRAW }} className="font-bold mt-0.5 flex-shrink-0">「</span>
                      <p style={{ color: "#4b5563" }} className="leading-relaxed">{voice}</p>
                      <span style={{ color: STRAW }} className="font-bold mt-0.5 flex-shrink-0">」</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm" style={{ borderTop: `4px solid ${STRAW}` }}>
              <p className="text-3xl mb-4">🚜</p>
              <h3 style={{ color: GREEN }} className="text-lg font-bold mb-3">心に残るエピソード</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                以前、「どうしてもショベルカーが動いているところを見たい」と泣いているお子さんに困っているお母さんがいました。昼休みにもかかわらず、作業員が重機を動かして見せてあげました。
              </p>
              <div className="rounded-xl p-4 text-sm mb-4" style={{ backgroundColor: CREAM }}>
                <p style={{ color: GREEN }} className="font-bold mb-1">後日、届いたもの</p>
                <ul className="text-gray-600 space-y-1">
                  <li>📩 親御さんからの感謝のお手紙</li>
                  <li>🎨 お子さんが描いてくれた似顔絵</li>
                </ul>
              </div>
              <img
                src="/kodomo-e.jpg"
                alt="お子さんが描いてくれた似顔絵"
                className="w-full rounded-xl"
                style={{ border: `2px solid ${STRAW}` }}
              />
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/about" className="btn-primary inline-block">会社の文化・雰囲気を見る</Link>
          </div>
        </div>
      </section>

      {/* Recruit CTA */}
      <section style={{ backgroundColor: GREEN }} className="py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <p style={{ color: STRAW }} className="font-bold tracking-widest text-sm mb-4 uppercase">Recruit</p>
          <h2 className="text-3xl font-black mb-4">一緒に、北区を守りませんか。</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            現場監督・作業員を募集しています。未経験者歓迎。<br />
            家族のようなチームで、かっこいい仕事を一緒にしましょう。
          </p>
          <Link href="/contact" className="btn-straw">採用情報・お問い合わせ</Link>
        </div>
      </section>
    </>
  );
}
