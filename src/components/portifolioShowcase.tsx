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


    function handleClick(idx: number) {
        if (selected === idx) {
            // Deselecionando
            setDisabled(true);
            setSumir(null);
            setSumirCard(null)

            setTextStyle("lg:w-full lg:h-170 h-200 lg:ml-10 lg:mt-0 lg:p-0 p-6");

            setTimeout(() => {
                setTextStyle("lg:w-full lg:mt-0 lg:p-0 px-6 h-0");
            }, 200)

            setTimeout(() => {
                setSelected(null);
                setDisabled(false);
                setWrapperW(null);
                setTextStyle("");
                setSelectedText(null)
            }, 850);
        } else {
            // Selecionando
            setSelected(idx);
            setDisabled(true);

            setTimeout(() => {
                setSumir("hidden");
                setWrapperW("lg:flex-shrink-0 xl:w-210 lg:h-118 h-100 w-full lg:p-0 p-6");
                setDisabled(false);
                setTextStyle("lg:w-full h-0 lg:mt-0 lg:p-0 p-6");
                setSelectedImage(projetos[idx].imagens[0])
            }, 600);

            setTimeout(() => {
                setTextStyle("lg:w-full lg:h-118 h-200 lg:ml-10 lg:mt-0 lg:p-0 p-6");
                setSelectedText(projetos[idx].desc);
            }, 800)

            setTimeout(() => {
                setTextStyle("xl:w-full xl:h-118 xl:ml-10 xl:mt-0 xl:p-0 p-6 mt-10");
                setSumirCard("opacity-0 pointer-events-none absolute z-1")
            }, 1000)

            setTimeout(() => {
                setCarouselStyle("lg:h-118 xl:w-210 h-100 w-full absolute z-0 overflow-y-auto scrollbar-hide")
                setButtonStyle("w-13 h-22 bg-neutral-500 transition-all duration-200 opacity-30 hover:opacity-100 [box-shadow:inset_0_0_20px_6px_rgba(0,0,0,0.575)]")
                setSelectedImageProps(2000)
            }, 1300)
        }
    }

    const projetos = [
        {
            capa: "/InsightWise/InsightWiseV.png",
            fundo: "bg-[rgb(135,36,255)] [box-shadow:inset_0_-30_60px_20px_rgb(119,0,255)]",
            delay: "delay-100",
            desc: "descrição de INSIGHTWISE Lorem ipsum dolor sit...",
            imagens: Array.from({ length: 4 }, (_, i) => `/InsightWise/${i + 1}.png`)
        },
        {
            capa: "/PortoBike/PortoBikeV.png",
            fundo: "bg-[rgb(255,255,255)]",
            delay: "delay-200",
            desc: "descrição de PORTOBIKE Lorem ipsum dolor sit...",
            imagens: Array.from({ length: 3 }, (_, i) => `/PortoBike/${i + 1}.png`)
        },
        {
            capa: "/HeatWise/HeatWiseV.png",
            fundo: "bg-[rgb(255,168,0)] [box-shadow:inset_0_-30_60px_20px_rgb(255,136,0)]",
            delay: "delay-300",
            desc: "descrição de HEATWISE Lorem ipsum dolor sit...",
            imagens: Array.from({ length: 3 }, (_, i) => `/InsightWise/${i + 1}.png`)
        },
        {
            capa: "/Hunzer/HunzerV.png",
            fundo: "bg-[rgb(147,215,3)] [box-shadow:inset_0_-30_60px_20px_rgb(100,199,43)]",
            delay: "delay-400",
            desc: "descrição de HUNZER Lorem ipsum dolor sit...",
            imagens: Array.from({ length: 3 }, (_, i) => `/InsightWise/${i + 1}.png`)
        },
        {
            capa: "/BlueHope/BlueHopeV.png",
            fundo: "bg-[rgb(27,87,245)] [box-shadow:inset_0_-30_60px_20px_rgb(0,42,228)]",
            delay: "delay-500",
            desc: "descrição de BLUEHOPE Lorem ipsum dolor sit...",
            imagens: Array.from({ length: 3 }, (_, i) => `/InsightWise/${i + 1}.png`)
        },
        {
            capa: "/GridHub/GridHubV.png",
            fundo: "bg-[rgb(0,135,255)] [box-shadow:inset_0_-30_60px_20px_rgb(0,102,255)]",
            delay: "delay-600",
            desc: "descrição de GRIDHUB Lorem ipsum dolor sit...",
            imagens: Array.from({ length: 3 }, (_, i) => `/InsightWise/${i + 1}.png`)
        },
        {
            capa: "/BabyCare/BabyCareV.png",
            fundo: "bg-[rgb(73,106,247)] [box-shadow:inset_0_-30_60px_20px_rgb(99,66,245)]",
            delay: "delay-700",
            desc: "descrição de BABYCARE Lorem ipsumLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum doloLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitr sitLorem ipsum dolor sitLorem ipsum dolor sit dolor sit...",
            imagens: Array.from({ length: 3 }, (_, i) => `/BabyCare/${i + 1}.png`)
        },
        {
            capa: "/Geeko/GeekoV.png",
            fundo: "bg-[rgb(255,31,53)] [box-shadow:inset_0_-30_60px_20px_rgb(255,0,98)]",
            delay: "delay-800",
            desc: "descrição de GEEKO Lorem ipsum dolor sit...",
            imagens: Array.from({ length: 3 }, (_, i) => `/InsightWise/${i + 1}.png`)
        }
    ];

    const ProjectCards = projetos.map((projeto, index) => {
        return (
            <button
                disabled={disabled}
                key={index}
                onClick={() => handleClick(index)}
                className={`overflow-hidden !rounded-xl ${projeto.fundo} ${projeto.delay} flex justify-center items-center transition-all duration-600
                    ${selected === null
                        ? `lg:h-70 lg:w-60 lg:p-14 lg:m-5 card p-8 w-43 m-2 h-50`
                        : selected === index
                            ? `delay-600 lg:h-118 lg:p-0 p-10 h-100 w-full ${sumirCard}`
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
  <div className={`relative rounded-xl ${carouselStyle}`} style={{ maxHeight: '100%' }}>
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

    {/* Área scrollável */}
    <div className="overflow-y-auto scrollbar-hide h-full w-full">
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
        <div className="w-full flex xl:flex-row flex-col justify-between lg:mt-10 xl:w-300">



            <div className={`relative ${wrapperW}`}>
                <div className="w-full flex flex-wrap justify-center">
                    {Carousel}
                    {ProjectCards}
                </div>
            </div>

            {ProjectDesc}
        </div>
    );
}
