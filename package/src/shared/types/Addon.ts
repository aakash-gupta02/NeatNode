export const ADDONS = ["auth"] as const;
export type AddonType = (typeof ADDONS)[number];

export const AddonKinds = ["module", "integration"] as const;
export type AddonKind = (typeof AddonKinds)[number];
