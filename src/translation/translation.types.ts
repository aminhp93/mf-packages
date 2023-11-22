import { NestedKeyOf } from "../common-types/object";

export type CommonTranslations = {
  try_again: string;
  report_bug: string;
  seeMore: string;
  seeLess: string;
};

export type CommonTranslationKey = NestedKeyOf<CommonTranslations>;
