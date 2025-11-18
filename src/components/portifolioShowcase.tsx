"use client";

import Image from "next/image";
import { useState } from "react";
import './customCard.css'

export default function PortShow() {
    const [selected, setSelected] = useState<number | null>(null);
    const [sumir, setSumir] = useState<string | null>(null);
    const [sumirCard, setSumirCard] = useState<string | null>(null);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [wrapperW, setWrapperW] = useState<string | null>(null);
    const [textStyle, setTextStyle] = useState<string | null>(null);
    const [selectedText, setSelectedText] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string>("/error.png");
    const [selectedImageProps, setSelectedImageProps] = useState<number>(0);
    const [carouselStyle, setCarouselStyle] = useState<string | null>(null);
    const [buttonStyle, setButtonStyle] = useState<string | null>("text-transparent");
    const [backButtonStyle, setBackButtonStyle] = useState<string | null>("text-transparent");
    const [areaScrollavel, setAreaScrollavel] = useState<string | null>(null);
    const [mobilePadding, setMobilePadding] = useState<string | null>(null);



    function handleClick(idx: number) {
        if (selected === idx) {
            // Deselecionando

            setDisabled(true);
            setSumir(null);
            projetos[idx].ambiente === "mobile" ? setSumirCard("z-1 absolute h-[100%]") : setSumirCard("z-1 absolute")
            setButtonStyle("hidden")
            setBackButtonStyle("hidden")

            projetos[idx].ambiente === "mobile" ? setTextStyle("lg:w-full lg:h-170 h-200 lg:ml-10 lg:mt-0 lg:p-0") : setTextStyle("lg:w-full lg:h-170 h-200 lg:ml-0 lg:mt-0 lg:p-0")

            setCarouselStyle("z-0 !rounded-xl")

            setTimeout(() => {
                projetos[idx].ambiente === "mobile" ? setTextStyle("lg:w-full lg:mt-0 lg:p-0 px-6 h-0") : setTextStyle("lg:w-full lg:mt-0 lg:p-0 px-6 h-0")
                projetos[idx].ambiente === "mobile"
                    ? setCarouselStyle("!rounded-xl lg:aspect-[0.8] w-[100%] absolute z-0 overflow-y-auto scrollbar-hide")
                    : setCarouselStyle("!rounded-xl lg:aspect-[16/9] xl:w-210 h-1/2 w-full absolute z-0 overflow-y-auto scrollbar-hide");


            }, 200)

            setTimeout(() => {


            }, 700)

            setTimeout(() => {
                setSelected(null);
                setDisabled(false);
                setWrapperW(null);
                setTextStyle("")
                setSelectedText(null)
                setCarouselStyle("z-0 hidden !rounded-xl")
                projetos[idx].ambiente === "mobile" ? setMobilePadding("p-0 lg:flex-row") : setMobilePadding("p-0 xl:flex-row")
            }, 1550);
        } else {
            // Selecionando
            projetos[idx].ambiente === "mobile" ? setSumirCard("z-1 h-[100%]") : setSumirCard("z-1")
            setSelected(idx);
            setDisabled(true);

            setTimeout(() => {
                setSumir("hidden");
                projetos[idx].ambiente === "mobile" ? setWrapperW(`lg:flex-shrink-0 lg:aspect-[0.8] w-[40%] rounded rounded-xl lg:p-0  ${sumirCard}`) : setWrapperW(`lg:flex-shrink-0 xl:w-210 lg:p-0  aspect-[16/9] w-full ${sumirCard}`)
                setDisabled(false);
                projetos[idx].ambiente === "mobile" ? setTextStyle("lg:w-full h-0 lg:mt-0 lg:p-0") :  setTextStyle("lg:w-full h-0 xl:ml-10 lg:mt-0 lg:p-0")
                setSelectedImage(projetos[idx].imagens[0])
            }, 600);

            setTimeout(() => {
                projetos[idx].ambiente === "mobile" ? setTextStyle("lg:w-full lg:100 h-200 lg:ml-10 lg:mt-0 lg:p-0") : setTextStyle("lg:w-full lg:100 xl:ml-10 h-200 lg:ml-0 lg:mt-0 lg:p-0")
                setSelectedText(projetos[idx].desc);
                projetos[idx].ambiente === "mobile" ? setMobilePadding("sm:p-0 p-5 lg:flex-row") : setMobilePadding("sm:p-0 p-5 xl:flex-row")
            }, 800)

            setTimeout(() => {
                projetos[idx].ambiente === "mobile" ? setTextStyle("lg:w-full xl:h-118 lg:ml-10 xl:mt-0 xl:p-0 mt-0") : setTextStyle("lg:w-full xl:h-118 xl:ml-10 lg:ml-0 xl:mt-0 xl:p-0 mt-10")
                projetos[idx].ambiente === "mobile" ? setSumirCard("opacity-0 pointer-events-none absolute z-1") : setSumirCard("opacity-0 pointer-events-none absolute z-1")
            }, 1000)

            setTimeout(() => {
                projetos[idx].ambiente === "mobile"
                    ? setCarouselStyle("!rounded-xl lg:aspect-[0.8] h-1/2 w-[100%] absolute z-0 overflow-y-auto scrollbar-hide")
                    : setCarouselStyle("!rounded-xl lg:aspect-[16/9]  xl:w-210 h-1/2 w-full absolute z-0 overflow-y-auto scrollbar-hide");

                setButtonStyle("w-13 h-22 bg-neutral-500 transition-all duration-200 opacity-30 hover:opacity-100 [box-shadow:inset_0_0_20px_6px_rgba(0,0,0,0.575)]")
                setBackButtonStyle("w-18 h-12 bg-blue-600")
                setSelectedImageProps(2000)
                projetos[idx].ambiente === "mobile" ? setAreaScrollavel(`bg-blue-500 !rounded-xl overflow-y-auto scrollbar-hide aspect-[0.8] lg:p-0  w-[100%]`) : setAreaScrollavel(`!rounded-xl overflow-y-auto scrollbar-hide lg:p-0  aspect-[16/9] w-full`)
            }, 1300)
        }
    }

    const projetos = [
        {
            ambiente: "mobile",
            capa: "./InsightWise/InsightWiseV.png",
            fundo: "bg-[rgb(135,36,255)] [box-shadow:inset_0_-30_60px_20px_rgb(119,0,255)]",
            delay: "delay-100",
            desc: "descrição de INSIGHTWISE Lorem ipsum dolor sit... descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...descrição de INSIGHTWISE Lorem ipsum dolor sit...",
            imagens: Array.from({ length: 7 }, (_, i) => `./InsightWise/${i + 1}.png`)
        },
        {
            ambiente: "desktop",
            capa: "./PortoBike/PortoBikeV.png",
            fundo: "bg-[rgb(255,255,255)]",
            delay: "delay-200",
            desc: "descrição de PORTOBIKE Lorem ipsum dolor sit...",
            imagens: Array.from({ length: 6 }, (_, i) => `./PortoBike/${i + 1}.png`)
        },
        {
            ambiente: "mobile",
            capa: "./HeatWise/HeatWiseV.png",
            fundo: "bg-[rgb(255,168,0)] [box-shadow:inset_0_-30_60px_20px_rgb(255,136,0)]",
            delay: "delay-300",
            desc: "O HeatWise seria uma plataforma inovadora que utilizaria o recurso de heat mapping para oferecer feedback de eficiência e medir o desempenho dos usuários dentro de um site da empresa. O objetivo seria fornecer insights valiosos sobre áreas de alto interesse e interação, bem como identificar possíveis problemas de usabilidade que poderiam estar impactando a produtividade dos usuários.",
            imagens: Array.from({ length: 8 }, (_, i) => `./HeatWise/${i + 1}.png`)
        },
        {
            ambiente: "desktop",
            capa: "./Hunzer/HunzerV.png",
            fundo: "bg-[rgb(147,215,3)] [box-shadow:inset_0_-30_60px_20px_rgb(100,199,43)]",
            delay: "delay-400",
            desc: "A Hunzer era uma plataforma voltada ao combate à fome e ao incentivo a práticas sustentáveis, permitindo que pessoas contribuíssem para um mundo melhor por meio de ações simples, doações e desafios gamificados. A proposta da plataforma era engajar usuários de forma acessível e motivadora, mostrando que pequenos gestos poderiam gerar grandes transformações. Ela permitia que qualquer pessoa fizesse parte desse movimento: usuários realizariam doações diretamente pelo site ou participariam de desafios que acumulariam pontos, os quais seriam trocados por recompensas e certificações simbólicas.",
            imagens: Array.from({ length: 7 }, (_, i) => `./Hunzer/${i + 1}.png`)
        },
        {
            ambiente: "mobile",
            capa: "./BlueHope/BlueHopeV.png",
            fundo: "bg-[rgb(27,87,245)] [box-shadow:inset_0_-30_60px_20px_rgb(0,42,228)]",
            delay: "delay-500",
            desc: "A Blue Hope era uma plataforma inovadora que tinha como objetivo limpar o meio ambiente dos oceanos por meio de desafios gamificados. Os usuários acumulariam pontos ao completar tarefas relacionadas à limpeza oceânica, que seriam exibidos em seus perfis e contribuiriam para um ranking global. A plataforma ofereceria uma linha de progresso com marcos, recompensando os usuários com certificados, medalhas e pequenos brindes digitais ao atingirem esses objetivos. Além de promover a ação ambiental, a Blue Hope conscientizaria o público sobre os problemas dos oceanos de forma ética e informativa.",
            imagens: Array.from({ length: 8 }, (_, i) => `./BlueHope/${i + 1}.png`)
        },
        {
            ambiente: "mobile",
            capa: "./GridHub/GridHubV.png",
            fundo: "bg-[rgb(0,135,255)] [box-shadow:inset_0_-30_60px_20px_rgb(0,102,255)]",
            delay: "delay-600",
            desc: "descrição de GRIDHUB Lorem ipsum dolor sit...",
            imagens: Array.from({ length: 11 }, (_, i) => `./GridHub/${i + 1}.png`)
        },
        {
            ambiente: "desktop",
            capa: "./BabyCare/BabyCareV.png",
            fundo: "bg-[rgb(73,106,247)] [box-shadow:inset_0_-30_60px_20px_rgb(99,66,245)]",
            delay: "delay-700",
            desc: "BabyCare era uma plataforma dedicada a apoiar a jornada materna, oferecendo orientação, acolhimento e informações essenciais para mães, gestantes e profissionais de saúde. Seu propósito era tornar a experiência da maternidade mais segura, tranquila e conectada, reunindo conteúdos confiáveis sobre cuidados pré-natais, desenvolvimento do bebê, saúde materna, nutrição infantil e cuidados pós-parto. A plataforma proporcionava um ambiente intuitivo onde usuárias acompanhavam conteúdos educativos, acessavam orientações especializadas e encontravam suporte para cada fase da gestação e dos primeiros meses do bebê. ",
            imagens: Array.from({ length: 11 }, (_, i) => `./BabyCare/${i + 1}.png`)
        },
        {
            ambiente: "desktop",
            capa: "./Geeko/GeekoV.png",
            fundo: "bg-[rgb(255,31,53)] [box-shadow:inset_0_-30_60px_20px_rgb(255,0,98)]",
            delay: "delay-800",
            desc: "descrição de GEEKO Lorem ipsum dolor sit...",
            imagens: Array.from({ length: 5 }, (_, i) => `./Geeko/${i + 1}.png`)
        }
    ];

    const ProjectCards = projetos.map((projeto, index) => {
        return (
            <button
                disabled={disabled}
                key={index}
                onClick={() => handleClick(index)}
                className={`overflow-hidden !rounded-xl ${projeto.fundo} ${projeto.delay} 
                flex justify-center items-center transition-all duration-600
                    ${selected === null
                        ? `lg:h-70 lg:w-60 lg:p-14 lg:m-5 card p-8 w-43 m-2 h-50`
                        : selected === index

                            ? projeto.ambiente === "mobile" ? `delay-600 lg:aspect-[0.8] w-[100%] lg:p-0  ${sumirCard}` : `delay-600 lg:p-0  aspect-[16/9] w-full ${sumirCard}`



                            : `scale-0 opacity-0 ${sumir} w-0 h-0`
                    }`}
            >
                <Image alt="" src={projeto.capa} width={360} height={200} />

            </button>
        );
    });

    function Avancar() {
        if (selected === null) return;

        const imagens = projetos[selected].imagens;
        const currentIndex = imagens.indexOf(selectedImage); // pega o índice atual
        const nextIndex = currentIndex >= imagens.length - 1 ? 0 : currentIndex + 1;
        setSelectedImage(imagens[nextIndex]); // mantém string
    }

    function Voltar() {
        if (selected === null) return;

        const imagens = projetos[selected].imagens;
        const currentIndex = imagens.indexOf(selectedImage); // pega o índice atual
        const prevIndex = currentIndex <= 0 ? imagens.length - 1 : currentIndex - 1;
        setSelectedImage(imagens[prevIndex]); // mantém string
    }


    const Carousel = selected === null ? null : (
        <div className={`z-0 transition-all duration-600 relative rounded-xl ${carouselStyle}`} style={{ maxHeight: '100%' }}>
            {/* Botões fora do scroll */}
            <button
                className={`absolute flex items-center justify-center pr-2 left-0 top-1/2 transform -translate-y-1/2 rounded !rounded-4xl !rounded-tl-none !rounded-bl-none ${buttonStyle}`}
                onClick={Voltar}
            >
                ◀
            </button>
            <button
                className={`absolute flex items-center justify-center pl-2 right-0 top-1/2 transform -translate-y-1/2 rounded !rounded-4xl !rounded-tr-none !rounded-br-none ${buttonStyle}`}
                onClick={Avancar}
            >
                ▶
            </button>
            <button
                className={`absolute flex items-center justify-center pl-2 right-0 top-0 transform rounded !rounded-4xl !rounded-tl-none !rounded-tr-none !rounded-br-none ${backButtonStyle}`}
                onClick={() => handleClick(selected)}
            >
                ↩
            </button>

            {/* Área scrollável */}
            <div className={`transition-all duration-600 ${areaScrollavel}`}>
                <Image
                    className=""
                    alt=""
                    src={selectedImage}
                    width={selectedImageProps}
                    height={selectedImageProps}
                />
            </div>
        </div>
    );



    const ProjectDesc = selected !== null ? (
        <p className={`overflow-hidden transition-all duration-600 text-justify ${textStyle}`}>{selectedText}</p>
    ) : null;



    return (
        <div className={`w-full flex flex-col justify-between lg:mt-10 xl:w-300 ${mobilePadding}`}>



            <div className={`relative ${wrapperW}`}>
                <div className="w-full relative flex flex-wrap justify-center">
                    {Carousel}
                    {ProjectCards}
                </div>
            </div>

            {ProjectDesc}
        </div>
    );
}
