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
          <p style={{ color: GREEN }} className="mt-4 max-w-xl opacity-70">
            工事のご相談、採用に関するご質問など、お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: STRAW }} className="py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[["現場監督", "募集中"], ["作業員", "募集中"], ["未経験者", "歓迎"]].map(([title, sub]) => (
            <div key={title}>
              <p style={{ color: GREEN }} className="text-2xl font-black">{title}</p>
              <p style={{ color: GREEN }} className="text-sm font-bold mt-1 opacity-70">{sub}</p>
            </div>
          ))}
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
                <p style={{ color: GREEN }} className="font-bold mb-1">創業</p>
                <p>昭和27年（1952年）</p>
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
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold mb-1" style={{ color: GREEN }}>
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="山田 太郎"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors"
                    style={{ ["--tw-ring-color" as string]: GREEN }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1" style={{ color: GREEN }}>
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="example@email.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-1" style={{ color: GREEN }}>電話番号</label>
                <input
                  type="tel"
                  placeholder="03-0000-0000"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-1" style={{ color: GREEN }}>
                  お問い合わせ種別 <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors text-gray-700"
                >
                  <option value="">選択してください</option>
                  <option value="work">工事・業務のご相談</option>
                  <option value="recruit-supervisor">採用について（現場監督）</option>
                  <option value="recruit-worker">採用について（作業員）</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-1" style={{ color: GREEN }}>
                  メッセージ <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="お問い合わせ内容をご記入ください"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                />
              </div>

              <p className="text-xs text-gray-500">※ 送信後、2〜3営業日以内にご返信いたします。</p>

              <button type="submit" className="btn-primary w-full text-center">
                送信する
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
