import { useNavigate } from "react-router-dom";
import imageCottonbro from "../../assets/images/boxs-image-pexels.jpg";
import { routes } from "../../helpers/routes";
import "../../styles/sections.css";

function Contact() {
  const nav = useNavigate();

  return (
    <section className="section-degraded reverse">
      <div className="section-degraded__parragraph">
        <h3 className="section__title title-pink">Contactános</h3>
        <h2 className="section__subtitle">Experiencia Personalizada.</h2>
        <p>
          No deje que la calidad sea una opción. Elija Oltech para garantizar
          resultados excepcionales en cada cirugía. Contáctenos hoy mismo para
          discutir cómo podemos satisfacer sus necesidades específicas.
        </p>
        <button
          className="button-outline outline-color"
          onClick={() => {
            nav(routes.contact);
          }}
        >
          Contactános
        </button>
      </div>
      <img
        src={imageCottonbro}
        alt="Contactános"
        className="section-degraded__image"
        loading="lazy"
      />
    </section>
  );
}

export default Contact;
