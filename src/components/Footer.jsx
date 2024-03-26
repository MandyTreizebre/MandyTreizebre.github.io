import { Link } from "react-router-dom"
import Logo from "../../public/logo-noir.png"
import LogoLinkedin from "../../public/icon-linkedin.png"
import LogoFacebook from "../../public/icon-facebook.png"
import "../styles/footer.css"

const Footer = () => {

  return (

    <>
      <footer>
        <div className="container-footer">
          <div className="first-section-footer">
            <div className="logo-footer">
              <Link to="/" aria-label="Visiter la page d'accueil de mt informatique">
                <img src={Logo} className="logo-footer" alt="Logo de MT Informatique"/>
              </Link>
            </div>

            <div className="contact-footer">
              <p>07 71 68 04 82</p>
              <p>contact@mtinformatique.fr</p>
              <p> Siret : 980 737 720 00014 </p>
              <div className="social-footer">
                <Link to="https://www.linkedin.com/company/mtinformatique" rel="noreferrer noopener" target="_blank" aria-label="Visiter la page linkedin de MT Informatique">
                  <img src={LogoLinkedin} alt="logo de linkedin" aria-label="Visiter la page linkedin de MT Informatique" className="logo-linkedin"/>
                </Link>

                <Link to="#" rel="noreferrer noopener" target="_blank" aria-label="Visiter la page facebook de MT Informatique">
                  <img src={LogoFacebook} alt="logo de facebook" className="logo-facebook"/>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="second-section-footer">
            <div className="copyright-footer">
                <p>
                  © 2024 - Mandy Treizebré
                </p>
            </div>
            <Link to="/mentions-legales" aria-label="Visiter la page mentions légales">
              Mentions légales
            </Link>
          </div>
        </div>
      </footer>
    </>

  )
}

export default Footer