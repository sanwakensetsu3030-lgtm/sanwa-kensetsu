import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 | 三和建設株式会社",
  description: "三和建設株式会社の会社概要・代表挨拶・企業情報です。設立昭和27年（1952年）、東京都北区地域密着70年以上。",
};

const GREEN = "#2D6A3F";
const STRAW = "#C8BA6A";
const CREAM = "#F0E8C0";

const companyInfo = [
  { label: "会社名", value: "三和建設株式会社" },
  { label: "代表取締役", value: "片岡 俊哉" },
  { label: "設立", value: "昭和27年（1952年）3月24日" },
  { label: "資本金", value: "2,000万円" },
  { label: "所在地", value: "〒114-0004 東京都北区堀船3丁目43番1号" },
  { label: "建設業許可", value: "東京都知事（般・特 7）第19372号" },
  { label: "許可業種", value: "造園工事業（般）／土木工事業・とび土工工事業・舗装工事業・しゅんせつ工事業・水道施設工事業（特）" },
  { label: "事業内容", value: "道路維持管理・補修工事、公園整備工事、河川工事、下水道工事、土木一式工事、災害緊急対応（土木緊急工作隊）" },
  { label: "主な発注者", value: "東京都北区・東京都第六建設事務所・東京都財務局" },
  { label: "取引銀行", value: "みずほ銀行王子支店、三菱UFJ銀行王子支店、城北信用金庫梶原支店" },
];

export default function AboutPage() {
  return (
    <>
      <section style={{ backgroundColor: CREAM }} className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p style={{ color: "#A89840" }} className="font-bold tracking-widest text-sm mb-3 uppercase">About Us</p>
          <h1 style={{ color: GREEN }} className="text-4xl md:text-5xl font-black">会社概要</h1>
          <p style={{ color: GREEN }} className="mt-3 text-sm opacity-60">設立 昭和27年（1952年） / 東京都北区地域密着</p>
        </div>
      </section>

      <section style={{ backgroundColor: STRAW }} className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 gap-6 text-center">
          {[["1952", "年 設立"], ["70+", "年の実績"], ["北区", "地域密着"]].map(([num, label]) => (
            <div key={label}>
              <p style={{ color: GREEN }} className="text-4xl font-black">{num}</p>
              <p style={{ color: GREEN }} className="text-sm font-bold mt-1 opacity-70">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="section-subtitle">Representative Message</p>
            <h2 className="section-title">代表挨拶</h2>
            <div className="text-gray-600 leading-relaxed space-y-4 mt-6">
              <p>三和建設株式会社は、昭和27年（1952年）の設立以来、東京都北区を拠点に道路・公園・河川・下水道などの社会インフラの維持管理・整備・補修を担ってまいりました。</p>
              <p>私たちが守るのは、地域の皆さまが毎日使う道路であり、お子さんが遊ぶ公園であり、暮らしを守る河川です。目立たない場所で支える仕事だからこそ、誠実に、丁寧に、現場と向き合い続けることを大切にしています。</p>
              <p>また、台風や大雪など災害時には「土木緊急工作隊」として最前線で対応にあたります。地域に頼りにされる存在であることが、私たちの誇りです。</p>
              <p>土木建設業を「危険・汚い・きつい」ではなく、かっこよく、頼もしく、憧れられる仕事へ。次世代を担う若い仲間たちとともに、地域の未来を守り続けてまいります。</p>
              <p style={{ color: GREEN }} className="font-bold">三和建設株式会社 代表取締役　片岡 俊哉</p>
            </div>
          </div>

          <div className="rounded-2xl p-10" style={{ backgroundColor: CREAM, borderLeft: `4px solid ${STRAW}` }}>
            <p style={{ color: "#A89840" }} className="font-bold tracking-widest text-xs mb-6 uppercase">Our Mission</p>
            <p style={{ color: GREEN }} className="text-2xl font-black leading-relaxed mb-6">
              地域を守る。<br />人々の暮らしを守る。<br />
              <span style={{ color: "#A89840" }}>かっこいい仕事を続ける。</span>
            </p>
            <ul className="space-y-3 text-gray-600 text-sm">
              {[
                "北区地域密着で、インフラを70年以上守り続ける",
                "災害時も最前線で地域を支える緊急対応力",
                "家族のようなチームで、誇りある仕事をする",
                "若い世代が憧れる職場をつくる",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ color: STRAW }} className="font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#fafaf7" }}>
        <div className="max-w-6xl mx-auto px-4">
          <p className="section-subtitle">Team & Culture</p>
          <h2 className="section-title">人とのつながりを、大切にする会社です。</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🗣️", title: "風通しの良い職場環境", desc: "事務所では社長を含む全員が同じ空間で日々の業務にあたっており、気軽に意見を交わせる開かれた雰囲気があります。上下の距離が近いからこそ、働きやすさにつながっています。" },
              { icon: "👨‍👩‍👧", title: "社員とその家族を大切に", desc: "社長は社員本人だけでなく、その家族やお子さんのことにも気を配り、折に触れて声をかけています。「社員が安心して働ける環境をつくること」が、会社の根底にある考え方です。" },
              { icon: "🤝", title: "縁でつながるチーム", desc: "長年勤める社員の紹介や、仲間の友人、そのお子さんなど、何かしらの縁でつながったメンバーが多く在籍しています。人と人のつながりを大切にしてきた積み重ねが、今の三和建設を形づくっています。" },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-xl p-8 shadow-sm" style={{ borderTop: `4px solid ${STRAW}` }}>
                <p className="text-3xl mb-4">{c.icon}</p>
                <h3 style={{ color: GREEN }} className="text-lg font-bold mb-3">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#fafaf7" }}>
        <div className="max-w-6xl mx-auto px-4">
          <p className="section-subtitle">Welfare</p>
          <h2 className="section-title">福利厚生</h2>
          <div className="mt-2 mb-10 max-w-2xl space-y-4 text-gray-500 leading-relaxed">
            <p>
              社員旅行には、社員・従業員だけでなく、日頃からお世話になっている協力会社の方々も一緒に参加しています。仕事を通じて築いたつながりをより深める場として、毎回大切にしている行事のひとつです。
            </p>
            <p>
              バーベキューの会では、普段現場で活躍してくれている作業員さんのご家族をお招きしています。奥さまやお子さんも一緒に集まり、みんなでバーベキューを楽しんだり、プールで遊んだりと、にぎやかで温かい時間を過ごしています。「家族ぐるみのおつき合い」を大切にしているのが、三和建設らしさのひとつです。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: "/dogashima.jpg", alt: "社員旅行 堂ヶ島", label: "社員旅行", sub: "堂ヶ島（静岡県）" },
              { src: "/tomioka.jpg", alt: "社員旅行 富岡製糸場", label: "社員旅行", sub: "富岡製糸場（群馬県）" },
              { src: "/bbq.jpg", alt: "社員バーベキュー", label: "社員交流", sub: "バーベキュー" },
            ].map((photo) => (
              <div key={photo.src} className="rounded-2xl overflow-hidden shadow-sm bg-white" style={{ border: `2px solid ${STRAW}` }}>
                <img src={photo.src} alt={photo.alt} className="w-full object-cover" style={{ height: "220px" }} />
                <div className="px-4 py-3" style={{ backgroundColor: CREAM }}>
                  <p style={{ color: GREEN }} className="text-sm font-bold">{photo.label}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{photo.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="section-subtitle">Company Profile</p>
          <h2 className="section-title">会社情報</h2>
          <div className="mt-8 divide-y divide-gray-200 border-t border-gray-200">
            {companyInfo.map((item) => (
              <div key={item.label} className="grid grid-cols-3 py-5 gap-4">
                <dt style={{ color: GREEN }} className="text-sm font-bold col-span-1">{item.label}</dt>
                <dd className="text-sm text-gray-600 col-span-2">{item.value}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
