import fogodoom from "../../assets/Fogo Doom.png"
import insta from "../../assets/Instagram.png"
import cloneflix from "../../assets/Cloneflix.png"
import pokedex from "../../assets/Pokedex React.png"
import wip from "../../assets/WIP.png"
import reactNotes from "../../assets/ReactNotes.png"
import climaApp from "../../assets/ClimaApp.png"
import mundoInvertido from "../../MundoInvertido.png"

export const projects = [
    {
        title: "Fogo Doom",
        description: "Representação do fogo pixelizado do jogo Doom, feito com javascript puro",
        imgUrl: fogodoom,
        git: "https://github.com/lazzyin/Fogo-do-Doom-JS",
        inLive:"https://lazzyin.github.io/Fogo-do-Doom-JS/",
    },
    {
        title: "Interface Instagram",
        description: "Clone da interface do instagram feita em HTML e CSS",
        imgUrl: insta,
        git: "https://github.com/lazzyin/Clone-Instagram-Login",
        inLive:"https://lazzyin.github.io/Clone-Instagram-Login/",
    },
    {
        title: "Cloneflix",
        description: "Projeto em react utilizando a api do Tmdb, que tem como objetivo criar um clone da interface da netflix e mostrar o trailer dos filmes/ series ao usuario",
        imgUrl: cloneflix,
        git: "https://github.com/lazzyin/Clone-Netflix",
        inLive:"https://cloneflix-app.herokuapp.com/"
    },
    {
        title: "Pokedex React",
        description: "Projeto em react utilizando a pokeApi, uma interface que mostra todos os pokemons e quando indicado algum especifico é possivel ver seus status",
        imgUrl: pokedex,
        git: "https://github.com/lazzyin/Pokedex-em-React",
        inLive:"https://poke-app-react.herokuapp.com/"
    },
    {
        title: "React Notes",
        description: "Projeto feito em react, cria post-it virtuais que tem seus dados mantidos utilizando LocalStorage",
        imgUrl: reactNotes,
        git: "https://github.com/lazzyin/React-Notes",
        inLive:""
    },
    {
        title: "Clima-App",
        description: "Projeto feito em Node.js utilizando a api de clima, mostra o clima atual de uma localização indicada pelo usuario",
        imgUrl: climaApp,
        git: "",
        inLive:""
    },
    {
        title: "Mundo Invertido",
        description: "Projeto realizado durante a Semana Front-end da DIO. consiste em uma landingpage com o tem de stramger things com um theme switch que transforma a pagina no Mundo invertido. possui tambem um formulario integrado a api do cloud firebase",
        imgUrl: mundoInvertido,
        git: "https://github.com/lazzyin/Mundo-Invertido-DIO",
        inLive:"https://lazzyin.github.io/Mundo-Invertido-DIO/"
    },
    {
        title: "CryptoTracker-WIP",
        description: "Projeto construido em react, consumindo a api do coingecko. consiste em uma tabela listando todas as crypto moedas atuais, seu preço e movimentação nas ultimas 24 horas",
        imgUrl: wip,
        git: "",
        inLive:""
    },
    {
        title: "App Ecommerce-WIP",
        description: "Projeto fullstack utilizando React para o front, Node.js para o backend e MongoDB para o banco de dados. trata-se de um projeto que implementara uma loja virtual, com interações reais com o usuario, utilizando, por exemplo, a API do paypal para completar o pagamento dos itens e a api do Google Maps para informar o endereço de entrega",
        imgUrl: wip,
        git: "",
        inLive:""
    },
];

