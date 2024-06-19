import { useEffect } from "react";

// Assets
import imageAbout from "../../assets/images/pexels-about.jpg";
import "../../styles/sections.css";
import "./About.css";
import { routes } from "../../helpers/routes";

// Gsap Imports
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

function WhyChoose() {
  const nav = useNavigate();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(".section-degraded__parragraph", {
      scrollTrigger: ".section-degraded__parragraph",
      opacity: 1,
      y: 0,
      ease: "ease-in",
      startAt: {
        opacity: 0,
        y: 100,
      },
    });
  }, []);

  return (
    <>
      <iframe
        src="https://heyzine.com/flip-book/ab402d7461.html"
        frameborder="0"
        width="100%"
        height={600}
      ></iframe>
      <section className="section-degraded">
        <div className="section-degraded__parragraph">
          <h3 className="section__title title-blue">¿Por qué elegirnos?</h3>
          <h2 className="section__subtitle">Compromiso con la excelencia.</h2>
          <p>
            En un campo donde la precisión es crucial, elegir al proveedor
            adecuado puede marcar la diferencia entre el éxito y la conformidad.
            En Oltech, entendemos la importancia de cada procedimiento y nos
            esforzamos por ser su socio confiable en cada paso.
          </p>
          <button
            className="button-outline outline-color"
            onClick={() => nav(routes.products)}
          >
            Ver Productos
          </button>
        </div>
        <img
          src={imageAbout}
          alt="¿Por qué elegirnos?"
          className="section-degraded__image"
        />
      </section>
    </>
  );
}

export default WhyChoose;
