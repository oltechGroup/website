import imageDoctor from "../../assets/images/doctor-photo.png";
import { useNavigate } from "react-router-dom";
import { routes } from "../../helpers/routes";
import "./About.css";
import "../../styles/sections.css";

// Gsap Imports
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

function About({ refProp }) {
  const nav = useNavigate();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(".section-about__card", {
      scrollTrigger: ".section-about__card",
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
      <h2 className="section-cards__title">
        En Oltech, nos comprometemos a ofrecer productos que no solo cumplen,
        sino que superan las expectativas.
      </h2>
      <section ref={refProp} className="section-about">
        <svg
          width="642"
          height="862"
          viewBox="0 0 642 862"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="section-about__svg"
        >
          <rect
            width="734.054"
            height="756.794"
            rx="40"
            transform="matrix(0.984808 -0.173648 0.167291 0.985907 -202.062 121.467)"
            fill="url(#paint0_linear_657_46)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_657_46"
              x1="715.667"
              y1="10.8637"
              x2="66.2672"
              y2="732.563"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C200F4" />
              <stop offset="1" stopColor="#FF647D" />
            </linearGradient>
          </defs>
        </svg>
        <div className="section-about__card">
          <div className="section-about__parragraphs">
            <h3 className="section__title">Sobre Nosotros</h3>
            <h2 className="section__subtitle">Apoyo médico integral.</h2>
            <p>
              Nos dedicamos a ofrecer servicios integrales especializados en
              osteosíntesis, artroscopia y reemplazo articular. Cada servicio
              está respaldado por nuestro compromiso garantizado, brindándote
              tranquilidad y confianza en tu salud y bienestar.
            </p>
            <button
              className="button-outline outline-color"
              onClick={() => nav(routes.about)}
            >
              Conoce más de Oltech
            </button>
          </div>
          <img
            src={imageDoctor}
            alt="Apoyo Médico"
            className="section-about__card__image"
          />
        </div>
      </section>
    </>
  );
}

export default About;
