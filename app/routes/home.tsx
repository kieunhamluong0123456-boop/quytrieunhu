import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Quý Triều Như | Mặc Khách Thư Phòng" },
    { name: "description", content: "Trang cá nhân phong cách cổ phong" },
  ];
}

export default function Home() {
  return (
    <div
      style={{ fontFamily: "'Noto Serif', Georgia, serif" }}
      className="min-h-screen bg-[#f5efe6] text-[#2c251d] selection:bg-[#9e2a2b] selection:text-[#f5efe6] relative overflow-x-hidden"
    >
      {/* Nạp font chữ cổ điển từ Google Fonts */}
      <style>{`
        @import url('https://googleapis.com');
      `}</style>

      {/* Khung viền đôi cổ điển bao quanh trang */}
      <div className="max-w-4xl mx-auto my-6 sm:my-12 p-6 sm:p-12 border-2 border-[#8c7a6b]/40 bg-[#faf6f0]/80 shadow-[0_0_40px_rgba(44,37,29,0.08)] relative">
        {/* Hoa văn góc khung */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#9e2a2b]"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#9e2a2b]"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#9e2a2b]"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#9e2a2b]"></div>

        {/* Thanh điều hướng */}
        <header className="flex flex-col sm:flex-row justify-between items-center border-b border-[#8c7a6b]/30 pb-6 gap-4">
          <div className="flex items-center gap-3">
            {/* Con dấu triện đỏ */}
            <div className="w-10 h-10 bg-[#9e2a2b] text-[#faf6f0] flex items-center justify-center font-bold text-sm tracking-widest border border-[#781c1d] shadow-sm select-none">
              TRIỀU<br />NHƯ
            </div>
            <span className="text-xl font-bold tracking-wider text-[#2c251d]">
              Mặc Khách Các
            </span>
          </div>

          <nav className="flex gap-6 text-sm font-medium text-[#5c4f42]">
            <a href="#gioi-thieu" className="hover:text-[#9e2a2b] transition-colors">
              Tự Bạch
            </a>
            <a href="#tai-nghe" className="hover:text-[#9e2a2b] transition-colors">
              Tài Nghệ
            </a>
            <a href="#tac-pham" className="hover:text-[#9e2a2b] transition-colors">
              Thi Văn & Dự Án
            </a>
            <a href="#lien-he" className="hover:text-[#9e2a2b] transition-colors">
              Gửi Thư
            </a>
          </nav>
        </header>

        {/* Phần mở đầu (Hero) */}
        <section className="py-16 sm:py-20 text-center border-b border-[#8c7a6b]/30 relative">
          <p className="text-xs uppercase tracking-[0.3em] text-[#9e2a2b] mb-4 font-semibold">
            — Nhất Hồ Thanh Trà · Vạn Cổ Phong Lưu —
          </p>
          <h1
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl sm:text-6xl font-bold text-[#1f1914] mb-6 tracking-wide"
          >
            Quý Triều Như
          </h1>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-[#5c4f42] leading-relaxed italic">
            "Giữa chốn phồn hoa náo nhiệt, giữ một góc thư phòng tĩnh lặng;
            mượn nét mực xưa kể chuyện thời nay."
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#tac-pham"
              className="px-6 py-2.5 bg-[#9e2a2b] text-[#faf6f0] text-sm tracking-widest hover:bg-[#7d2021] transition-colors border border-[#781c1d]"
            >
              THƯỞNG LÃM TÁC PHẨM
            </a>
            <a
              href="#lien-he"
              className="px-6 py-2.5 border border-[#8c7a6b] text-[#2c251d] text-sm tracking-widest hover:bg-[#8c7a6b]/10 transition-colors"
            >
              KẾT GIAO BẰNG HỮU
            </a>
          </div>
        </section>

        {/* Phần Tự bạch (Giới thiệu) */}
        <section id="gioi-thieu" className="py-14 border-b border-[#8c7a6b]/30">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rotate-45 bg-[#9e2a2b]"></span>
            <h2 className="text-2xl font-bold tracking-wide text-[#1f1914]">
              Đôi Lời Tự Bạch
            </h2>
          </div>
          <div className="space-y-4 text-[#453b31] leading-relaxed text-justify">
            <p>
              Kính chào các vị bằng hữu đã ghé thăm tệ xá. Tại hạ là{" "}
              <strong className="text-[#1f1914]">Quý Triều Như</strong>, một người
              say mê vẻ đẹp trầm mặc của văn hóa cổ truyền, yêu thích văn chương,
              nghệ thuật và những giá trị bền vững theo năm tháng.
            </p>
            <p>
              Nơi đây là không gian lưu giữ những dòng tản mạn, những dự án tâm
              huyết và góc nhìn của tại hạ về cuộc sống. Mong rằng chén trà nhạt
              nơi thư phòng này có thể cùng bạn đàm đạo đôi câu chuyện vui.
            </p>
          </div>
        </section>

        {/* Phần Tài nghệ / Sở trường */}
        <section id="tai-nghe" className="py-14 border-b border-[#8c7a6b]/30">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rotate-45 bg-[#9e2a2b]"></span>
            <h2 className="text-2xl font-bold tracking-wide text-[#1f1914]">
              Cầm · Kỳ · Thi · Họa
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-5 border border-[#8c7a6b]/30 bg-[#f5efe6]/60">
              <div className="text-[#9e2a2b] font-bold text-sm tracking-widest mb-2">
                01 / SÁNG TẠO & VIẾT LÁCH
              </div>
              <h3 className="text-lg font-bold mb-2">Bút Nghiên Tản Mạn</h3>
              <p className="text-sm text-[#5c4f42] leading-relaxed">
                Ghi chép lại những câu chuyện xưa cũ, tản văn cổ phong và suy
                ngẫm về nhân tình thế thái.
              </p>
            </div>

            <div className="p-5 border border-[#8c7a6b]/30 bg-[#f5efe6]/60">
              <div className="text-[#9e2a2b] font-bold text-sm tracking-widest mb-2">
                02 / THIẾT KẾ & MỸ THUẬT
              </div>
              <h3 className="text-lg font-bold mb-2">Thẩm Mỹ Á Đông</h3>
              <p className="text-sm text-[#5c4f42] leading-relaxed">
                Kết hợp họa tiết truyền thống, thư pháp và bố cục hiện đại để
                tạo nên những sản phẩm mang đậm bản sắc.
              </p>
            </div>
          </div>
        </section>

        {/* Phần Tác phẩm / Dấu ấn */}
        <section id="tac-pham" className="py-14 border-b border-[#8c7a6b]/30">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rotate-45 bg-[#9e2a2b]"></span>
            <h2 className="text-2xl font-bold tracking-wide text-[#1f1914]">
              Tác Phẩm Lưu Giữ
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Tuyển Tập: Gió Thu Qua Hiên Vắng",
                date: "Mùa Thu · Năm Bính Ngọ",
                desc: "Tập hợp những bài thơ và tản văn viết về những buổi chiều ngắm mưa rơi bên hiên nhà cổ.",
              },
              {
                title: "Dự Án: Phục Dựng Hoa Văn Cổ",
                date: "Mùa Hạ · Năm Bính Ngọ",
                desc: "Sưu tầm và số hóa các họa tiết mây, sóng nước trên kiến trúc đình chùa truyền thống.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 border border-[#8c7a6b]/30 hover:border-[#9e2a2b]/60 transition-colors bg-[#faf6f0]"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2">
                  <h3 className="text-lg font-bold text-[#1f1914]">
                    {item.title}
                  </h3>
                  <span className="text-xs text-[#9e2a2b] font-medium tracking-wider">
                    {item.date}
                  </span>
                </div>
                <p className="text-sm text-[#5c4f42] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Phần Liên hệ (Footer) */}
        <footer id="lien-he" className="pt-12 text-center">
          <p className="text-sm text-[#5c4f42] mb-4">
            Hữu duyên thiên lý năng tương ngộ — Kết nối với tại hạ qua:
          </p>
          <div className="flex justify-center gap-6 text-sm font-semibold text-[#9e2a2b] mb-8">
            <a href="#" className="hover:underline">
              Facebook
            </a>
            <span>·</span>
            <a href="#" className="hover:underline">
              Instagram
            </a>
            <span>·</span>
            <a href="mailto:emailcuaban@gmail.com" className="hover:underline">
              Thư Điện Tử
            </a>
          </div>
          <p className="text-xs text-[#8c7a6b] tracking-widest">
            © 2026 QUÝ TRIỀU NHƯ · MẶC KHÁCH THƯ PHÒNG
          </p>
        </footer>
      </div>
    </div>
  );
}
