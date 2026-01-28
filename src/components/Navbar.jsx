import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  textDecoration: "none",
  padding: "8px 12px",
  borderRadius: 8,
  fontWeight: 600,
  color: isActive ? "white" : "#222",
  background: isActive ? "#111" : "transparent",
});

export default function Navbar() {
  return (
    <header style={{ borderBottom: "1px solid #eee" }}>
      <nav
        style={{
          display: "flex",
          gap: 8,
          padding: 12,
          maxWidth: 900,
          margin: "0 auto",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontWeight: 800 }}>Proyecto Final React</div>

        <div style={{ display: "flex", gap: 8 }}>
          <NavLink to="/" style={linkStyle}>
            Inicio
          </NavLink>
          <NavLink to="/tareas" style={linkStyle}>
            Tareas
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
