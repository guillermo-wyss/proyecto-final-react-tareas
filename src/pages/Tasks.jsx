import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useTaskStore } from "../store/taskStore";
import styles from "./Tasks.module.css";

export default function Tasks() {
  const tasks = useTaskStore((s) => s.tasks);
  const clearAll = useTaskStore((s) => s.clearAll);

  const total = tasks.length;
  const done = tasks.filter((t) => t.done).length;
  const pending = total - done;

  return (
    <section className={styles.header}>
      <h2>Tareas</h2>

      <div className={styles.stats}>
        <span><b>Total:</b> {total}</span>
        <span><b>Hechas:</b> {done}</span>
        <span><b>Pendientes:</b> {pending}</span>
      </div>

      <div className={styles.card}>
        <TaskForm />
        <TaskList tasks={tasks} />

        {total > 0 && (
          <button
            onClick={clearAll}
            style={{
              marginTop: 10,
              alignSelf: "flex-start",
              padding: "8px 12px",
              borderRadius: 10,
              border: "1px solid #ddd",
              background: "#fff",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Borrar todas
          </button>
        )}
      </div>
    </section>
  );
}
