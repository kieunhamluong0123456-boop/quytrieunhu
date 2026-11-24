
import { useState } from "react";

const menus = [
  { id: "khue-danh", name: "Khuê danh", han: "閨名", number: "壹" },
  { id: "gia-pha", name: "Gia phả", han: "家譜", number: "貳" },
  { id: "ngu", name: "Nơi cư ngụ", han: "居所", number: "參" },
  { id: "oc", name: "Nhân vật OC", han: "人物", number: "肆" },
];

export default function Home() {
  const [active, setActive] = useState("home");

  const currentMenu = menus.find((item) => item.id === active);

  return (
    <main className="min-h-screen bg-[#eee5d5] text-[#594332] p-4 md:p-10">
      <div className="max-w-5xl mx-auto border border-[#b99b73] p-3 md:p-6">

        {/* HEADER */}
        <header className="flex justify-between items-center border-b border-[#b99b73] pb-4">
          <span className="text-xs tracking-[0.3em]">家 · GIA TỘC</span>
          <span className="text-xs tracking-widest">一卷風華</span>
        </header>

        {/* TRANG CHỦ */}
        {active === "home" && (
          <section className="text-center py-16 md:py-24">
            <p className="text-sm tracking-[0.5em] mb-8">
              ❀ · ❀ · ❀
            </p>

            <p className="text-sm tracking-[0.4em] mb-5">
              東鄂氏
            </p>

            <h1 className="text-3xl md:text-5xl tracking-[0.15em] mb-5">
              ĐỔNG NGẠC THANH HOAN
            </h1>

            <p className="text-sm tracking-widest mb-10">
              Hải đường nở muộn · 一生清歡
            </p>

            <p className="text-xs tracking-widest mb-10">
              Mời bước vào thế giới của ta
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {menus.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className="border border-[#b99b73] p-5 hover:bg-[#dfd0b9] transition"
                >
                  <p className="text-xs mb-3">{item.number}</p>
                  <p className="text-lg tracking-widest">
                    {item.name}
                  </p>
                  <p className="text-xs mt-2 opacity-70">
                    {item.han}
                  </p>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* NỘI DUNG DANH MỤC */}
        {currentMenu && (
          <section className="py-16 text-center min-h-[400px]">
            <p className="text-sm tracking-[0.4em] mb-5">
              {currentMenu.han}
            </p>

            <h2 className="text-3xl tracking-widest mb-6">
              {currentMenu.name}
            </h2>

            <div className="border-t border-[#b99b73] w-20 mx-auto mb-8" />

            <p className="text-sm opacity-70">
              Nội dung {currentMenu.name} sẽ được cập nhật tại đây.
            </p>

            <button
              onClick={() => setActive("home")}
              className="mt-12 border border-[#b99b73] px-8 py-3 text-sm hover:bg-[#dfd0b9] transition"
            >
              ← Trở về
            </button>
          </section>
        )}

        {/* FOOTER */}
        <footer className="border-t border-[#b99b73] pt-5 text-center">
          <div className="mb-4">
            <p className="text-xs tracking-widest mb-2">
              ♫ NHẠC NỀN
            </p>
            <audio controls loop className="mx-auto w-full max-w-xs">
              <source src="/music.mp3" type="audio/mpeg" />
            </audio>
          </div>

          <p className="text-xs tracking-widest opacity-70">
            © 2026 · ĐÔNG NGẠC
          </p>
        </footer>

      </div>
    </main>
  );
}
