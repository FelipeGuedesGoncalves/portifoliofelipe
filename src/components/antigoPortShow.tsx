const projects = [
        {
            img: "/InsightWise.png",
            desc: "InsightWise é uma plataforma que desenvolvi em grupo com o intuito de ajudar empresas a aproveitarem ao máximo os sistemas ERP da Plusoft. Focada em análise de produtividade, a ferramenta monitora interações nos softwares corporativos, identifica pontos de melhoria e gera insights estratégicos para aumentar a eficiência das equipes. Neste trabalho fiquei responsável pela confecção do port mobile da aplicação via React Native, algumas das tecnologias usadas foram o Firebase Realtime Database, Expo e API de reconhecimento de CNPJ, acesse a aplicação ou veja o figma acessando algum dos botões abaixo:",
            figmaLink: "",
            appLink: ""
        },
        {
            img: "/PortoBike.png",
            desc: "Desc de Porto Bike Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur numquam molestiae laborum optio repellat nemo pariatur cupiditate explicabo nam praesentium fugit, magni modi, eum, totam impedit ipsam! Veniam, magni dicta!",
            figmaLink: "",
            appLink: ""
        },
        {
            img: "/HeatWise.png",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam suscipit ipsam accusamus voluptates assumenda, sapiente debitis harum numquam quos voluptatem praesentium incidunt ex explicabo pariatur sunt! Aperiam nostrum odit dicta!",
            figmaLink: "",
            appLink: ""
        },
        {
            img: "/Hunzer.png",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut ipsum nam sit nisi error. Velit, quibusdam quas. Assumenda ut iusto debitis culpa voluptas possimus sequi modi tempore velit at?",
            figmaLink: "",
            appLink: ""
        },
        {
            img: "/BlueHope.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore magnam atque illo expedita, minus obcaecati aspernatur eligendi dolorum deleniti suscipit sunt. Quam nihil incidunt commodi veritatis dolorem reiciendis ipsum.",
            figmaLink: "",
            appLink: ""
        },
        {
            img: "/GridHub.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eius et eum assumenda accusantium id dicta porro quas aliquid deserunt aut modi quos delectus, architecto cum soluta corrupti deleniti ab.",
            figmaLink: "",
            appLink: ""
        },
        {
            img: "/BabyCare.png",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quisquam consectetur dignissimos, optio, nulla voluptate neque rerum ducimus veritatis dolorum nobis aspernatur nesciunt temporibus corpos, rem at! Dicta, nesciunt enim?",
            figmaLink: "",
            appLink: ""
        }
    ];

    const DATA: string[] = [
        "/InsightWise.png",
        "/PortoBike.png",
        "/HeatWise.png",
        "/Hunzer.png",
        "/BlueHope.png",
        "/GridHub.png",
        "/BabyCare.png"
    ];


    const [currentProject, setCurrentProject] = useState(0);

    function Avancar() {
        setCurrentProject((prev) => (prev >= projects.length - 1 ? 0 : prev + 1));
    }

    function Voltar() {
        setCurrentProject((prev) => (prev <= 0 ? projects.length - 1 : prev - 1));
    }

    const project = projects[currentProject];

    return (
        <div className="md:text-base text-sm mt-10 flex lg:flex-row flex-col justify-between items-center text-justify xl:w-280">
            <div className="w-full flex items-center justify-center">
                <button
                    className="flex-shrink-0 bg-white p-4 sm:w-16 sm:h-16 w-13 h-13 flex justify-center items-center !rounded-full text-black font-bold text-3xl mr-[-33] z-2"
                    onClick={Voltar}
                >
                    {"<"}
                </button>

                <Image
                    className="z-1"
                    alt=""
                    src={project.img}
                    width={800}
                    height={100}
                />

                <button
                    className="flex-shrink-0 bg-white p-4 sm:w-16 sm:h-16 w-13 h-13 flex justify-center items-center !rounded-full text-black font-bold text-3xl ml-[-33] z-2"
                    onClick={Avancar}
                >
                    {">"}
                </button>
            </div>

            <div className="lg:w-[39%] lg:ml-10 lg:mt-0 mt-15">
                <p>{project.desc}</p>
                <div className="w-full flex lg:justify-between justify-around mt-7">
                    <a href={project.appLink} className="text-black bg-white xl:p-2 xl:px-4 p-1 px-3 font-semibold hover:bg-transparent hover:text-white transition ease-in-out duration-200">
                        React Native App
                    </a>
                    <a href={project.figmaLink} className="text-black bg-white xl:p-2 xl:px-4 p-1 px-3 hover:bg-transparent hover:text-white transition ease-in-out duration-200">
                        Figma
                    </a>
                </div>
            </div>
        </div>
    );