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
      <header className="xl:bg-green-500 lg:bg-yellow-700 md:bg-orange-400 sm:bg-red-500 shadow-[inset_0px_-140px_180px_60px_rgb(224_224_224_/_0.15)] w-full bg-black flex flex-col items-center px-25 pb-30">

        <nav className={`xl:w-280 w-full h-20 flex justify-between items-center`}>
          <NavButton name="MUDAR" level={500} />
          <section className="flex justify-between items-center w-[70%]">
            <NavButton name="Sobre" level={500} />
            <NavButton name="Portifólio" level={1300} />
            <NavButton name="Contatos" level={1700} />
            <DownloadBtn />
          </section>
        </nav>
        <div className=" lg:w-250 flex lg:flex-row flex-col-reverse items-center justify-evenly mt-25">
          <Image className="mr-10 lg:ml-15 md:ml-[0%] ml-[60%]" alt="" src={"/Felipe.png"} height={260} width={260}></Image>
          <div className="h-40 flex flex-col justify-between lg:mt-0 mt-20 w-full">
            <h1 className={`${S4.className} text-2xl lg:w-150 w-full`}>Prazer, me chamo Felipe Guedes Gonçalves</h1>
            <p>E sou um desenvolvedor web e mobile</p>
            <div className="w-30 flex justify-between">
              <button> <Image alt="" src={"FigmaIcon.svg"} width={30} height={10} /> </button>
              <button> <Image alt="" src={"GithubIcon.svg"} width={30} height={10} /> </button>
              <button> <Image alt="" src={"LinkedInIcon.svg"} width={30} height={10} /> </button>
            </div>
          </div>
        </div>
      </header>

      <section className="w-full bg-neutral-800 p-25 flex flex-col items-center justify-center">
        <h2 className={`${S4.className} text-xl xl:w-280 w-full`}>Sobre Mim</h2>
        <div className="mt-10 flex lg:flex-row flex-col justify-between text-justify xl:w-280">

          <p className={`lg:w-[60%]`}>Olá, meu nome é Felipe, e sou apaixonado por design e pela criação de experiências únicas. Desde que ingressei no mundo da tecnologia, fico cada vez mais fascinado com o impacto positivo que podemos gerar por meio de soluções inovadoras. Acredito que a tecnologia deve sempre estar a serviço da melhoria contínua da humanidade.
            <br />
            <br />
            Durante minha trajetória na Faculdade de Informática e Administração Paulista (FIAP), tive a oportunidade de adquirir uma ampla gama de conhecimentos, como Programação Orientada a Objetos (POB), DevOps, responsividade, garantia de qualidade, trabalho em equipe e gestão de prazos.
            <br />
            <br />
            No entanto, o que realmente despertou minha paixão foi o desenvolvimento front-end, tanto para web quanto para mobile. Se você está buscando alguém com experiência e interesse em Next.js, React, HTML, CSS, JavaScript, TypeScript, React Native e Kotlin, não hesite em acessar a seção de contato abaixo.
          </p>

          <div className="lg:w-[35%] h-full">
            <div>
              <h4 className={`${S4.className} text-sm w-full lg:m-0 mt-30`}>Minha Formação Acadêmica</h4>
              <p className={`text-yellow-400 mt-5 font-bold`}>Tecnólogo em Análise e desenvolvimento de sistemas</p>
              <p className={`mt-3`}>FIAP - São Paulo - SP, Brasil | fev 2023 - nov 2024</p>
            </div>
            <div>
              <h4 className={`${S4.className} mt-10 text-sm w-full`}>Línguas faladas</h4>
              <p className={`mt-5`}><span className="text-yellow-400 font-bold">Português:</span> Língua Nativa</p>
              <p className={`mt-3`}><span className="text-yellow-400 font-bold">Inglês:</span> Fluente (nível C1) - Alta proficiência em leitura e escuta, aprimorando fala e escrita</p>
            </div>

          </div>
        </div>
      </section>


      <section className="w-full h-130 bg-neutral-800 p-25 flex flex-col items-center justify-center">
        <div className="xl:w-280 w-full">
          <h2 className={`${S4.className} text-xl xl:w-280`}>Contatos</h2>
          <div className="mt-10 flex flex-col justify-between text-justify xl:w-280">
            <p className=""><span className="text-yellow-400 font-bold">Email:</span> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=felipegoncalvesctt@gmail.com&su=Contato%20via%20Portifólio">felipegoncalvesctt@gmail.com</a></p>
            <p className="mt-4"><span className="text-yellow-400 font-bold">LinkedIn:</span> <a href="https://www.linkedin.com/in/felipeguedesgoncalves/">https://www.linkedin.com/in/felipeguedesgoncalves/</a></p>
          </div>
        </div>
      </section>

      <footer className="w-full bg-black p-20 flex flex-col items-center justify-center text-justify">
        <p>Os trabalhos apresentados neste portfólio são resultado de um esforço colaborativo de uma equipe de alunos da Faculdade de Informática e Administração Paulista (FIAP). As empresas parceiras da instituição forneceram os cases e desafios para os projetos, mas não houve vínculo comercial direto com os alunos. A equipe, da qual fiz parte, foi responsável por todas as etapas do desenvolvimento dos projetos, desde a definição das funcionalidades e interfaces até a implementação final. Minha participação se restringiu à execução dos projetos propostos pela instituição, como parte integral do meu processo de aprendizado.
          <br />
          <br />
          A utilização de qualquer material deste portfólio sem a minha autorização expressa é proibida. As imagens e outros materiais de terceiros utilizados neste portfólio foram obtidos com as devidas autorizações ou estão sob licenças de uso livre.</p>
      </footer>
    </main>
  );
}
