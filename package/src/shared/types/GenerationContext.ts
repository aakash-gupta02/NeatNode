export interface GenerationContext {
  serviceImport: string;
  controllerImport: string;
  validationImport: string;
  modelImport: string;
  utilsImport: string;
  middlewareImport: string;
  configImport: string;
  name: string;
  rawName: string;
  camelName: string;
  pascalName: string;
  kebabName: string;
  pluralName: string;
  camelPluralName: string;
  pascalPluralName: string;
}
