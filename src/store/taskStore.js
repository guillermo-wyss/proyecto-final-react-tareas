import { create } from "zustand";

const STORAGE_KEY = "tasks_v1";

const makeId = () => crypto.randomUUID();

const loadTasks = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveTasks = (tasks) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch {
    // no rompemos la app si falla
  }
};

export const useTaskStore = create((set, get) => ({
  tasks: loadTasks(),

  addTask: (title) => {
    const next = [
      ...get().tasks,
      { id: makeId(), title: title.trim(), done: false },
    ];
    saveTasks(next);
    set({ tasks: next });
  },

  toggleTask: (id) => {
    const next = get().tasks.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    );
    saveTasks(next);
    set({ tasks: next });
  },

  removeTask: (id) => {
    const next = get().tasks.filter((t) => t.id !== id);
    saveTasks(next);
    set({ tasks: next });
  },

  clearAll: () => {
    saveTasks([]);
    set({ tasks: [] });
  },
}));
