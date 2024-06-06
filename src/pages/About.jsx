import { Fragment, useEffect, useState } from "react";
import Header from "../components/common/Header";
import { strategy } from "../data/cards";
import Footer from "../components/common/Footer";
import imageAbout from "../assets/images/oltech-about.png";
import imageObjetives from "../assets/images/oltech-objectives.jpg";
import imageBoxs from "../assets/images/boxs-image-pexels.jpg";
import "../styles/sections.css";
import "./About.css";

function About() {
  const [normalHeader, setNormalHeader] = useState(false);

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
           <h1 className="title">Presentación Grupo Oltech.</h1>
          </div>
          <img
            src={imageAbout}
            alt="Acerca de Oltech"
            className="section-title__image"
          />
        </section>

        <section className="section-parragraph">
          <p>
            OLTECH S.A. de C.V. es una empresa joven mexicana con la firme
            convicción de abrirse camino como uno de los mejores proveedores de
            servicios integrales para la Salud en el Sector Público y Privado.
            Nuestros procesos son altamente competitivos y el trabajo es
            desarrollado de forma personalizada permitiéndonos tener una
            constante interrelación con nuestros clientes que nos permiten
            satisfacer sus necesidades y expectativas.
          </p>
          <button className="button-outline outline-color">
            Ver Nuestros Productos
          </button>
        </section>

        <section className="section-strategy">
          {strategy.map((item) => (
            <div key={item.id} className="section-strategy__item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </section>

        <div className="section-informative">
          <section className="section-degraded">
            <div className="section-degraded__parragraph">
              <h3 className="section__title">Nuestros Objetivos</h3>
              <h2 className="section__subtitle">
                Salud y Desarrollo Comprometidos.
              </h2>
              <p>
                Proveer insumos médicos y servicios integrales en todo México.
                Apoyar el bienestar y las mejoras de las condiciones de salud
                como una resultante de la actividad del negocio. Proporcionar a
                nuestros colaboradores las mejores condiciones para su
                desarrollo integral.
              </p>
              <button
                className="button-outline outline-color"
                onClick={() => nav(routes.products)}
              >
                Ver Productos
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
                Alcance de nuestros servicios
              </h3>
              <h2 className="section__subtitle">Todo en un solo proveedor.</h2>
              <p>
                OLTECH ofrece servicios integrales en sector salud público y
                privado. Se encarga de ser un solo proveedor responsable del
                equipamiento y las diferentes tecnologías contenidas en un
                proyecto de implementación o ampliación.
              </p>
              <button
                className="button-outline outline-color"
                onClick={() => nav(routes.products)}
              >
                Ver Productos
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
