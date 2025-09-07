import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useClassesStore = create(
  persist(
    (set) => ({
      classes: [],
      addClass: (name) =>
        set((state) => ({
          classes: [...state.classes, { name }],
        })),
      deleteClass: (index) =>
        set((state) => ({
          classes: state.classes.filter((_, i) => i !== index),
        })),
    }),
    {
      name: "classes", // clave en localStorage
    }
  )
);
