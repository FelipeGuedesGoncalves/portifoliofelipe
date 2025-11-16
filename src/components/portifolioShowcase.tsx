"use client";

import Image from "next/image";
import { useState } from "react";
import './customCard.css'

export default function PortShow() {
    const [selected, setSelected] = useState<number | null>(null);
    const [sumir, setSumir] = useState<string | null>(null);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [wrapperW, setWrapperW] = useState<string | null>(null);

    function handleClick(idx: number) {
        if (selected === idx) {
            // Deselecionando
            setDisabled(true);
            setSumir(null); // remove hidden imediatamente para animar a volta
            setWrapperW(null);

            setTimeout(() => {
                setSelected(null);
                setDisabled(false);
            }, 600); // tempo da animação de volta
        } else {
            // Selecionando
            setSelected(idx);
            setDisabled(true);

            setTimeout(() => {
                setSumir("hidden"); // esconde após a animação de saída
                setWrapperW("lg:w-[50%]");
                setDisabled(false);
            }, 600); // tempo da animação de saída
        }
    }

    const projetos = [
        { img: "/InsightWiseV.png", fundo: "bg-[rgb(135,36,255)]", delay: "delay-100", desc: "descrição de INSIGHTWISE Lorem ipsum dolor sit amet consectetur..." },
        { img: "/PortoBikeV.png", fundo: "bg-[rgb(255,255,255)]", delay: "delay-200", desc: "descrição de PORTOBIKE Lorem ipsum dolor sit amet consectetur..." },
        { img: "/HeatWiseV.png", fundo: "bg-[rgb(255,168,0)]", delay: "delay-300", desc: "descrição de HEATWISE Lorem ipsum dolor sit amet consectetur..." },
        { img: "/HunzerV.png", fundo: "bg-[rgb(147,215,3)]", delay: "delay-400", desc: "descrição de HUNZER Lorem ipsum dolor sit amet consectetur..." },
        { img: "/BlueHopeV.png", fundo: "bg-[rgb(27,87,245)]", delay: "delay-500", desc: "descrição de BLUEHOPE Lorem ipsum dolor sit amet consectetur..." },
        { img: "/GridHubV.png", fundo: "bg-[rgb(0,135,255)]", delay: "delay-600", desc: "descrição de GRIDHUB Lorem ipsum dolor sit amet consectetur..." },
        { img: "/BabyCareV.png", fundo: "bg-[rgb(73,106,247)]", delay: "delay-700", desc: "descrição de BABYCARE Lorem ipsum dolor sit amet consectetur..." },
        { img: "/GeekoV.png", fundo: "bg-[rgb(255,31,53)]", delay: "delay-800", desc: "descrição de GEEKO Lorem ipsum dolor sit amet consectetur..." }
    ];

    const ProjectCards = projetos.map((projeto, index) => (
        <button
            disabled={disabled}
            key={index}
            onClick={() => handleClick(index)}
            className={`!rounded-none ${projeto.fundo} ${projeto.delay} flex justify-center items-center transition-all duration-600 p
                ${selected === null 
                    ? `lg:h-70 lg:w-90 lg:p-14 lg:m-5 card p-8 w-43 m-2 h-50`
                    : selected === index 
                        ? "delay-600 lg:h-170 lg:p-0 p-10 h-60 w-full" 
                        : `scale-0 opacity-0 ${sumir} w-0 h-0`
                }`}
        >
            <Image alt="" src={projeto.img} width={360} height={200} />
        </button>
    ));

    const ProjectDesc = selected !== null ? (
        <p className="lg:w-1/2 lg:p-5 lg:mt-0 p-5 text-justify">{projetos[selected].desc}</p>
    ) : null;

    return (
        <div className="w-full flex lg:flex-row flex-col justify-between lg:mt-10 xl:w-300">
            <div className={`${wrapperW}`}>
                <div className="h-full w-full flex flex-wrap justify-center">
                    {ProjectCards}
                </div>
            </div>
            {ProjectDesc}
        </div>
    );
}
