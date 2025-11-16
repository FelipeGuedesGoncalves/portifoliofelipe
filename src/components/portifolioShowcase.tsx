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
    const [showImage, setShowImage] = useState(true);


    function handleClick(idx: number) {
        if (selected === idx) {
            // Deselecionando
            setDisabled(true);
            setSumir(null); // remove hidden imediatamente para animar a volta

            setTextStyle("lg:w-1/2 lg:h-170 h-200 lg:ml-10 lg:mt-0 lg:p-0 p-6");

            setTimeout(()=> {
            setTextStyle("lg:w-1/2 lg:mt-0 lg:p-0 px-6 h-0");
            },200)

            setTimeout(() => {
                setSelected(null);
                setDisabled(false);
                setWrapperW(null);
                setTextStyle("");
                setSelectedText(null)
                setShowImage(true);
            }, 850); // tempo da animação de volta
        } else {
            // Selecionando
            setSelected(idx);
            setDisabled(true);

            setTimeout(() => {
                setSumir("hidden"); // esconde após a animação de saída
                setWrapperW("lg:w-[50%] lg:p-0 p-6 ");
                setDisabled(false);
                setTextStyle("lg:w-1/2 h-0 lg:mt-0 lg:p-0 p-6");
            }, 600); // tempo da animação de saída

            setTimeout(()=> {
                setTextStyle("lg:w-1/2 lg:h-170 h-200 lg:ml-10 lg:mt-0 lg:p-0 p-6");
                setSelectedText(projetos[idx].desc);
            },800)

            setTimeout(()=> {
                setTextStyle("lg:w-1/2 lg:h-170 lg:ml-10 lg:mt-0 lg:p-0 p-6");
                setSelectedText(projetos[idx].desc);
                setShowImage(false);
            },1000)
        }
    }

const projetos = [
    { 
        img: "/InsightWise/InsightWiseV.png", 
        fundo: "bg-[rgb(135,36,255)] [box-shadow:inset_0_-30_60px_20px_rgb(119,0,255)]", 
        delay: "delay-100", 
        desc: "descrição de INSIGHTWISE Lorem ipsum dolor sit, amet consectetur adipisicaaaaaaaaaaaaaaa a aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! " 
        
    },
    { 
        img: "/PortoBike/PortoBikeV.png", 
        fundo: "bg-[rgb(255,255,255)]", 
        delay: "delay-200", 
        desc: "descrição de PORTOBIKE Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! " 
        
    },
    { 
        img: "/HeatWise/HeatWiseV.png", 
        fundo: "bg-[rgb(255,168,0)] [box-shadow:inset_0_-30_60px_20px_rgb(255,136,0)]", 
        delay: "delay-300", 
        desc: "descrição de HEATWISE Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! " 
        
    },
    { 
        img: "/Hunzer/HunzerV.png", 
        fundo: "bg-[rgb(147,215,3)] [box-shadow:inset_0_-30_60px_20px_rgb(100,199,43)]",
        delay: "delay-400", 
        desc: "descrição de HUNZER Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! " 
        
    },
    { 
        img: "/BlueHope/BlueHopeV.png", 
        fundo: "bg-[rgb(27,87,245)] [box-shadow:inset_0_-30_60px_20px_rgb(21,70,196)]", 
        delay: "delay-500", 
        desc: "descrição de BLUEHOPE Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! " 
        
    },
    { 
        img: "/GridHub/GridHubV.png", 
        fundo: "bg-[rgb(0,135,255)] [box-shadow:inset_0_-30_60px_20px_rgb(0,102,255)]", 
        delay: "delay-600", 
        desc: "descrição de GRIDHUB Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! " 
        
    },
    { 
        img: "/BabyCare/BabyCareV.png", 
        fundo: "bg-[rgb(73,106,247)] [box-shadow:inset_0_-30_60px_20px_rgb(99,66,245)]", 
        delay: "delay-700", 
        desc: "descrição de BABYCARE Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! " 
        
    },
    { 
        img: "/Geeko/GeekoV.png", 
        fundo: "bg-[rgb(255,31,53)] [box-shadow:inset_0_-30_60px_20px_rgb(255,0,98)]", 
        delay: "delay-800", 
        desc: "descrição de GEEKO Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam veniam explicabo illum et ut animi sunt, vel odit iste. Quo error modi asperiores commodi aliquid magni repellat dolor assumenda consequuntur! " 
        
    }
];


    const ProjectCards = projetos.map((projeto, index) => (
        <button
            disabled={disabled}
            key={index}
            onClick={() => handleClick(index)}
            className={`!rounded-xl ${projeto.fundo} ${projeto.delay} flex justify-center items-center transition-all duration-600 p
                ${selected === null 
                    ? `lg:h-70 lg:w-60 lg:p-14 lg:m-5 card p-8 w-43 m-2 h-50`
                    : selected === index 
                        ? "delay-600 lg:h-170 lg:p-0 p-10 h-100 w-full" 
                        : `scale-0 opacity-0 ${sumir} w-0 h-0`
                }`}
        >
            {showImage === true ? 
            
            <Image alt="" src={projeto.img} width={360} height={200}/>

            :
            <div></div>}
            
        </button>
    ));

    const ProjectDesc = selected !== null ? (
        <p className={`overflow-hidden transition-all duration-600 text-justify ${textStyle}`}>{selectedText}</p>
    ) : null;

    return (
        <div className=" w-full flex lg:flex-row flex-col justify-between lg:mt-10 xl:w-300">
            <div className={`${wrapperW} `}>
                <div className="w-full flex flex-wrap justify-center">
                    {ProjectCards}
                </div>
            </div>
            {ProjectDesc}
        </div>
    );
}
