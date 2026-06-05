<div align="center">
  <img src="https://i.postimg.cc/9Fvw7p3q/1762540009103.png" width="120" alt="NeatNode Logo" />
  <h1>NeatNode</h1>
  <p><strong>Instantly scaffold production-ready Node.js backends with one command.</strong></p>

  <img src="https://i.postimg.cc/59sw6LN6/1762540161048.png" alt="NeatNode Banner" />
</div>

## Overview

**NeatNode** is a plug-and-play **CLI tool** that scaffolds clean, production-ready **Node.js backend projects** (JavaScript & TypeScript) in seconds.  
It comes with pre-built templates, MVC or Modular architecture choices, optional CRUD modules, and a modern developer workflow - so you can **start coding instead of configuring.**

## Features

-  **Instant project setup** - generate a complete Node.js project structure instantly  
-  **JavaScript & TypeScript support** - choose your preferred language  
-  **Pre-configured templates** - Basic Express, REST API, and Socket.IO  
-  **Flexible Architecture** - pick between classic MVC or Modular architectures for REST APIs  
-  **Dynamic template logic** - easily include or exclude example CRUD modules (User, Todo, Auth)
-  **Scalable architecture** - prebuilt folder layouts  
-  **Security-first setup** - Helmet, Rate Limiter, and CORS integrated  
-  **Built-in error handling & logging** - Winston + Morgan setup (depending on template)  
-  **Production-ready** - clean, validated, and deployment-ready output  

## Installation

```bash
# Install globally
npm install -g neatnode
```

or run it directly using `npx`:

```bash
npx neatnode
```

## Usage

1. Run the CLI:

   ```bash
   npx neatnode
   ```
2. Enter project folder name (default: `my-app`).
3. Select Language:
   * **JavaScript**
   * **TypeScript**
4. Choose your template (options depend on language).
5. (Optional) For REST API in JavaScript, choose your architecture (MVC or Modular).
6. (Optional) Incorporate example CRUD modules, like Todo, User, or Auth.
7. Navigate and start building:

   ```bash
   cd <project_name>
   npm install
   npm run dev
   ```

## Available Templates

### **JavaScript**
| Template     | Description                                                                      |
| ------------ | -------------------------------------------------------------------------------- |
| **Basic Express** | Minimal structure with .env, nodemon, and clean folder setup (Optional Todo CRUD) |
| **REST API** | Express.js REST API with controllers, routes, and MongoDB config. Supports **MVC** or **Modular** architecture. (Optional User CRUD) |
| **Socket.IO**| Socket.io server setup for real-time apps |

### **TypeScript**
| Template     | Description                                                                      |
| ------------ | -------------------------------------------------------------------------------- |
| **Basic Express** | Minimal TS structure for Node.js (Optional Todo CRUD) |
| **REST API** | Express.js REST API boilerplate with TS. (Modular architectural setup with Optional Auth CRUD) |

## Previews

### **Frontend Website**

> Official landing page for NeatNode
>
> <img alt="NeatNode Landing Page" src="https://raw.githubusercontent.com/aakash-gupta02/NeatNode/refs/heads/main/assets/images/landingPage.png" />

### **Documentation Website**

> Comprehensive docs built with Nextra
>
> <img alt="NeatNode Docs" src="https://raw.githubusercontent.com/aakash-gupta02/NeatNode/refs/heads/main/assets/images/docs.png" />

## Project Structure (CLI Codebase)

```
neatnode/
├── backend/
│   ├── bin/                  # CLI entry point
│   ├── src/
│   │   ├── actions/          # Project creation algorithms
│   │   ├── config/           # Available templates config
│   │   ├── utils/            # Helper utils (downloader, copy, etc.)
│   │   └── cli.js            # Main CLI prompts & logic
├── templates/
│   ├── js/                   # JavaScript templates
│   └── ts/                   # TypeScript templates
├── docs/                     # Documentation (Nextra)
└── frontend/                 # Landing page code
```

## Example CLI Output

```
$ npx neatnode
🚀 Welcome to NeatNode CLI!

? Enter project folder name: api-server
? Select language: TypeScript
? Choose a template: REST API (TS)
? Include example Auth CRUD? Yes

✅ Project "api-server" created successfully using "REST API (TS)".

Next steps:
  cd api-server
  npm install
  npm run dev

🎉 Happy Coding!
```

## Learn More

* 📄 [Documentation](https://neatnode,codes)
* 💻 [Website](https://docs.neatnode.codes)
* 🧰 [NPM Package](https://www.npmjs.com/package/neatnode)

## Contributing

We welcome contributions!
Whether it’s improving the templates, enhancing CLI features, or reporting bugs - every PR helps.

1. Fork the repo
2. Create a new branch
3. Make your changes
4. Submit a pull request

See the [Contribution Guide](https://neatnodee-docs.vercel.app/guides/contributing) for more info.

## Author

**Aakash Gupta**  
[GitHub](https://github.com/aakash-gupta02) • [Portfolio](https://aakashgupta.app)

## License

This project is licensed under the **MIT License** - feel free to use, modify, and distribute.

<div align="center">
  <sub>Built with ❤️ by Aakash Gupta | NeatNode © 2025</sub>
</div>
