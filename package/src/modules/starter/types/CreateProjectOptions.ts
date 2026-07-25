// starter/types/CreateProjectOptions.ts

import { StarterTemplateConfig } from "../../../shared/types/StarterTemplate.js";
import type { LangKey, NeatNodeConfig } from "../../../shared/types/Domain.js";

export interface CreateProjectOptions {
  projectName: string;
  repoPath: string;
  includeCrud: boolean;
  crudName?: string;
  langKey: LangKey;
  isModular: boolean;
  tempConfig: StarterTemplateConfig;
}
