import './index.css';
import { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import Card from '../../components/Card/index.jsx';
import axios from 'axios';

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const pegarAPI = async () => {
        try {
            const resposta = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
            const listaDeLinks = resposta.data.results;

            const detalhesPokemons = await Promise.all( /* ele espera vários links(promisse.all), pois aqui temos um map de get com vários links no axios,
                e o código só continua quando todos devolverem os dados */ 
                listaDeLinks.map(async (pokemon) => {
                    const res = await axios.get(pokemon.url);
                    return {
                        id: res.data.id,
                        name: res.data.name,
                        image: res.data.sprites.other['official-artwork'].front_default
                    };
                })
            );

            setPokemons(detalhesPokemons);
            
        } catch (erro) {
            console.error("Erro ao buscar pokémons:", erro);
        }
    };

    useEffect(() => {
        pegarAPI();
    }, []);

    return (
        <div className='container'>
            {pokemons.map((pokemon) => (
                <Card
                    key={pokemon.id}
                    name={pokemon.name}
                    id={pokemon.id}
                    image={pokemon.image}
                    // onClick={() => navigate("/Pokemon")}
                />
            ))}
        </div>
    );
};

export default Pokemons;
