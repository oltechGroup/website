import { Fragment } from "react";
import Header from "../components/common/Header";
import { useNavigate } from "react-router-dom";
import { routes } from "../helpers/routes";
import "./404.css";
import { useEffect } from "react";
import Footer from "../components/common/Footer";

function Page404() {
  const nav = useNavigate();

  useEffect(() => {
  }, []);
  
  return (
    <Fragment>
      <Header />
      <div className="page-404">
        <h1>404</h1>
        <h2>Vaya! Parece que te perdiste</h2>
        <button className="button-fill" onClick={() => nav(routes.home)}>
          Regresar al inicio
        </button>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Page404;
