import { SessionStorageKeys } from "../enums";

export interface IUseSessionStorage {
  setValueInSessionStorage: <T>(key: SessionStorageKeys | string, value: T) => void;
  getValueFromSessionStorage: <T>(key: SessionStorageKeys | string) => T | null;
  deleteThemeModeFromSessionStorage: (key: SessionStorageKeys | string) => void;
}

export function setInSessionStorage<T>(key: SessionStorageKeys | string, value: T): void {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function getFromSessionStorage<T>(key: SessionStorageKeys | string): T | null {
  const value = sessionStorage.getItem(key);
  if (value !== null) {
    return JSON.parse(value) as T;
  }
  return value;
}

export const deleteSessionStorageKey = (key: SessionStorageKeys | string): void => {
  sessionStorage.removeItem(key);
};

export const useSessionStorage = (): IUseSessionStorage => {
  return {
    getValueFromSessionStorage: getFromSessionStorage,
    setValueInSessionStorage: setInSessionStorage,
    deleteThemeModeFromSessionStorage: deleteSessionStorageKey,
  };
};
