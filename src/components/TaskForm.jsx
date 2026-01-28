import { useTaskStore } from "../store/taskStore";
import { useTaskForm } from "../hooks/useTaskForm";
import styles from "./TaskForm.module.css";

export default function TaskForm() {
  const addTask = useTaskStore((s) => s.addTask);
  const { title, onChange, reset, isValid } = useTaskForm("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    addTask(title);
    reset();
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        value={title}
        onChange={onChange}
        placeholder="Nueva tarea (mín. 3 caracteres)"
        className={styles.input}
      />
      <button type="submit" disabled={!isValid} className={styles.button}>
        Agregar
      </button>
    </form>
  );
}
