import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { routes } from "./helpers/routes";
import logoWhatsapp from "./assets/icons/logo-whatsapp.svg";
import Page404 from "./pages/404";
import Contact from "./pages/Contact";
import Products from "./components/home/Products";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.products} element={<Products />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <a href="https://wa.link/xw2myn" className="icon-whatsapp__oltech" target="_blank" rel="noreferrer">
        <img loading="lazy" src={logoWhatsapp} alt="whatsapp" />
      </a>
    </Fragment>
  );
}

export default App;
