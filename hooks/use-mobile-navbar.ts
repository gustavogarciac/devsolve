import { create } from "zustand";

interface MobileNavbarStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useMobileNavbar = create<MobileNavbarStore>((set) => ({
  isOpen: false,
  onOpen: () => {
    set({ isOpen: true });
  },
  onClose: () => set({ isOpen: false }),
}));
