"use client";

import Image from "next/image";
import { useState } from "react";
import './customCard.css'

export default function PortShow() {
    const [selected, setSelected] = useState<number | null>(null);
    const [sumir, setSumir] = useState<string | null>(null);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [wrapperW, setWrapperW] = useState<string | null>(null);
    const [textStyle, setTextStyle] = useState<string | null>(null);
    const [selectedText, setSelectedText] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);


    function handleClick(idx: number) {
        if (selected === idx) {
            // Deselecionando
            setDisabled(true);
            setSumir(null);

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
                setWrapperW("lg:flex-shrink-0 lg:w-150 lg:p-0 p-6");
                setDisabled(false);
                setTextStyle("lg:w-full h-0 lg:mt-0 lg:p-0 p-6");
            }, 600);

            setTimeout(() => {
                setTextStyle("lg:w-full lg:h-170 h-200 lg:ml-10 lg:mt-0 lg:p-0 p-6");
                setSelectedText(projetos[idx].desc);
            }, 800)

            setTimeout(() => {
                setTextStyle("lg:w-full lg:h-170 lg:ml-10 lg:mt-0 lg:p-0 p-6");
            }, 1000)
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
            imagens: Array.from({ length: 4 }, (_, i) => `/InsightWise/${i + 1}.png`)
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
                            ? "delay-600 lg:h-170 lg:p-0 p-10 h-100 w-full"
                            : `scale-0 opacity-0 ${sumir} w-0 h-0`
                    }`}
            >
                    <Image alt="" src={projeto.capa} width={360} height={200} />

            </button>
        );
    });

    const ProjectDesc = selected !== null ? (
        <p className={`overflow-hidden transition-all duration-600 text-justify ${textStyle}`}>{selectedText}</p>
    ) : null;

    

    return (
        <div className="w-full flex lg:flex-row flex-col justify-between lg:mt-10 xl:w-300">
            
            
            
            <div className={`${wrapperW}`}>
                <div className="w-full flex flex-wrap justify-center">
                    {ProjectCards}
                </div>
            </div>

            {ProjectDesc}
        </div>
    );
}
