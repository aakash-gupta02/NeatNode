<div align="center">
  <img src="https://i.postimg.cc/9Fvw7p3q/1762540009103.png" width="120" alt="NeatNode Logo" />
  <h1>NeatNode</h1>
  <p><strong>Instantly scaffold production-ready Node.js backends with one command.</strong></p>

  <img src="https://i.postimg.cc/59sw6LN6/1762540161048.png" alt="NeatNode Banner" />
</div>

---

## Overview

**NeatNode** is a plug-and-play **CLI tool** that scaffolds clean, production-ready **Node.js backend projects** in seconds.  
It comes with pre-built templates, optional CRUD modules, and a modern developer workflow — so you can **start coding instead of configuring.**

---

## Features

-  **Instant project setup** — generate a complete Node.js project structure instantly  
-  **Pre-configured templates** — Basic, REST API, and Socket.io templates ready to go  
-  **Dynamic template logic** — include or remove CRUD modules easily  
-  **Scalable architecture** — prebuilt MVC folder layout  
-  **Security-first setup** — Helmet, Rate Limiter, and CORS integrated  
-  **Built-in error handling & logging** — Winston + Morgan setup  
-  **Production-ready** — clean, validated, and deployment-ready output  

---

## Installation

```bash
# Install globally
npm install -g neatnode
````

or run it directly using `npx`:

```bash
npx neatnode my-app
```

---

## Usage

1. Run the CLI:

   ```bash
   npx neatnode
   ```
2. Choose your template:

   * **Basic Template**
   * **REST API Template**
   * **Socket Template**
3. Follow the prompts to name your project and select options.
4. Navigate and start building:

   ```bash
   cd my-app && npm install && npm run dev
   ```

---

## Template Types

| Template     | Description                                                                      |
| ------------ | -------------------------------------------------------------------------------- |
| **Basic**    | Minimal structure for any Node.js app with .env, nodemon, and clean folder setup |
| **REST API** | Express.js REST API boilerplate with controllers, routes, and MongoDB config     |
| **Socket**   | Socket.io server setup for real-time apps (chat, notifications, etc.)            |

---

## Previews

### **Frontend Website**

> Official landing page for NeatNode
>
> <img src="https://i.postimg.cc/85QVd7pn/Untitled-design.png" alt="NeatNode Landing Page" />

---

### **Documentation Website**

> Comprehensive docs built with Nextra
>
> <img src="https://i.postimg.cc/QNY0vR5r/Untitled-design-1.png" alt="NeatNode Docs" />

---

## Project Structure

```
neatnode/
├── bin/                  # CLI entry point
├── templates/
│   ├── basic/            # Basic Node.js template
│   ├── rest-api/         # REST API template
│   └── socket/           # Socket.io template
├── utils/
│   ├── logger.js
│   ├── prompt.js
│   └── spinner.js
├── package.json
└── README.md
```

---

## Example CLI Output

```
$ npx neatnode my-app
✔ Select a template: REST API
✔ Enter project name: my-app
✔ Location to save: ./projects
✅ Template generated successfully!
cd my-app && npm install && npm run dev
```

---

## Learn More

* 📄 [Documentation](https://neatnodee-docs.vercel.app)
* 💻 [Website](https://neatnodee.vercel.app)
* 🧰 [NPM Package](https://www.npmjs.com/package/neatnode)

---

## Contributing

We welcome contributions!
Whether it’s improving the templates, enhancing CLI features, or reporting bugs — every PR helps.

1. Fork the repo
2. Create a new branch
3. Make your changes
4. Submit a pull request

See the [Contribution Guide](https://neatnodee-docs.vercel.app/guides/contributing) for more info.

---

## Author

**Aakash Gupta**
[GitHub](https://github.com/aakash-gupta02) • [Website](https://neatnodee.vercel.app)

---

## License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute.

---

<div align="center">
  <sub>Built with ❤️ by Aakash Gupta | NeatNode © 2025</sub>
</div>
