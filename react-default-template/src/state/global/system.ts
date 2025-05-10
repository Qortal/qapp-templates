import { atom } from 'jotai';

export enum EnumTheme {
  LIGHT = 1,
  DARK = 2,
}

export type Language = 'de' | 'en' | 'es' | 'fr' | 'it' | 'ru';

// Atom to hold the current theme
export const themeAtom = atom<EnumTheme>(EnumTheme.DARK);
export const languageAtom = atom<Language>('en');
