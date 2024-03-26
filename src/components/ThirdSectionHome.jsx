import { Link } from "react-router-dom"
import ImgAudit1 from "../assets/images/audit-site1.png"
import ImgAudit2 from "../assets/images/audit-site2.png"
import "../styles/third-section-home.css"
import "../styles/button.css"

const ThirdSectionHome = () => {

  return (

    <>
        <section className="container-third-section-home">
            <h2> Audit de votre site internet </h2>

            <div className="first-container">
                <img src={ImgAudit1} alt="illustration audit site internet" />
                <div className="box-text" data-aos="fade-left" data-aos-duration="1000">
                    <h3>Les Fondations d&apos;une Présence en Ligne</h3>
                    <p>
                        La pertinence de votre présence en ligne repose sur un pilier incontournable : la sécurité de votre site web.
                        Je réalise des audits qui servent à évaluer et renforcer la sécurité de votre plateforme, car un site vulnérable est un risque non 
                        seulement pour vous, mais aussi pour vos utilisateurs. 

                        En me confiant l&apos;audit de votre site web, vous assurez non seulement sa sécurité mais également sa disponibilité continue, deux critères déterminants pour une présente web forte et digne de confiance. 
                    </p>
                </div>
            </div>
            
            <div className="second-container">
                <div className="box-text" data-aos="fade-right" data-aos-duration="1000">
                    <h3>Audits Personnalisés</h3>
                    <p>
                        Je vous propose des prestations d&apos;audit précises selon vos besoin et votre domaine d&apos;activité, afin de vous proposer des solutions efficaces et cohérentes.  
                        A l&apos;aide d&apos;outils d&apos;analyse technique, je serais à même de plannifier des actions pour vous aider à améliorer la sécurité et la stabilité de votre internet, cela contribuera directement à établier une relation de confiane solide entre vous et vos utilisateurs, essentielle à la prospérité de votre présence en ligne.
                    </p>
                </div>
                <img src={ImgAudit2} alt="illustration audit site internet" />
            </div>
            
            <Link to="/contact" aria-label="Visiter la page de contact" className="button-contact">
                Prenez rendez-vous pour l&apos;audit de votre site internet
            </Link>
        </section>
    </>

    

    
    

  )
}

export default ThirdSectionHome