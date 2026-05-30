import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1E4D2B" }} className="text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p style={{ color: "#C8BA6A" }} className="font-black text-lg mb-1">三和建設株式会社</p>
          <p className="text-gray-400 text-xs tracking-widest mb-1">SANWA KENSETSU CO., LTD.</p>
          <p className="text-gray-500 text-xs mb-4">創業 昭和27年（1952年）</p>
          <p className="text-gray-300 text-sm leading-relaxed">
            東京都北区地域密着70年以上。<br />
            道路・公園・河川を守り、地域の安心・安全な暮らしを支えています。
          </p>
        </div>

        <div>
          <h3 style={{ color: "#C8BA6A" }} className="font-bold mb-4">サイトマップ</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white transition-colors">ホーム</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">会社概要</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">事業内容・施工実績</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">お問い合わせ・採用</Link></li>
          </ul>
        </div>

        <div>
          <h3 style={{ color: "#C8BA6A" }} className="font-bold mb-4">会社情報</h3>
          <address className="text-sm text-gray-300 not-italic leading-relaxed space-y-1">
            <p>〒114-0004</p>
            <p>東京都北区堀船3丁目43番1号</p>
          </address>
        </div>
      </div>

      <div className="text-center py-4 text-gray-500 text-xs" style={{ borderTop: "1px solid #2D6A3F" }}>
        © {new Date().getFullYear()} 三和建設株式会社 All Rights Reserved.
      </div>
    </footer>
  );
}
