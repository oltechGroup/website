import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../helpers/routes";

// Components
import Header from "../components/common/Header";
import Posts from "../components/home/Posts";
import Brands from "../components/home/Brands";
import Cards from "../components/home/Cards";
import About from "../components/home/About";
import Footer from "../components/common/Footer";
import Contact from "../components/home/Contact";

// Assets
import imageQuartex from "../assets/images/quartex-bone-model-1.png";
import { scrollToSection } from "../helpers/scrollToSection";
import heroVideo from "../assets/videos/video-horizontal.mp4";
import "./Home.css";

// Gsap Imports
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WhyChoose from "../components/home/WhyChoose";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function Home() {
  const [normalHeader, setNormalHeader] = useState(false);

  const { t } = useTranslation();

  const sectionAbout = useRef(null);
  const nav = useNavigate();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    gsap.to(".section-home__parragrahps", {
      opacity: 1,
      delay: 0.3,
      x: 0,
    });

    gsap.to(".section-home__image", {
      opacity: 1,
      delay: 0.3,
      x: 0,
    });
  }, []);

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
    <div className="page-home">
      <Helmet>
        <meta
          name="description"
          content="Descubre nuestros servicios integrales en osteosíntesis, artroscopia y reemplazo articular. Mejora tu salud con Oltech. ¡Contáctanos hoy!"
        />
        <meta name="author" content="Oltech" />
        <meta name="robots" content="index, follow" />
        <title>
          Oltech | Servicios Integrales en Osteosíntesis y Artroscopia
        </title>
      </Helmet>
      <Header principal />
      <Header hidden={!normalHeader} />
      <div className="section-home__overflow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="815"
          height="881"
          viewBox="0 0 815 881"
          fill="none"
          className="vector-brackground"
        >
          <path
            fillRule="evenodd"
            cliprulee="evenodd"
            d="M787.258 0L803.133 15.9779C818.704 31.6492 818.704 57.0573 803.133 72.7286L49.3025 831.438L0 881V0H787.258Z"
            fill="url(#paint0_linear_646_11)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_646_11"
              x1="443.428"
              y1="-1.41634e-05"
              x2="-3.80991"
              y2="879.062"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#069BFD" />
              <stop offset="0.69524" stopColor="#8300E9" />
            </linearGradient>
          </defs>
        </svg>
        <div className="video-hero-overflow">
          <video src={heroVideo} autoPlay muted loop className="video-hero" />
        </div>
        <section className="section-home">
          <section className="section-home__content">
            <div
              className="section-home__parragrahps"
              style={{
                transform: "translateX(-300px)",
              }}
            >
              <h1 className="title">{t("sectionHero.title")}</h1>
              <p className="subtitle">{t("sectionHero.subtitle")}</p>
              <div className="buttons">
                <button
                  className="button-primary"
                  onClick={() => nav(routes.products)}
                >
                  {t("sectionHero.buttons.products")}
                </button>
                <button
                  className="button-outline"
                  onClick={() => {
                    scrollToSection(sectionAbout, 90);
                  }}
                >
                  {t("sectionHero.buttons.contact")}
                </button>
              </div>
            </div>
          </section>
        </section>
      </div>

      <About refProp={sectionAbout} />
      <Cards />
      <WhyChoose />
      <Contact />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
