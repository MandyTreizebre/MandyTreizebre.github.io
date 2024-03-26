import { Link } from "react-router-dom"
import Logo from "../../public/logo-noir.png"
import "../styles/header.css"

const Header = () => {

  return (

    <header>
        <div>
            <Link to="/" aria-label="Visiter la page d'accueil de mt informatique">
                <img src={Logo} id="logo" alt="logo MT Informatique"/>
            </Link>
        </div>

        <nav>
            <Link to="/" aria-label="Visiter la page d'accueil de mt informatique">
                Accueil
            </Link>

            <Link to="creation-sites" aria-label="Visiter la page de création des sites internet">
                Création de sites internet
            </Link>
                
            <Link to="/realisations" aria-label="Visiter la page des réalisations">
                Réalisations
            </Link>

            <Link to="/contact" aria-label="Visiter la page de contact">
                Contact
            </Link>
        </nav>
    </header>

  )
}

export default Header