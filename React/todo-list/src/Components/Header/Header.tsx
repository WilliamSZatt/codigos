import { StatsCard } from "../StatsCard/statsCard";
import styles from "./styles.module.scss";

//? styles.header

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>My ToDo</h1>

          <span>Bem Vindo William!</span>
        </div>

        <div>
          <StatsCard title="Total de Tarefas" value={5} />
          <StatsCard title="Tarefas Pendentes" value={4} />
          <StatsCard title="Tarefas Concluídas" value={1} />
        </div>
      </div>
    </header>
  );
};
