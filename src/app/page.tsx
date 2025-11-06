import { DownloadBtn, NavButton } from "@/components/buttons";
import { Share_Tech_Mono, Sixtyfour } from "next/font/google"
import Image from "next/image";

const STMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400"
})

const S4 = Sixtyfour({
  subsets: ["latin"],
  weight: "400"
})

export default function Home() {
  return (
    <main>
      <header className="shadow-[inset_0px_-140px_180px_60px_rgb(224_224_224_/_0.15)] w-full h-165 bg-black flex flex-col items-center">

        <nav className={`${STMono.className} text-white w-full h-20 flex justify-between items-center`}>
          <NavButton name="MUDAR" level={500} />
          <section className="flex justify-between items-center ">
            <NavButton name="Sobre" level={500} />
            <NavButton name="Portifólio" level={500} />
            <NavButton name="Contatos" level={500} />
            <DownloadBtn />
          </section>
        </nav>
        <div className=" w-250 flex items-center justify-evenly mt-25">
          <Image className="" alt="" src={"/Felipe.png"} height={300} width={300}></Image>
          <div className="h-40 flex flex-col justify-between ">
            <h1 className={`${S4.className} text-white text-2xl w-150`}>Prazer, me chamo Felipe Guedes Gonçalves</h1>
            <p className={`${STMono.className} text-white`}>E sou um desenvolvedor web e mobile</p>
            <div className="w-30 flex justify-between">
              <button> <Image alt="" src={"FigmaIcon.svg"} width={30} height={10} /> </button>
              <button> <Image alt="" src={"GithubIcon.svg"} width={30} height={10} /> </button>
              <button> <Image alt="" src={"LinkedInIcon.svg"} width={30} height={10} /> </button>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
