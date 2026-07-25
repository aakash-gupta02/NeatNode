import { LangKey, Language } from "../types/Domain.js";

export function getExtension(language: Language): LangKey {
  return language === "typescript" ? "ts" : "js";
}
