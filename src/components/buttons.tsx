"use client"

import DownloadIcon from '@mui/icons-material/Download';

export interface ButtonSpecs{
    name: string
    level: number
}

export function NavButton({name, level}: ButtonSpecs){
    return(
        <button className="bg-transparent bg-none h-10 p-2 text-lg hover:underline"
        onClick={() => window.scrollTo({ top: level, behavior: "smooth" })}>
            {name}
        </button>
    )
}

export function DownloadBtn(){
    return(
        <a 
        href="/CVFelipeGuedesGoncalves.pdf"
        download={"CVFelipeGuedesGoncalves.pdf"} 
        className="text-lg flex text-black bg-white p-2 px-4 mt-2    hover:bg-transparent hover:text-white  transition ease-in-out duration-200">
            Download CV
            <DownloadIcon className="ml-3 mt-[2]"/>
            
        </a>
    )
}