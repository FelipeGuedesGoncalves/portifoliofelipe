"use client"

import { DownloadBtn, NavButton } from "@/components/buttons";
import PortShow from "@/components/portifolioShowcase";
import dynamic from "next/dynamic";

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
    <main className="flex flex-col items-center">
      <div className="fixed z-50 2xl:bg-blue-500 xl:bg-green-500 lg:bg-yellow-500 md:bg-orange-500 sm:bg-red-500 w-80 h-5 m-5 rounded-4xl"></div>
      <header className=" shadow-[inset_0px_-140px_180px_60px_rgb(224_224_224_/_0.15)] w-full bg-black flex flex-col items-center md:px-25 md:pb-30 pb-8 sm:px-17 px-10">

        <nav className={`xl:w-280 w-full h-20 flex justify-between items-center lg:text-lg md:text-md`}>
          <NavButton className="" name="MUDAR" targetId="" offset={140} />
          <section className="flex justify-between items-center lg:w-[70%] md:w-[75%]">
            <NavButton className=" md:block hidden" name="Sobre" targetId="sobre" offset={140} />
            <NavButton className=" md:block hidden" name="Portifólio" targetId="portShow" offset={50} />
            <NavButton className=" md:block hidden" name="Contatos" targetId="contatos" offset={140} />
            <DownloadBtn />
          </section>
        </nav>
        <div className=" lg:w-250 flex md:flex-row flex-col-reverse items-center justify-evenly md:mt-25 mt-12">
          <Image className="flex-shrink-0 object-contain mr-10 lg:ml-10 md:ml-[0%] md:w-77 md:h-77 sm:w-60 sm:h-60 w-45 h-45 ml-[60%]" alt="" src={"/Felipe.png"} height={260} width={260}></Image>
          <div className="md:h-40 flex flex-col justify-between w-full lg:mb-10 md:mb-20">
            <h1 className={`${S4.className} md:text-2xl xl:w-full w-full`}>Prazer, me chamo Felipe Guedes Gonçalves</h1>
            <p className="md:text-base text-sm lg:my-0 my-5">E sou um desenvolvedor web e mobile</p>
            <div className="w-30 flex justify-between">
              <a href="" > <Image alt="" src={"FigmaIcon.svg"} width={30} height={10} /> </a>
              <a href="https://github.com/FelipeGuedesGoncalves" > <Image alt="" src={"GithubIcon.svg"} width={30} height={10} /> </a>
              <a href="https://www.linkedin.com/in/felipeguedesgoncalves/" > <Image alt="" src={"LinkedInIcon.svg"} width={30} height={10} /> </a>
            </div>
          </div>
        </div>
      </header>

      <section id="sobre" className="w-full bg-neutral-800 md:p-25 sm:p-17 sm:pt-23 p-10 flex flex-col items-center justify-center">
        <h2 className={`${S4.className} md:text-xl xl:w-280 w-full`}>Sobre Mim</h2>
        <div className="md:text-base text-sm mt-10 flex lg:flex-row flex-col justify-between text-justify xl:w-280">

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
              <h4 className={`${S4.className}  w-full lg:m-0 mt-30 text-left`}>Minha Formação Acadêmica</h4>
              <p className={`text-yellow-400 mt-5 font-bold`}>Tecnólogo em Análise e desenvolvimento de sistemas</p>
              <p className={`mt-3`}>FIAP - São Paulo - SP, Brasil | fev 2023 - nov 2024</p>
            </div>
            <div>
              <h4 className={`${S4.className} mt-10  w-full`}>Línguas faladas</h4>
              <p className={`mt-5`}><span className="text-yellow-400 font-bold">Português:</span> Língua Nativa</p>
              <p className={`mt-3`}><span className="text-yellow-400 font-bold">Inglês:</span> Fluente (nível C1)</p>
            </div>

          </div>
        </div>
      </section>


      <section id="portShow" className="w-full bg-neutral-900 md:p-15 sm:p-17 sm:pt-23 p-0 lg:p-10 flex flex-col items-center justify-center">
        <h2 className={`${S4.className} md:text-xl xl:w-280 w-full lg:p-0 p-10`}>Meus Trabalhos</h2>
        <PortShow/>
      </section>


      <section id="contatos" className="w-full bg-neutral-800 md:p-25 sm:p-17 sm:pt-23 p-10 flex flex-col items-center justify-center">
        <div className="xl:w-280 w-full">
          <h2 className={`${S4.className} md:text-xl xl:w-280 w-full`}>Contatos</h2>
          <div className="md:text-base text-sm mt-10 flex flex-col justify-between text-justify xl:w-280">
            <p className="">
              <span className="text-yellow-400 font-bold">Email:</span>{' '}

              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=felipegoncalvesctt@gmail.com&su=Contato%20via%20Portifólio"
                className="hidden sm:inline"> felipegoncalvesctt@gmail.com
              </a>

              <a href="mailto:felipegoncalvesctt@gmail.com?subject=Contato%20via%20Portifólio"
                className="inline sm:hidden"> felipegoncalvesctt@gmail.com
              </a>
            </p>
            <p className="mt-4">
              <span className="text-yellow-400 font-bold">LinkedIn:</span>{' '}
              <a className="break-all" href="https://www.linkedin.com/in/felipeguedesgoncalves/">
                https://www.linkedin.com/in/felipeguedesgoncalves/
              </a>
            </p>
          </div>
        </div>
      </section>


      <footer className="w-full bg-black md:p-25 sm:p-17 sm:pt-23 p-10 flex flex-col items-center justify-center text-justify">
        <p className="md:text-base text-xs xl:w-280 w-full">
          Os projetos deste portfólio foram desenvolvidos por uma equipe de alunos da FIAP, com base em cases e desafios fornecidos por empresas parceiras, sem qualquer vínculo comercial com os estudantes. A equipe foi responsável por todas as etapas do desenvolvimento — da definição de funcionalidades e interfaces até a implementação final. Minha participação se restringiu à execução dos projetos propostos pela instituição, como parte integral do meu processo de aprendizado.
          <br />
          <br />
          O uso de qualquer material deste portfólio sem minha autorização é proibido. Imagens e outros conteúdos de terceiros foram utilizados apenas com as devidas permissões ou sob licenças livres.
        </p>
      </footer>

    </main>
  );
}
