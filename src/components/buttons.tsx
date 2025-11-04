"use client"

import DownloadIcon from "@/assets/DownloadIcon.svg"

export interface ButtonSpecs{
    name: string
    level: number
}

export function NavButton({name, level}: ButtonSpecs){
    return(
        <button className="bg-transparent bg-none h-10 p-2 text-xl mx-10"
        onClick={() => window.scrollTo({ top: level, behavior: "smooth" })}>
            {name}
        </button>
    )
}

export function DownloadBtn(){
    return(
        <button>
            Download
            <DownloadIcon />
        </button>
    )
}