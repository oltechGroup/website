import { Fragment, useEffect, useRef, useState } from "react";
import axios from "axios";

// Components
import Map from "../components/common/Map";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import { contact } from "../data/cards";

// Assets
import "./Contact.css";
import "../styles/forms.css";
import imageMap from "../assets/images/map.png";
import { scrollToSection } from "../helpers/scrollToSection";

// SweetAlert
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

function Contact() {
  const API = "https://emails-server.fly.dev/email/send";

  const contactRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [data, setData] = useState({
    name: "",
    subject: "",
    contact: "",
    message: "",
    receiver: "info@oltech.mx",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const sendForm = (e) => {
    e.preventDefault();
    
    if (data.name === "" || data.contact === "" || data.message === "") {
      return Swal.fire({
        title: "Error!",
        text: "Debes llenar todos los campos",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }

    setSending(true);
    
    axios
      .post(API, data)
      .then((res) => {
        Swal.fire({
          title: "Enviado!",
          text: "Tu mensaje ha sido enviado con éxito",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setData({
          name: "",
          subject: "",
          email: "",
          message: "",
          receiver: "info@oltech.mx",
        });
        setSending(false);
      });
  };

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <Fragment>
      <Helmet>
        <title>Oltech | Contacto</title>
        <meta
          name="description"
          content="Contáctanos para una experiencia personalizada. Puedes escribir tus datos en el formulario para que un asesor se ponga en contacto contigo."
        />
      </Helmet>
      <Header />
      <div className="page-contact">
        <section className="page-contact__informative">
          <div className="section-degraded__parragraph">
            <h3 className="section__title title-blue">Contáctanos</h3>
            <h2 className="section__subtitle">Experiencia Personalizada.</h2>
            <p className="parragraph">
              Puedes escribir tus datos en el formulario para que un asesor se
              ponga en contacto contigo.
              <br />O si lo prefieres, puedes contactarnos por nuestros datos de
              contacto.
            </p>
            <button
              className="button-arrow"
              onClick={() => scrollToSection(contactRef, 87)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>

          <div className="section-informative__form">
            <form onSubmit={sendForm} className="form-oltech">
              <div className="group">
                <div className="item">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    onChange={handleChange}
                    value={data.name}
                    placeholder="Ingresa tu nombre"
                  />
                </div>
                <div className="item">
                  <label htmlFor="subject">Asunto</label>
                  <input
                    type="text"
                    id="subject"
                    onChange={handleChange}
                    value={data.subject}
                    placeholder="Ingresa el asunto"
                  />
                </div>
              </div>
              <div className="item">
                <label htmlFor="email">Teléfono o Correo</label>
                <input
                  type="text"
                  id="contact"
                  onChange={handleChange}
                  value={data.contact}
                  placeholder="Escribe un correo o teléfono..."
                />
              </div>
              <div className="item">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  placeholder="Escribe algún mensaje..."
                  onChange={handleChange}
                  value={data.message}
                  rows="5"
                />
              </div>
              <button
                type="submit"
                className="button-outline outline-color"
                disabled={sending}
              >
                Enviar Formulario
              </button>
            </form>
          </div>
        </section>

        <section className="section-contact" ref={contactRef}>
          {contact.map((item) => (
            <a href={item.link} key={item.id} className="section-contact__item">
              <img
                src={item.icon}
                alt={item.title}
                className="section-contact__item__icon"
              />
              <h3 className="section-contact__item__title">{item.title}</h3>
              <p className="section-contact__item__description">
                {item.description}
              </p>
            </a>
          ))}
        </section>

        <section className="section-map">
          {/* <Map /> */}
          <img src={imageMap} alt="ubicación oltech" />
          <p>8a. Cda., Alfredo del Mazo, 56577 Ixtapaluca, Méx.</p>
        </section>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Contact;
