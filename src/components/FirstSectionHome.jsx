import { Link } from "react-router-dom"
import LottieLaptop from "./LottieLaptop"
import "../styles/first-section-home.css"
import "../styles/button.css"

const FirstSectionHome = () => {

  return (

    <section className="container-first-section-home">
      <h1>Bienvenue chez MT Informatique</h1>
      <h2>Création et refonte de sites web, audit de sites, cours d&apos;informatique et dépannages.</h2>

      <div className="container-link-first-section">
        <Link to="#" aria-label="Scroll vers les prestations"className="button-contact">
          Découvrir mes services
        </Link>

        <Link to="/contact" aria-label="Visiter la page de contact" className="button-contact">
          Demandez votre devis
        </Link>
      </div>
      
      <div id="lottie-animation">
        <LottieLaptop />
      </div>

    </section>

  )
}
export default FirstSectionHome