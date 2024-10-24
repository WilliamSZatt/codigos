import React from "react";

export class Counter extends React.Component {
  constructor() {
    //? Elemento de Montagem
    super();
    this.state = { contador: 0 };

    console.log("Construindo a classe Counter...");
  }

  //! Não é muito recomendado usar
  UNSAFE_componentWillMount() {
    //? Elemento de Montagem

    console.log("O componente contador será montado");
  }

  componentDidMount() {
    //? Elemento de Montagem
    console.log("O componente foi montado ✔️");

    document.addEventListener("scroll", this.consoleScroll);
  }

  //! Método chamado sempre que uma propriedade ou um estado for atualizado
  shouldComponentUpdate() {
    //? Elemento de Atualização
    return true;
  }

  UNSAFE_componentWillUpdate() {
    console.log("O componente será atualizado!");
  } //? Elemento de Atualização

  componentDidUpdate() {
    console.log("O componente Counter foi atualizado"); //? Elemento de Atualização
  }

  componentWillUnmount() {
    //? Elemento de remoção/desmontagem
    console.log("O componente será desmontado");

    document.removeEventListener("scroll", this.consoleScroll);
  }

  consoleScroll() {
    console.log("Rolando a página...");
  }

  render() {
    //? Elemento de Montagem e também de Atualização
    console.log("Renderizando o componente Counter");
    return (
      <div>
        <h1>{this.state.contador}</h1>

        <button
          onClick={() => this.setState({ contador: this.state.contador - 1 })}
        >
          Diminuir
        </button>
        <button
          onClick={() => this.setState({ contador: this.state.contador + 1 })}
        >
          Aumentar
        </button>
      </div>
    );
  }
}
