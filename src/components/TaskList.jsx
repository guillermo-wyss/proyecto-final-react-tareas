import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

export default function TaskList({ tasks }) {
  if (!tasks.length) return <p>No hay tareas todavía.</p>;

  return (
    <ul className={styles.list}>
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} />
      ))}
    </ul>
  );
}
