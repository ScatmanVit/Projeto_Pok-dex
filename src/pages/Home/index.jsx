import React from 'react';
import './index.css';
import Section from "../../components/Section/index.jsx";
import "../../components/Section/style.css";

const textos = [
    "    Bem-vindo à Pokédex React, uma enciclopédia digital feita para todos os fãs de Pokémon — desde os mais nostálgicos até os novos treinadores. Aqui, você pode explorar todos os Pokémons da primeira geração com uma interface moderna, construída com React e conectada diretamente à PokéAPI. É como ter um verdadeiro dispositivo do Professor Carvalho no seu navegador!",
    <br />,
    "    Navegue por uma galeria completa com cards ilustrados de cada Pokémon, acesse informações detalhadas como tipo, habilidades, altura, peso e evolução, e use nossa barra de busca para encontrar seu favorito em segundos. Além disso, você pode filtrar por tipo e até descobrir quais criaturas dominam o fogo, a água, a eletricidade e outros elementos. Tudo isso com uma experiência dinâmica, rápida e feita para desktop.",
    <br />,
    "    Esse projeto foi desenvolvido com o objetivo de ensinar React na prática, de uma forma divertida e envolvente. A Pokédex React é mais do que um simples catálogo — ela representa o poder da programação para transformar conhecimento em algo visual, interativo e cheio de personalidade. Preparado para começar sua jornada? Então escolha seu Pokémon e venha explorar esse mundo com a gente!"
];

const Home = () => {
    return (
        <main className="home">
                <Section>
                    {textos.map((texto, index) => (
                        <p key={index}>{texto}</p>
                    ))}
                </Section>
            
        </main>
    );
};

export default Home;
