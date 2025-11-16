"use client"

import DownloadIcon from '@mui/icons-material/Download';

export interface ButtonSpecs {
  name: string
  targetId: string
  offset: number
  className: string
}

export function NavButton({ name, targetId, className, offset }: ButtonSpecs) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {// pixels acima do elemento
      const topPos = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  };

  return (
    <button
      className={"bg-transparent h-10 p-2 hover:underline " + className}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}



export function DownloadBtn(){
    return(
        <a 
        href="/CVFelipeGuedesGoncalves.pdf"
        download={"CVFelipeGuedesGoncalves.pdf"} 
        className="flex text-black bg-white md:p-2 md:px-4 p-[1] px-2 mt-2 md:mb-1 mb-2 hover:bg-transparent hover:text-white transition ease-in-out duration-200">
            Download CV
            <DownloadIcon className="ml-3 mt-[2]"/>
            
        </a>
    )
}