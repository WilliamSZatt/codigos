// TODO: Lista de Tarefas

const form = document.querySelector("#todo-form");
const taskTitleInput = document.querySelector("#task-title-input");
const todoListUl = document.querySelector("#todo-list");

let tasks = [];

//? Renderizar o local storege no HTML ao entrar novamente
function renderTaskOnHTML(taskTitle, done = false) {
  const li = document.createElement("li"); //? Criando uma tag <li></li>

  const input = document.createElement("input"); //? Criando uma tag <input/>

  input.setAttribute("type", "checkbox"); //? <input type="checkbox/>"

  input.addEventListener("change", (event) => {
    //? status (concluida ou não concluida)
    const liToggle = event.target.parentElement;

    const spanToggle = liToggle.querySelector("span");

    const done = event.target.checked;

    if (done) {
      spanToggle.style.textDecoration = "line-through";
    } else {
      spanToggle.style.textDecoration = "none";
    }

    tasks = tasks.map((t) => {
      if (t.title === spanToggle.textContent) {
        return {
          title: t.title,
          done: !t.done,
        };
      }
      return t;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks)); //? salvar o  status do conteúdo no local storege (armazenamento local)
  });
  input.checked = done;

  const span = document.createElement("span"); //? <span></span>

  span.textContent = taskTitle; //? <span>Tarefa Enviada pelo Usuário</span>

  if (done) {
    span.style.textDecoration = "line-through";
  }

  const button = document.createElement("button"); //? <button></button>
  button.textContent = "Remover"; //? <button>Remover</button>
  button.addEventListener("click", (event) => {
    const liRemove = event.target.parentElement; //? Avista o botão que está causando o evento

    const titleRemove = liRemove.querySelector("span").textContent; //? Para Selecionar alguma coisa especifica dentro da tag (e também selecionar o conteudo especificado do array)

    tasks = tasks.filter((t) => t.title !== titleRemove); //? Para remover o conteúdo do array

    todoListUl.removeChild(liRemove); //? Remove o botão que está causando o evento

    localStorage.setItem("tasks", JSON.stringify(tasks)); //? salvar a remoção do conteúdo no local storege (armazenamento local)
  });

  li.appendChild(input); //? Passando a tag input para a lista ul

  li.appendChild(span); //? Passando a tag span para a lista ul

  li.appendChild(button); //? Passando a tag button para a lista ul

  todoListUl.appendChild(li); //? Passando a tag li para a lista ul
}

window.onload = () => {
  //? Renderizar o local storege no HTML ao entrar novamente
  const taskOnLocalStorege = localStorage.getItem("tasks");

  if (!taskOnLocalStorege) return;

  tasks = JSON.parse(taskOnLocalStorege);

  tasks.forEach((t) => {
    renderTaskOnHTML(t.title, t.done);
  });
};

form.addEventListener("submit", (evento) => {
  evento.preventDefault(); // Evita o comportamento padrão de recarregar a página ao submeter o formulário

  const taskTitle = taskTitleInput.value;

  if (taskTitle.length < 3) {
    alert("Sua tarefa precisa ter, ao menos, 3 caracteres");
    return;
  }

  //! Adicionando a nova tarefa no array de tasks
  tasks.push({
    title: taskTitle,
    done: false,
  });
  localStorage.setItem("tasks", JSON.stringify(tasks)); //? salvar o novo conteúdo no local storege (armazenamento local)

  //! Adicionando a nova tarefa no HTML
  renderTaskOnHTML(taskTitle);

  taskTitleInput.value = ""; //? Para zerar o valor do input ao enviar
});
