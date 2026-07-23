export type Language = "javascript" | "typescript";
export type Architecture = "mvc" | "modular";
export type Validation = "joi" | "zod";
export type DatabaseClient = "mongoose" | "prisma";

export type FileType =
  "controller" | "service" | "route" | "validation" | "model";

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
