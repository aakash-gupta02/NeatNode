import type { AddonKind, AddonType } from "../../../shared/types/Addon.js";

export interface AddonDefinition {
  kind: AddonKind;
  databaseRequired: boolean;
  routeRegistry: boolean;
}

export const ADDON_DEFINITIONS: Record<AddonType, AddonDefinition> = {
  auth: {
    kind: "module",
    databaseRequired: true,
    routeRegistry: true,
  },
};
