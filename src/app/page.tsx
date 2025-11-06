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
          <Image className="mr-10" alt="" src={"/Felipe.png"} height={260} width={260}></Image>
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

      <section className="w-full h-170 bg-neutral-800 p-20 flex flex-col items-center justify-center">
        <h2 className={`${S4.className} text-white text-xl w-280`}>Sobre Mim</h2>
        <div className="mt-10 flex flex-row justify-between text-justify w-280">

          <p className={`${STMono.className} text-white w-[60%]`}>Olá, meu nome é Felipe, e sou apaixonado por design e pela criação de experiências únicas. Desde que ingressei no mundo da tecnologia, fico cada vez mais fascinado com o impacto positivo que podemos gerar por meio de soluções inovadoras. Acredito que a tecnologia deve sempre estar a serviço da melhoria contínua da humanidade.
            <br />
            <br />
            Durante minha trajetória na Faculdade de Informática e Administração Paulista (FIAP), tive a oportunidade de adquirir uma ampla gama de conhecimentos, como Programação Orientada a Objetos (POB), DevOps, responsividade, garantia de qualidade, trabalho em equipe e gestão de prazos.
            <br />
            <br />
            No entanto, o que realmente despertou minha paixão foi o desenvolvimento front-end, tanto para web quanto para mobile. Se você está buscando alguém com experiência e interesse em Next.js, React, HTML, CSS, JavaScript, TypeScript, React Native e Kotlin, não hesite em acessar a seção de contato abaixo.
          </p>

          <div className="w-[35%] h-full">
            <div>
              <h4 className={`${S4.className} text-white text-sm w-full`}>Minha Formação Acadêmica</h4>
              <p className={`${STMono.className} text-yellow-400 mt-5`}>Tecnólogo em Análise e desenvolvimento de sistemas</p>
              <p className={`${STMono.className} text-white mt-3`}>FIAP - São Paulo - SP, Brasil | fev 2023 - nov 2024</p>
            </div>
            <div>
              <h4 className={`${S4.className} mt-10 text-white text-sm w-full`}>Línguas faladas</h4>
              <p className={`${STMono.className} text-white mt-5`}><span className="text-yellow-400">Português:</span> Língua Nativa</p>
              <p className={`${STMono.className} text-white mt-3`}><span className="text-yellow-400">Inglês:</span> Fluente (nível C1) - Alta proficiência em leitura e escuta, aprimorando fala e escrita</p>
            </div>

          </div>
        </div>
      </section>
      
    </main>
  );
}
