export default {
  // javascript templates
  js: [
    // basic express template
    {
      name: "Basic Express",
      repoPath: "templates/js/express-basic",
      config: {
        template: "basic",
        features: {
          resourceGenerator: false,
        },
      },
    },

    // rest api template
    {
      name: "REST API",
      architecture: {
        mvc: "templates/js/express-rest-api",
        modular: "templates/js/express-modular-rest-api",
      },
      config: {
        template: "rest-api",
        features: {
          resourceGenerator: true,
        },
      },
    },

    // socket.io template
    {
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

  // typescript templates
  ts: [
    // basic express template
    {
      name: "Basic Express (TS)",
      repoPath: "templates/ts/basic-express",
      config: {
        template: "basic",
        features: {
          resourceGenerator: false,
        },
      },
    },

    // rest api template
    {
      name: "REST API (TS)",
      repoPath: "templates/ts/express-rest-api",
      isModular: true,
      config: {
        template: "rest-api",
        features: {
          resourceGenerator: true,
        },
      },
    },

    // { name: "Socket.IO (TS)", repoPath: "templates/ts/express-socket" },
  ],
};
