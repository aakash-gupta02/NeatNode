import type { StarterTemplateConfig } from "./StarterTemplate.js";

export type Language = "javascript" | "typescript";
export type LangKey = "js" | "ts";

export type Architecture = "mvc" | "modular";
export type Validation = "joi" | "zod";
export type DatabaseClient = "mongoose" | "prisma";

export type FileType =
  "controller" | "service" | "route" | "validation" | "model";

export const GENERATOR_TYPES = [
  "resource",
  // "controller",
  // "service",
  // "route",
  // "model",
  // "validation",
] as const;

export type GeneratorType = (typeof GENERATOR_TYPES)[number];

export interface DatabaseConfig {
  provider: string;
  client: DatabaseClient;
}

export interface NeatNodeConfig {
  language: Language;
  architecture: Architecture;
  validation: Validation;
  srcDir: string;
  database: DatabaseConfig;
}

export type RuntimeNeatNodeConfig = NeatNodeConfig & StarterTemplateConfig;
