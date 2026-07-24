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

export interface StarterTemplate {
  id: string;
  name: string;

  repoPath?: string;

  architecture?: Record<Architecture, string>;

  isModular?: boolean;

  crud?: StarterTemplateCrud;

  config: StarterTemplateConfig;
}
