import { useState } from "react";

export function useTaskForm(initial = "") {
  const [title, setTitle] = useState(initial);

  const onChange = (e) => setTitle(e.target.value);

  const reset = () => setTitle("");

  const isValid = title.trim().length >= 3;

  return { title, setTitle, onChange, reset, isValid };
}
