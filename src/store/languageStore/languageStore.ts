import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { LanguageCode } from "../../enums/languages";
import { mapLanguageCodeToDisplayName } from "../../utils";

export interface LanguageState {
  languageCode: LanguageCode;
}

type Actions = {
  setLanguage: (lang: LanguageCode) => void;
};

type LanguageStoreType = LanguageState & Actions;

export const useLanguageStore = create(
  persist(
    immer<LanguageStoreType>((set) => ({
      // Initial states
      languageCode: LanguageCode.English,

      // Actions
      setLanguage: (lang: LanguageCode) =>
        set((state) => {
          state.languageCode = lang;
        }),
    })),
    {
      name: "LanguageStorage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const selectLanguageCode = (state: LanguageState) => state.languageCode;
export const selectLanguageDisplayName = (state: LanguageState) =>
  mapLanguageCodeToDisplayName(selectLanguageCode(state));

export const { setLanguage } = useLanguageStore.getState();
