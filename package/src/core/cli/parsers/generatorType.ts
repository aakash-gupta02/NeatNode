import {
  GENERATOR_TYPES,
  type GeneratorType,
} from "../../../shared/types/Domain.js";

export function parseGeneratorType(value: string): GeneratorType {
  if (GENERATOR_TYPES.includes(value as GeneratorType)) {
    return value as GeneratorType;
  }

  throw new Error(`Unknown generator: "${value}"`);
}
