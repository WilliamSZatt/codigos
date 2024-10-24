import { FormEvent, useState } from "react";
import styles from "./styles.module.scss";

interface Task {
  title: string;
  done: boolean;
  id: number;
}

export const Tasks: React.FC = () => {
  const [TaskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState([] as Task[]);

  //? Função disparada quando um usuário está querendo adicionar uma nova tarefa
  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();

    if (TaskTitle.length < 3) {
      //? Aviso para ter, ao menos, 3 letras
      alert("A tarefa precisa ter ao menos 3 letras");
    }

    //! Adicionando a tarefa
    setTasks([
      ...tasks, //? Pega todas as tarefas existentes e coloca nesse novo valor do estado de tarefas
      { id: 1, title: TaskTitle, done: false },
    ]);
  }

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="">Adicionar Tarefa</label>
          <input
            value={TaskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            type="text"
            id="task-title"
            placeholder="Titulo da Tarefa"
          />
        </div>

        <button type="submit">Adicionar Tarefa</button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input type="checkbox" id={`task-${task.id}`} />
              <label htmlFor={`task-${task.id}`}>{task.title}</label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
