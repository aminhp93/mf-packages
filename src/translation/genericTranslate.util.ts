import { LanguageCode } from "../enums/languages";
import { useLanguageStore } from "../store/languageStore/languageStore";

export const genericTranslate = <Translations, TranslationKey>(
  translationKey: TranslationKey,
  translationSources: {
    english: Translations;
    norsk: Translations;
  }
): string => {
  const selectedLanguage = useLanguageStore.getState().languageCode;

  const translations: Translations =
    selectedLanguage === LanguageCode.English
      ? translationSources.english
      : translationSources.norsk;

  const translated = (translationKey as string)
    .split(".")
    .reduce((acc: any, item: string) => acc[item], translations);

  return typeof translated === "string" ? translated : `<${translationKey}>`;
};
