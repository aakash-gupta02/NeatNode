# NeatNode

**NeatNode** is a plug-and-play CLI that scaffolds clean, production-ready Node.js backends in seconds.
It comes with pre-built templates, optional CRUD modules, and a modern developer workflow.

---

## 🚀 Features

* Multiple templates: **Basic API**, **REST API**, and **Socket API**
* Clean MVC folder structure
* Optional CRUD scaffolding (User or Todo)
* Integrated logging (Winston + Morgan)
* Security middleware (Helmet, Rate Limiter)
* Dynamic CLI with file removal & template customization
* Ready for ESM, Redis, and future TypeScript support

---

## 🧭 Installation

```bash
npm install -g neatnode
```

or run directly:

```bash
npx neatnode
```

---

## ⚙️ Usage

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

## 📁 Templates

### **Basic API**

Minimal Express setup with optional Todo CRUD.
Perfect for small projects or quick prototypes.

### **REST API**

Full architecture with controllers, services, models, routes, error handling, validation, and logging.
Ideal for scalable, production-grade APIs.

### **Socket API**

Express + Socket.io integration with logging and CORS setup.
Best for chat apps or real-time systems.

---

## 🧩 Example Structure

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

## 🛠️ Built With

* Node.js & Express
* Inquirer (CLI)
* fs-extra & path (File system automation)
* Morgan & Winston (Logging)
* Joi (Validation)
* Helmet, Rate Limiter (Security)

---

## 🧑‍💻 Author

**Aakash Gupta**
[GitHub](https://github.com/aakash-gupta02) · [Email](mailto:aakashgupta052004@gmail.com)

---

## 🪪 License

MIT © Aakash Gupta

