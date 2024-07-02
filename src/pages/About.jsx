import { Fragment, useEffect, useState } from "react";
import Header from "../components/common/Header";
import { strategy } from "../data/cards";
import Footer from "../components/common/Footer";
import imageAbout from "../assets/images/About-oltech.png";
import imageObjetives from "../assets/images/oltech-objectives.jpg";
import imageBoxs from "../assets/images/boxs-image-pexels.jpg";
import "../styles/sections.css";
import "./About.css";
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
    <Fragment>
      <Header principal={!normalHeader} />
      <div className="page-about">
        <section className="section-title">
          <div className="section-title__parragraphs">
            <h1 className="title">{t("pageAbout.title")}</h1>
          </div>
          <img
            src={imageAbout}
            alt="Acerca de Oltech"
            className="section-title__image"
          />
        </section>

        <section className="section-parragraph">
          <p>{t("pageAbout.description")}</p>
          <button className="button-outline outline-color">
            {t("pageAbout.button")}
          </button>
        </section>

        <section className="section-strategy">
          {strategy.map((item) => (
            <div key={item.id} className="section-strategy__item">
              <img src={item.image} alt={item.title} />
              <h3>{t(`pageAbout.cards.${item.id}.title`)}</h3>
              <p>{t(`pageAbout.cards.${item.id}.description`)}</p>
            </div>
          ))}
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
    </Fragment>
  );
}

export default About;
