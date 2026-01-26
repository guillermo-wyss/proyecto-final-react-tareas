import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Proyecto Final React</h1>

      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.linkActive : ""}`
          }
        >
          Inicio
        </NavLink>

        <NavLink
          to="/tareas"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.linkActive : ""}`
          }
        >
          Tareas
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tareas" element={<Tasks />} />
      </Routes>
    </div>
  );
}
