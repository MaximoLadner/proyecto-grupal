import { create } from "zustand";

export const useSidebarStore = create((set) => ({
  isOpen: window.innerWidth >= 768, // Abierta por defecto en desktop
  setOpen: (open) => set({ isOpen: open }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  updateByScreen: () => set({ isOpen: window.innerWidth >= 768 }), // Llama esto en resize
}));
