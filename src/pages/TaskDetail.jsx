import { useParams } from "react-router-dom";

export default function TaskDetail() {
  const { id } = useParams();

  return (
    <section>
      <h1>Detalle de tarea</h1>
      <p>ID: {id}</p>
    </section>
  );
}
