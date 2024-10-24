import React from "react"; /*! SEMPRE IMPORTE O REACT */
import logoImg from "../../assest/images/logo.png"; /*? Importando a imagem */
/* O ../ significa voltar um diretório */
import "./Navbar.css";

//! Componente Funcional
export function Navbar() {
  return (
    <header>
      <nav id="navbar">
        <div className="nav-brand">
          <img src={logoImg} alt="" className="image" />
          <h1>Space Flight News</h1>
        </div>

        <ul className="nav-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Trending</a>
          </li>
          <li>
            <a href="/">Categories</a>
          </li>
          <li>
            <a href="/">about us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
