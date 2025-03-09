import { create } from "zustand";

export enum EnumTheme {
    LIGHT = 1,
    DARK = 2
}
interface SystemState {
  theme: EnumTheme; 
  setTheme: (theme: EnumTheme) => void; 
}

export const useSystemState = create<SystemState>((set) => ({
  theme: EnumTheme.DARK, 
  setTheme: (theme: EnumTheme) => set({ theme }), 
}));
