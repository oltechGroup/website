// Gsap Imports
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import { cards } from "../../data/cards";
import "./Cards.css";
import { useEffect } from "react";

function Cards() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(".section-cards__title", {
      scrollTrigger: ".section-cards__title",
      opacity: 1,
      y: 0,
      ease: "ease-in",
      startAt: {
        opacity: 0,
        y: 100,
      },
    });
    
    gsap.to(".card-1", {
      scrollTrigger: ".card-1",
      opacity: 1,
      y: 0,
      ease: "ease-in",
      startAt: {
        opacity: 0,
        y: 100,
      },
    });
    gsap.to(".card-2", {
      scrollTrigger: ".card-2",
      opacity: 1,
      y: 0,
      ease: "ease-in",
      startAt: {
        opacity: 0,
        y: 100,
      },
    });
    gsap.to(".card-3", {
      scrollTrigger: ".card-3",
      opacity: 1,
      y: 0,
      ease: "ease-in",
      startAt: {
        opacity: 0,
        y: 100,
      },
    });
    gsap.to(".card-4", {
      scrollTrigger: ".card-4",
      opacity: 1,
      y: 0,
      ease: "ease-in",
      startAt: {
        opacity: 0,
        y: 100,
      },
    });
  }, [])
  
  return (
    <section className="section-cards">
      
      <section className="container-cards">
        {cards.map((card) => (
          <div className={`card card-${card.id}`} key={card.id}>
            <img className="card_image" src={card.image} alt={card.title} loading="lazy" />
            <div className="card__parragraphs">
              <h3 className="card__parragraphs__title">{card.title}</h3>
              <p className="card__parragraphs__description">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Cards;
