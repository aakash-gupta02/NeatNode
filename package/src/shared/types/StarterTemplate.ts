import type { Architecture } from "./Domain.js";

export interface StarterTemplateConfig {
  template: string;
  features: {
    resourceGenerator: boolean;
  };
}

export interface StarterTemplateCrud {
  message: string;
  resource: string;
}

interface BaseStarterTemplate {
  id: string;
  name: string;

  isModular?: boolean;

  crud?: StarterTemplateCrud;

  config: StarterTemplateConfig;
}

interface FixedStarterTemplate extends BaseStarterTemplate {
  repoPath: string;
  architecture?: never;
}

interface ArchitectureStarterTemplate extends BaseStarterTemplate {
  repoPath?: never;
  architecture: Record<Architecture, string>;
}

export type StarterTemplate =
  FixedStarterTemplate | ArchitectureStarterTemplate;
