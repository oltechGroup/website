import { useNavigate } from "react-router-dom";
import imageCottonbro from "../../assets/images/kenia-oltech.jpg";
import { routes } from "../../helpers/routes";
import "../../styles/sections.css";
import { useTranslation } from "react-i18next";

function Contact() {
  const nav = useNavigate();

  const { t } = useTranslation();

  return (
    <section className="section-degraded reverse contact">
      <div className="section-degraded__parragraph">
        <h3 className="section__title title-pink">
          {t("sectionContact.title")}
        </h3>
        <h2 className="section__subtitle">{t("sectionContact.subtitle")}</h2>
        <p>{t("sectionContact.description")}</p>
        <button
          className="button-outline outline-color"
          onClick={() => {
            nav(routes.contact);
          }}
        >
          {t("sectionContact.button")}
        </button>
      </div>
      <img
        src={imageCottonbro}
        alt="Contactános"
        className="section-degraded__image"
        loading="lazy"
      />
    </section>
  );
}

export default Contact;
