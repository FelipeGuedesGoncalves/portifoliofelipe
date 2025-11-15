"use client";

import Image from "next/image";
import { useState } from "react";
import './customCard.css'

export default function PortShow() {


    const [selected, setSelected] = useState<number | null>(null)
    const [sumir, setSumir] = useState<string | null>()
    const [disabled, setDisabled] = useState<boolean>(false)

    function handleClick(idx: number) {
        setSelected(prev => prev === idx ? null : idx);

        setTimeout(() => {
            setSumir(prev => prev === "hidden" ? null : "hidden");
        }, 1000);

        setDisabled(true)

        setTimeout(() => {
            setDisabled(false);
        }, 1000);

    }


    const projetos = [
        {
            img: "/InsightWiseV.png",
            fundo: "bg-[rgb(135,36,255)]",
            delay: "delay-100",
        },
        {
            img: "/PortoBikeV.png",
            fundo: "bg-[rgb(255,255,255)]",
            delay: "delay-200",
        },
        {
            img: "/HeatWiseV.png",
            fundo: "bg-[rgb(255,168,0)]",
            delay: "delay-300",
        },
        {
            img: "/HunzerV.png",
            fundo: "bg-[rgb(147,215,3)]",
            delay: "delay-400",
        },
        {
            img: "/BlueHopeV.png",
            fundo: "bg-[rgb(27,87,245)]",
            delay: "delay-500",
        },
        {
            img: "/GridHubV.png",
            fundo: "bg-[rgb(0,135,255)]",
            delay: "delay-600",
        },
        {
            img: "/BabyCareV.png",
            fundo: "bg-[rgb(73,106,247)]",
            delay: "delay-700",
        },
        {
            img: "/GeekoV.png",
            fundo: "bg-[rgb(255,31,53)]",
            delay: "delay-800",
        }
    ];

    const botoescomimg = projetos.map((projeto, index) =>

        <button
            disabled={disabled}
            key={index}
            onClick={() => handleClick(index)}
            className={`${projeto.fundo} ${projeto.delay}  p-14 m-5 flex justify-center items-center transition-all duration-600 p ${selected === null ? "h-70 w-90 card" : selected === index ? `delay-600 scale-200 ` : `scale-0 w-0 h-0 ${sumir}`}`}>
            <Image alt="" src={projeto.img} width={360} height={200} />
        </button>)

    return (


        <div className="h-full w-full flex flex-wrap xl:w-300 w-full justify-center">
            {botoescomimg}
        </div>
    )
}