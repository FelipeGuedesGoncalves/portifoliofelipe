"use client"

import { Download } from "lucide-react";

export interface ButtonSpecs{
    name: string
    level: number
}

export function NavButton({name, level}: ButtonSpecs){
    return(
        <button className="bg-transparent bg-none h-10 p-2 text-xl mx-10 hover:underline"
        onClick={() => window.scrollTo({ top: level, behavior: "smooth" })}>
            {name}
        </button>
    )
}

export function DownloadBtn(){
    return(
        <button className="text-xl flex text-black bg-white mr-10 p-2 px-4 mt-2    hover:bg-transparent hover:text-white  transition ease-in-out duration-200">
            Download CV
            <Download className="ml-5"/>
        </button>
    )
}