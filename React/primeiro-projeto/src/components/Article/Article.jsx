import React from "react";
import "./article.css";

//? Pega o nome passado no elemento pai, como o pai é o App.jsx, pegou o que estava escrito no article
/*
  this.props = { 
    title: "Exemplo" 
  }
*/

//! Componente em classe
// export class Article extends React.Component {
//   render() {}

//! Componente Funcional
export function Article({ title, provider, description, thumbnail }) {
  return (
    <article id="article">
      <img src={thumbnail} alt={title} />

      <div className="article-infos">
        <h2>{title}</h2>
        <h3>{provider}</h3>

        <p>{description}</p>
      </div>
    </article>
  );
}
