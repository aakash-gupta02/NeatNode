import type { AddonType } from "../../../shared/types/Addon.js";

export interface AddonDefinition {
  databaseRequired: boolean;
}

export const ADDON_DEFINITIONS: Record<AddonType, AddonDefinition> = {
  auth: {
    databaseRequired: true,
  },
};
