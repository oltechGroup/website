import { Link, useNavigate } from "react-router-dom";
import { brands } from "../../data/brands";
import "./Brands.css";
import "../../styles/sections.css";
import { routes } from "../../helpers/routes";

// Gsap Imports
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

function Brands() {
  const nav = useNavigate();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    for (const brand of brands) {
      gsap.to(`.item${brand.id}`, {
        scrollTrigger: `.item${brand.id}`,
        duration: 2,
        scale: 1,
        delay: Math.random() * 0.8,
        ease: "elastic",
      });
    }

    gsap.to(".section-brands__products", {
      scrollTrigger: ".section-brands__products",
      y: 0,
      ease: "ease-in",
      opacity: 1,
    });
  }, []);

  return (
    <>
      <section className="section-brands">
        <div className="section-brands__content">
          <div className="section-brands__row first-row">
            {brands.slice(0, 5).map((brand, index) => (
              <Link
                to={brand.link}
                className={`section-brands__item item${index + 1}`}
                key={index}
                style={{ scale: 0 }}
              >
                <img loading="lazy" src={brand.image} alt={brand.name} />
              </Link>
            ))}
          </div>
          <div className="section-brands__row second-row">
            <div className="section-brands__row__subrow">
              {brands.slice(5, 7).map((brand, index) => (
                <Link
                  to={brand.link}
                  className={`section-brands__item item${index + 5}`}
                  key={index}
                  style={{ scale: 0 }}
                >
                  <img loading="lazy" src={brand.image} alt={brand.name} />
                </Link>
              ))}
            </div>
            <div className="section-brands__row__subrow">
              {brands.slice(7, 9).map((brand, index) => (
                <Link
                  to={brand.link}
                  className={`section-brands__item item${index + 7}`}
                  style={{ scale: 0 }}
                  key={index}
                >
                  <img loading="lazy" src={brand.image} alt={brand.name} />
                </Link>
              ))}
            </div>
          </div>
          <div className="section-brands__row">
            {brands.slice(9, 11).map((brand, index) => (
              <Link
                to={brand.link}
                className={`section-brands__item item${index + 9}`}
                style={{ scale: 0 }}
                key={index}
              >
                <img loading="lazy" src={brand.image} alt={brand.name} />
              </Link>
            ))}
          </div>
        </div>

        <div className="section-brands__parragraphs">
          <h2 className="section__subtitle">Descubre Nuestras Marcas</h2>
          <p>
            En un campo donde la precisión es crucial, elegir al proveedor
            adecuado puede marcar la diferencia entre el éxito y la conformidad.
          </p>
          <span className="section__subtitle">Y</span>
        </div>
      </section>

      <section
        className="section-brands__products"
        style={{
          transform: "translateY(100px)",
          opacity: 0,
        }}
      >
        <div className="section-brands__products__svg"></div>
        <h2 className="section__subtitle title-white">Nuestros Productos</h2>
        <button className="button-outline" onClick={() => nav(routes.products)}>
          Ver Productos
        </button>
      </section>
    </>
  );
}

export default Brands;
