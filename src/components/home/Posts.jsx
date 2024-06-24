import logoFacebook from "../../assets/icons/logo-facebook.jpg";
import logoInstagram from "../../assets/icons/logo-instagram.webp";
import logoWhatsapp from "../../assets/icons/logo-whatsapp.svg";
import logoLinkedin from "../../assets/icons/logo-linkedin.webp";
import logoTiktok from "../../assets/icons/logo-tiktok.png";
import logoTwitter from "../../assets/icons/logo-twitter.jpg";
import "./Posts.css";

function Posts() {
  return (
    <section className="section-posts">
      <div className="section-posts__parragraph">
        <h3 className="section__title">Síguenos</h3>
        <h2 className="section__subtitle">Nuestras Redes Sociales</h2>
        <p className="parragraph">
          Nos dedicamos a proporcionarte productos de la más alta calidad a
          precios justos. Cada compra viene respaldada por nuestro servicio
          garantizado, brindándote tranquilidad y confianza en tus elecciones.
        </p>

        <div className="icons">
          <a
            href="https://www.facebook.com/OltechMexico"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logoFacebook} alt="Facebook Oltech" />
          </a>
          <a
            href="https://www.instagram.com/grupooltech"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logoInstagram} alt="Instagram Oltech" />
          </a>
          <a
            href="https://www.tiktok.com/@grupo.oltech"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logoTiktok} alt="Tiktok Oltech" />
          </a>
          <a href="https://wa.link/xw2myn" target="_blank" rel="noreferrer">
            <img src={logoWhatsapp} alt="Whatsapp Oltech" />
          </a>
          <a href="https://x.com/Grupo_oltech" target="_blank" rel="noreferrer">
            <img src={logoTwitter} alt="Twitter Oltech" />
          </a>
          <a
            href="https://www.linkedin.com/in/grupo-oltech-7bab5930a/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logoLinkedin} alt="Linkedin Oltech" />
          </a>
        </div>
      </div>

      <div className="section-posts__posts">
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FOltechMexico%2Fposts%2F973107497939679&show_text=true&width=500"
          width="500"
          height="588"
          scrolling="no"
          frameBorder="0"
          loading="lazy"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FOltechMexico%2Fposts%2F825801786003585&show_text=true&width=500"
          title="Facebook post"
          width="500"
          height="588"
          scrolling="no"
          frameBorder="0"
          loading="lazy"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FOltechMexico%2Fposts%2F809787887604975&show_text=true&width=500"
          title="Facebook post"
          width="500"
          height="480"
          scrolling="no"
          frameBorder="0"
          loading="lazy"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FOltechMexico%2Fposts%2F806188107964953&show_text=true&width=500"
          title="Facebook post"
          width="500"
          height="465"
          scrolling="no"
          frameBorder="0"
          loading="lazy"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </section>
  );
}

export default Posts;
