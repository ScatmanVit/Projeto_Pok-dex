import logo from "../../assets/logo.png"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Header.css'


const links = [
  { link: "/", text: "HOME" },
  { link: "/pokemons", text: "POKEMONS" },
  { link: "/contato", text: "CONTATO" }
]


export const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header>
      <div onClick={() => navigate('/')} className="header__logo">
        <img src={logo} alt="Logo Pokedex" />
      </div>
      <nav className='header__content'>
        {links.map((item, index) => (
          <Link key={index} to={item.link} className={item.text === "CONTATO" ? "header_link_contact_button" : "header__link"}>
            {item.text}
          </Link>
        ))}
      </nav>

    </header>
  )
}

export default Header;
