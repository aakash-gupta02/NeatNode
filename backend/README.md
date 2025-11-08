<div align="center">
  <img src="https://i.postimg.cc/9Fvw7p3q/1762540009103.png" width="120" alt="NeatNode Logo" />
  <h1>NeatNode</h1>
  <p><strong>Instantly scaffold production-ready Node.js backends with one command.</strong></p>

  <img src="https://i.postimg.cc/59sw6LN6/1762540161048.png" alt="NeatNode Banner" />
</div>

---

## Overview

**NeatNode** is a plug-and-play CLI that scaffolds clean, production-ready **Node.js backends** in seconds.  
It comes with pre-built templates, optional CRUD modules, and a modern developer workflow — so you can start coding instead of configuring.

---

## Features

- Multiple templates: **Basic API**, **REST API**, and **Socket API**
- Clean MVC folder structure
- Optional CRUD scaffolding (User or Todo)
- Integrated logging (Winston + Morgan)
- Security middleware (Helmet, Rate Limiter)
- Dynamic CLI with file removal & template customization
- Ready for ESM, Redis, and future TypeScript support

---

## Installation

```bash
npm install -g neatnode
````

or run directly with:

```bash
npx neatnode
```

---

## Usage

```bash
npx neatnode
```

* Enter your **project name**
* Choose a **template** (Basic / REST / Socket)
* Select whether to include **CRUD** examples
* Install dependencies and start your project:

```bash
cd my-app
npm install
npm run dev
```

---

## Templates

### Basic API

Minimal Express setup with optional Todo CRUD.
Perfect for small projects or quick prototypes.

### REST API

Full architecture with controllers, services, models, routes, error handling, validation, and logging.
Ideal for scalable, production-grade APIs.

### Socket API

Express + Socket.io integration with logging and CORS setup.
Best for chat apps or real-time systems.

---

## Example Project Structure

```
src/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── services/
 ├── utils/
 └── app.js
```

---

## Built With

* Node.js & Express
* Inquirer (CLI interaction)
* fs-extra & path (file system automation)
* Morgan & Winston (logging)
* Joi (validation)
* Helmet, Rate Limiter (security)

---

## Project Screenshots

### Frontend Website

> Official landing page for NeatNode <img src="https://i.postimg.cc/85QVd7pn/Untitled-design.png" alt="NeatNode Landing Page" />

---

### Documentation Website

> Comprehensive docs built with Nextra <img src="https://i.postimg.cc/QNY0vR5r/Untitled-design-1.png" alt="NeatNode Docs" />

---

## Author

**Aakash Gupta**
· [GitHub](https://github.com/aakash-gupta02) · [Email](mailto:aakashgupta052004@gmail.com) ·
[Website](https://neatnode.vercel.app) · [Docs](https://neatnodee-docs.vercel.app)

---

## License

MIT © Aakash Gupta