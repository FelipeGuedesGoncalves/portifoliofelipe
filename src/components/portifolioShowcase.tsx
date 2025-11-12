"use client"

import Image from "next/image";
import { useState } from "react";

export default function PortShow() {
    const [currentProject, setCurrentProject] = useState(1)

    function changeProject(endereco: number) {
        switch (endereco) {
            case 1:
                return "/InsightWise.png";
            case 2:
                return "/PortoBike.png";
            case 3:
                return "/HeatWise.png";
            case 4:
                return "/Hunzer.png";
            case 5:
                return "/BlueHope.png";
            case 6:
                return "/GridHub.png";
            case 7:
                return "/BabyCare.png";
            default:
                return "/InsightWise.png";
        }
    }

    function changeProjectDesc(endereco: number) {
        switch (endereco) {
            case 1:
                return "InsightWise é uma plataforma que desenvolvi em grupo com o intuito de ajudar empresas a aproveitarem ao máximo os sistemas ERP da Plusoft. Focada em análise de produtividade, a ferramenta monitora interações nos softwares corporativos, identifica pontos de melhoria e gera insights estratégicos para aumentar a eficiência das equipes. Neste trabalho fiquei responsável pela confecção do port mobile da aplicação via React Native, algumas das tecnologias usadas foram o Firebase Realtime Database, Expo e API de reconhecimento de CNPJ, acesse a aplicação ou veja o figma acessando algum dos botões abaixo:";
            case 2:
                return "Desc de porto Bike Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur numquam molestiae laborum optio repellat nemo pariatur cupiditate explicabo nam praesentium fugit, magni modi, eum, totam impedit ipsam! Veniam, magni dicta!";
            case 3:
                return "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam suscipit ipsam accusamus voluptates assumenda, sapiente debitis harum numquam quos voluptatem praesentium incidunt ex explicabo pariatur sunt! Aperiam nostrum odit dicta!";
            case 4:
                return "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut ipsum nam sit nisi error. Velit, quibusdam quas. Assumenda ut iusto debitis culpa voluptas possimus sequi modi tempore velit at?";
            case 5:
                return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore magnam atque illo expedita, minus obcaecati aspernatur eligendi dolorum deleniti suscipit sunt. Quam nihil incidunt commodi veritatis dolorem reiciendis ipsum.";
            case 6:
                return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eius et eum assumenda accusantium id dicta porro quas aliquid deserunt aut modi quos delectus, architecto cum soluta corrupti deleniti ab.";
            case 7:
                return "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quisquam consectetur dignissimos, optio, nulla voluptate neque rerum ducimus veritatis dolorum nobis aspernatur nesciunt temporibus corporis, rem at! Dicta, nesciunt enim?";
            default:
                return "desc InsightWise";
        }
    }

    function Avancar() {
        // se chegar em 7, volta pro 1
        setCurrentProject((prev) => (prev >= 7 ? 1 : prev + 1));
    }

    function Voltar() {
        // se voltar do 1, vai pro 7
        setCurrentProject((prev) => (prev <= 1 ? 7 : prev - 1));
    }

    return (
        <div className="md:text-base text-sm mt-10 flex lg:flex-row flex-col justify-between items-center text-justify xl:w-280">
            <div className="w-full flex items-center justify-center">
                <button className="flex-shrink-0 bg-white p-4  sm:w-16 sm:h-16 w-13 h-13 flex justify-center items-center !rounded-full text-black font-bold text-3xl mr-[-33] z-2" onClick={Voltar}>
                    {"<"}
                </button>
                <Image
                    className="z-index z-1"
                    alt=""
                    src={changeProject(currentProject)}
                    width={800}
                    height={100}
                />
                <button className="flex-shrink-0 bg-white p-4  sm:w-16 sm:h-16 w-13 h-13 flex justify-center items-center !rounded-full text-black font-bold text-3xl ml-[-33] z-2" onClick={Avancar}>
                    {">"}
                </button>
            </div>
            <div className="lg:w-[39%] lg:ml-10 lg:mt-0 mt-15">
                <p className="">
                    {changeProjectDesc(currentProject)}
                </p>
                <div className="w-full flex lg:justify-between justify-around mt-7">
                    <button className="text-black bg-white lg:p-2 lg:px-4 font-semibold hover:bg-transparent hover:text-white transition ease-in-out duration-200 ">React Native App</button>
                    <button className="text-black bg-white lg:p-2 lg:px-4  hover:bg-transparent hover:text-white transition ease-in-out duration-200 ">Figma</button>
                </div>
            </div>
        </div>
    );
}
