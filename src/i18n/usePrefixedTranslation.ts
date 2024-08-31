import { useTranslation, UseTranslationResponse } from "react-i18next";

/**
 * Returns an i18n instance with the `t` bound to the given prefix key.
 * Helpful to keep translation keys short.
 * @param prefix prefix to prepend to the translation keys
 */
export function usePrefixedTranslation(
  prefix: string
): UseTranslationResponse<"translation", string> {
  return useTranslation("translation", { keyPrefix: prefix });
}
