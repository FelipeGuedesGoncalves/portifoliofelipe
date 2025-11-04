
import { DownloadBtn, NavButton } from "@/components/buttons";
import { Share_Tech_Mono } from "next/font/google"

const STMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400"
})

export default function Home() {
  return (
    <main>
      <header className="shadow-[inset_0px_-140px_180px_60px_rgb(224_224_224_/_0.15)] w-full h-165 bg-black">

        <nav className={`${STMono.className} text-white font-semibold w-full h-20 flex justify-between items-center`}>
          <NavButton name="Sobre" level={500} />
          <section className="flex justify-between items-center ">
            <NavButton name="Sobre" level={500} />
            <NavButton name="Sobre" level={500} />
            <NavButton name="Sobre" level={500} />
            <DownloadBtn/>
          </section>
        </nav>
      </header>
    </main>
  );
}
