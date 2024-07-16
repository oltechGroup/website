import { useEffect } from "react";

// Assets
import imageAbout from "../../assets/images/surgerie-oltech.jpg";
import "../../styles/sections.css";
import "./About.css";
import { routes } from "../../helpers/routes";

// Gsap Imports
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

import "../../styles/flipbook.css";
import { useTranslation } from "react-i18next";

function WhyChoose() {
  const nav = useNavigate();

  const { t } = useTranslation();

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
      <h2 className="section-cards__title">{t("titleCatalogo")}</h2>
      <iframe
        src="https://heyzine.com/flip-book/40194d3926.html"
        frameborder="0"
        width={"100%"}
        height={"600px"}
        className="flipbook-iframe"
      ></iframe>
      <section className="section-degraded">
        <div className="section-degraded__parragraph">
          <h3 className="section__title title-blue">
            {t("sectionWhyChoose.title")}
          </h3>
          <h2 className="section__subtitle">
            {t("sectionWhyChoose.subtitle")}
          </h2>
          <p>{t("sectionWhyChoose.description")}</p>
          <button
            className="button-outline outline-color"
            onClick={() => nav(routes.products)}
          >
            {t("sectionWhyChoose.button")}
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
