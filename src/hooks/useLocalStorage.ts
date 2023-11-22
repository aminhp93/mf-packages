import { ThemeMode } from "../providers";

export enum LocalStorageKeys {
  // eslint-disable-next-line no-unused-vars
  ThemeModeKey = "piscadaThemeMode",
  // eslint-disable-next-line no-unused-vars
  TenantPalette = "piscadaTenantPalette",
  // eslint-disable-next-line no-unused-vars
  TenantEmulation = "piscadaTenantEmulation",
  // eslint-disable-next-line no-unused-vars
  PinSidebar = "piscadaSidebarPinned",
  // eslint-disable-next-line no-unused-vars
  LayoutAssetsViewType = "piscadaLayoutAssetsViewType",
  // eslint-disable-next-line no-unused-vars
  Language = "piscadaLanguage",
}

export interface IUseLocalStorage {
  setThemeModeInLocalStorage: (mode: ThemeMode) => void;
  getThemeModeFromLocalStorage: () => string | null;
  deleteThemeModeFromLocalStorage: (key: LocalStorageKeys) => void;
  setValueInLocalStorage: <T>(key: LocalStorageKeys | string, value: T) => void;
  getValueFromLocalStorage: <T>(key: LocalStorageKeys | string) => T | null;
}

export const setThemeMode = (mode: ThemeMode): void => {
  localStorage.setItem(LocalStorageKeys.ThemeModeKey, mode);
};

export const getThemeMode = (): string | null => {
  return localStorage.getItem(LocalStorageKeys.ThemeModeKey);
};

export const deleteLocalStorageKey = (key: LocalStorageKeys): void => {
  localStorage.removeItem(key);
};

export function getFromLocalStorage<T>(key: LocalStorageKeys | string): T | null {
  const value = localStorage.getItem(key);
  if (value !== null) {
    return JSON.parse(value) as T;
  }
  return value;
}

export function setInLocalStorage<T>(key: LocalStorageKeys | string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export const useLocalStorage = (): IUseLocalStorage => {
  return {
    setThemeModeInLocalStorage: setThemeMode,
    getThemeModeFromLocalStorage: getThemeMode,
    deleteThemeModeFromLocalStorage: deleteLocalStorageKey,
    setValueInLocalStorage: setInLocalStorage,
    getValueFromLocalStorage: getFromLocalStorage,
  };
};
