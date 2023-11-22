import { genericTranslate } from "./genericTranslate.util";
import englishTranslations from "./en";
import norskTranslations from "./no";
import { CommonTranslationKey, CommonTranslations } from "./translation.types";

export const translate = (translationKey: CommonTranslationKey) =>
  genericTranslate<CommonTranslations, CommonTranslationKey>(translationKey, {
    english: englishTranslations,
    norsk: norskTranslations,
  });
