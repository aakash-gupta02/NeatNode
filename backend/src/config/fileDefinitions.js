import path from "path";

export const FILE_DEFINITIONS = [
  // controller
  {
    type: "controller",

    template: "controller.hbs",

    output(config, name, ext) {
      if (config.architecture === "mvc") {
        return path.join(
          config.srcDir,
          "controllers",
          `${name}.controller.${ext}`,
        );
      }

      return path.join(
        config.srcDir,
        "modules",
        name,
        `${name}.controller.${ext}`,
      );
    },
  },

  // service
  {
    type: "service",

    template: "service.hbs",

    output(config, name, ext) {
      if (config.architecture === "mvc") {
        return path.join(config.srcDir, "services", `${name}.service.${ext}`);
      }

      return path.join(
        config.srcDir,
        "modules",
        name,
        `${name}.service.${ext}`,
      );
    },
  },

  // route
  {
    type: "route",

    template: "route.hbs",

    output(config, name, ext) {
      if (config.architecture === "mvc") {
        return path.join(config.srcDir, "routes", `${name}.route.${ext}`);
      }

      return path.join(config.srcDir, "modules", name, `${name}.route.${ext}`);
    },

  },

  // validation
  {
    type: "validation",

    template: "validation.hbs",

    output(config, name, ext) {
      if (config.architecture === "mvc") {
        return path.join(
          config.srcDir,
          "validations",
          `${name}.validation.${ext}`,
        );
      }

      return path.join(
        config.srcDir,
        "modules",
        name,
        `${name}.validation.${ext}`,
      );
    },
  },

  // model
  {
    type: "model",

    template: "model.hbs",

    database: "mongoose",

    output(config, name, ext) {
      if (config.architecture === "mvc") {
        return path.join(config.srcDir, "models", `${name}.model.${ext}`);
      }

      return path.join(config.srcDir, "modules", name, `${name}.model.${ext}`);
    },
  },
];
