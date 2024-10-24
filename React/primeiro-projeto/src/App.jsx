import React from "react";
import "./styles/app.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import article1Img from "./assest/images/article1.png";
import article2Img from "./assest/images/article2.png";
import article3Img from "./assest/images/article3.png";
import { Counter } from "./components/Counter/Counter";

//* Componente em classe é uma classe Component do React, e retorna HTML dentro do método render

//* Componente funcional é uma função que retorna HTML

//! Componente em classe
class App extends React.Component {
  //? Método responsável por renderizar o conteúdo HTML do nosso componente
  render() {
    return (
      <>
        {/* <Navbar />

        <section id="articles">
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            commodi odio eum in omnis soluta cum eius suscipit, aliquam natus
            eos laborum corrupti deserunt cumque a laudantium quis ducimus
            fugiat!"
            thumbnail={article1Img}
          />
          <Article
            title="Vibrant Portraits of 2020"
            provider="SpaceNews"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur accusamus ipsa, recusandae optio impedit ab nihil adipisci perspiciatis, illo assumenda aspernatur laudantium eaque magni harum consectetur iusto provident officiis."
            thumbnail={article2Img}
          />
          <Article
            title="36 Days of Malayalam type"
            provider="Spaceflight Now"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea mollitia aut, explicabo exercitationem eos reiciendis at excepturi non dicta recusandae repellat laudantium optio aliquam nemo suscipit itaque quasi, a voluptate!"
            thumbnail={article3Img}
          />
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            commodi odio eum in omnis soluta cum eius suscipit, aliquam natus
            eos laborum corrupti deserunt cumque a laudantium quis ducimus
            fugiat!"
            thumbnail={article1Img}
          />
        </section> */}
        <Counter />
      </>
    );
  }
}

export default App;
