import type { StarterTemplate } from "../../../shared/types/StarterTemplate.js";

const templates: Record<"js" | "ts", StarterTemplate[]> = {
  // JavaScript templates
  js: [
    {
      id: "basic",
      name: "Basic Express",
      repoPath: "templates/js/express-basic",
      crud: {
        message: "Include example Todo CRUD?",
        resource: "todo",
      },
      config: {
        template: "basic",
        features: {
          resourceGenerator: false,
        },
      },
    },

    {
      id: "rest-api",
      name: "REST API",
      architecture: {
        mvc: "templates/js/express-rest-api",
        modular: "templates/js/express-modular-rest-api",
      },
      crud: {
        message: "Include example User CRUD?",
        resource: "user",
      },
      config: {
        template: "rest-api",
        features: {
          resourceGenerator: true,
        },
      },
    },

    {
      id: "socket",
      name: "Socket.IO",
      repoPath: "templates/js/express-socket",
      config: {
        template: "socket",
        features: {
          resourceGenerator: false,
        },
      },
    },
  ],

  // TypeScript templates
  ts: [
    {
      id: "basic",
      name: "Basic Express",
      repoPath: "templates/ts/basic-express",
      crud: {
        message: "Include example Todo CRUD?",
        resource: "todo",
      },
      config: {
        template: "basic",
        features: {
          resourceGenerator: false,
        },
      },
    },

    {
      id: "rest-api",
      name: "REST API",
      repoPath: "templates/ts/express-rest-api",
      isModular: true,
      crud: {
        message: "Include example Auth CRUD?",
        resource: "auth",
      },
      config: {
        template: "rest-api",
        features: {
          resourceGenerator: true,
        },
      },
    },

    // {
    //   id: "socket",
    //   name: "Socket.IO",
    //   repoPath: "templates/ts/express-socket",
    // },
  ],
};

export default templates;