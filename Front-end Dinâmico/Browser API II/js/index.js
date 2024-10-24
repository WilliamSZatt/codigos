// TODO: Pegando elementos do HTML

const botaoAumentar = document.querySelector("#aumentar-botao");
const botaoDiminuir = document.querySelector("#diminuir-botao");

const contadorElemento = document.querySelector("#contador");

const input = document.querySelector("#input");

// TODO: Adicionando Eventos Para Elementos do HTML

//! Veja os tipos (addEventListener types ou no mdn)
botaoAumentar.addEventListener("click", () => {
  const valorAtual = Number(contadorElemento.textContent);

  contadorElemento.textContent = valorAtual + 1;

  botaoAumentar.classList.add("btn");
  botaoDiminuir.classList.remove("btn");
});

botaoDiminuir.addEventListener("click", () => {
  const valorAtual = Number(contadorElemento.textContent);

  contadorElemento.textContent = valorAtual - 1;

  botaoAumentar.classList.remove("btn");
  botaoDiminuir.classList.add("btn");
});

input.addEventListener("input", () => {
  console.log(input.value);
});

// TODO: Adicionando CSS pelo JavaScript

//* 1. Inline

//! Equivale à adiconar o style no HTML de forma inline
contadorElemento.style.color = "red";
contadorElemento.style.padding = "0 2rem";

//! Não pode ifém (- ou _)
contadorElemento.style.backgroundColor = "#aaa";
contadorElemento.style.border = "1px solid black";
contadorElemento.style.width = "150px";

//* 2. Classes dos Elementos (Manipulando Classes)

//? Coloquei os dois styles nos eventos dos botões acima

// botaoAumentar.classList.add("btn"); //! Adiciona o style no botão Aumentar

// botaoDiminuir.classList.remove("btn"); //! Remove o style do botão Diminuir

// TODO: Alterando o tema da pagina para Claro e Escuro

const themeButton = document.querySelector("#theme");

let darkTheme;

//! Definindo uma função ao carregar uma página (janela)
window.onload = () => {
  const isDarkThemeStorege = localStorage.getItem("isDarkTheme");

  darkTheme = isDarkThemeStorege === "true";

  const body = document.querySelector("body");

  if (darkTheme) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
};

themeButton.addEventListener("click", () => {
  darkTheme = !darkTheme;

  //! Guardando no armazenamento local
  localStorage.setItem("isDarkTheme", darkTheme);

  const body = document.querySelector("body");

  if (darkTheme) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
});
