export const ADDONS = ["auth"] as const;

export type AddonType = (typeof ADDONS)[number];
