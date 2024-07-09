import { Fragment, useEffect, useState } from "react";
import Header from "../components/common/Header";
import { strategy } from "../data/cards";
import Footer from "../components/common/Footer";
import imageAbout from "../assets/images/About-oltech.png";
import imageObjetives from "../assets/images/oltech-objectives.jpg";
import imageBoxs from "../assets/images/boxs-image-pexels.jpg";
import "../styles/sections.css";
import "./About.css";

import certificadoImage from "../assets/images/certificado.jpg";

import { useTranslation } from "react-i18next";

function About() {
  const [normalHeader, setNormalHeader] = useState(false);

  const { t } = useTranslation();

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset > 500) {
        setNormalHeader(true);
      } else {
        setNormalHeader(false);
      }
    };
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <>
      <Header principal={!normalHeader} />
      <div className="page__about">
        
        <section className="section-title">
          <div className="section-title__content">
            <h1>{t("pageAbout.title")}</h1>
          </div>
        </section>

        <section className="section-strategy">
          <div className="section-strategy__grid">
            {strategy.slice(0, 2).map((item) => (
              <div key={item.id} className="section-strategy__item">
                <img src={item.image} alt={item.title} />
                <h3>{t(`pageAbout.cards.${item.id}.title`)}</h3>
                <p>{t(`pageAbout.cards.${item.id}.description`)}</p>
              </div>
            ))}
            <div key='3' className="section-strategy__item">
              <img src={strategy[2].image} alt={strategy[2].title} />
              <h3>{t(`pageAbout.cards.3.title`)}</h3>
              <ul style={{
                marginInline: 'auto',
              }}>
                <li>{t("pageAbout.cards.3.valor1")}</li>
                <li>{t("pageAbout.cards.3.valor2")}</li>
                <li>{t("pageAbout.cards.3.valor3")}</li>
                <li>{t("pageAbout.cards.3.valor4")}</li>
                <li>{t("pageAbout.cards.3.valor5")}</li>
              </ul>
            </div>
          </div>

          <div className="section-strategy__item">
            <h3>Politica de Calidad</h3>
            <p>{t("pageAbout.description")}</p>
          </div>
        </section>

        <section className="section-parragraph">
          <h3 className="section__title">
            {t(`pageAbout.sectionCertificado.title`)}
          </h3>
          <img
            src={certificadoImage}
            alt="Certificado Digital"
            title="Certificado Digital"
            className="cetificado"
          />
        </section>

        <div className="section-informative">
          <section className="section-degraded">
            <div className="section-degraded__parragraph">
              <h3 className="section__title">
                {t(`pageAbout.sectionObjetives.title`)}
              </h3>
              <h2 className="section__subtitle">
                {t(`pageAbout.sectionObjetives.subtitle`)}
              </h2>
              <p>{t(`pageAbout.sectionObjetives.description`)}</p>
              <button
                className="button-outline outline-color"
                onClick={() => nav(routes.products)}
              >
                {t(`pageAbout.sectionObjetives.button`)}
              </button>
            </div>
            <img
              src={imageObjetives}
              alt="¿Por qué elegirnos?"
              className="section-degraded__image"
            />
          </section>

          <section className="section-degraded reverse">
            <div className="section-degraded__parragraph">
              <h3 className="section__title title-blue">
                {t(`pageAbout.sectionAlcance.title`)}
              </h3>
              <h2 className="section__subtitle">
                {t(`pageAbout.sectionAlcance.subtitle`)}
              </h2>
              <p>{t(`pageAbout.sectionAlcance.description`)}</p>
              <button
                className="button-outline outline-color"
                onClick={() => nav(routes.products)}
              >
                {t(`pageAbout.sectionAlcance.button`)}
              </button>
            </div>
            <img
              src={imageBoxs}
              alt="¿Por qué elegirnos?"
              className="section-degraded__image"
            />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
