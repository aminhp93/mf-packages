import { LanguageCode } from "../enums";
import { LanguageDisplayName } from "../enums/languages";

export const mapLanguageCodeToDisplayName = (value: LanguageCode): LanguageDisplayName => {
  switch (value) {
    case LanguageCode.Norwegian:
      return LanguageDisplayName.Norsk;
    default:
      return LanguageDisplayName.English;
  }
};

export const mapLanguageDisplayToCode = (value: LanguageDisplayName): LanguageCode => {
  switch (value) {
    case LanguageDisplayName.Norsk:
      return LanguageCode.Norwegian;
    default:
      return LanguageCode.English;
  }
};
