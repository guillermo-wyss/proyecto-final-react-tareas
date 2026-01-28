import { useTaskStore } from "../store/taskStore";
import styles from "./TaskItem.module.css";

export default function TaskItem({ task }) {
  const toggleTask = useTaskStore((s) => s.toggleTask);
  const removeTask = useTaskStore((s) => s.removeTask);

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => toggleTask(task.id)}
      />

      <span className={`${styles.title} ${task.done ? styles.done : ""}`}>
        {task.title}
      </span>

      <button onClick={() => removeTask(task.id)} className={styles.remove}>
        Eliminar
      </button>
    </li>
  );
}
