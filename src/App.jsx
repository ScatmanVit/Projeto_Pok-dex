import "././assets/icone.png"
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/index.jsx";
import Pokemon from "./pages/Pokemon/index.jsx";
import Contato from "./pages/Contato/index.jsx";
import Pokemons from "./pages/Pokemons/index.jsx";
import { Route, Routes } from 'react-router-dom'; // CORRIGIDO

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Contato" element={<Contato />} />
                <Route path="/Pokemons" element={<Pokemons />} />
                <Route path="/Pokemon" element={<Pokemon />} />
            </Routes>
        </>
    );
};

export default App;
