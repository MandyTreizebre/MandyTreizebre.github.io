import OnePage from "../assets/images/onepage.png"
import WebSiteImg from "../assets/images/sitevitrine.png"
import Ecommerce from "../assets/images/ecommerce.png"
import Redesign from "../assets/images/refonte.png"
import "../styles/second-section-home.css"

const SecondSectionHome= () => {

  return (

    <section className="container-second-section-home">
      <div className="container-top">
        <h2>Création et refonte de sites internet</h2>
        <h3>Transformez Vos Idées en Réalité Digitale</h3>

        <p>Je vous propose plusieurs prestations de création de site selon vos besoins et vote budget. Les sites sont conçus sur mesure pour être en accord avec l&apos;image de votre société et sont évolutifs, ainsi, il sera tout à fait possible d&apos;enrichir votre contenu, d&apos;intégrer de nouvelles fonctionnalités plusieurs mois ou années après son lancement.
        </p>
      </div>
      

      <div className="container-products-websites">
        <div className="card-product" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
          <img src={OnePage} alt="site-one-page" />
          <h3>One page</h3>
          <p>
            Une page unique qui regroupe l&apos;ensemble des informations présentant votre entreprise. 
          </p>
        </div>

        <div className="card-product" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <img src={WebSiteImg} alt="site-vitrine" />
          <h3>Site vitrine</h3>
          <p>
            Site multipage détaillant votre activité / vos services de manière segmentée et optimisée.  
          </p>
        </div>

        <div className="card-product" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <img src={Ecommerce} alt="site-ecommerce" />
          <h3>Ecommerce</h3>
          <p>
            Site conçu pour la vente en ligne, fonctionnalités selon vos besoins et optimisé pour un meilleur référencement. 
          </p>
        </div>

        <div className="card-product" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          <img src={Redesign} alt="refonte-site-web" />
          <h3>Refonte</h3>
          <p>
            Refonte visuelle et technologique de site internet en fonction la demande et de vos besoins. 
          </p>
        </div>
      </div>
    </section>
  )
}
export default SecondSectionHome