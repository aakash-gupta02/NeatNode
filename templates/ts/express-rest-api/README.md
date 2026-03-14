# NeatNode TypeScript REST API Template

Production-ready modular Express template with TypeScript and ESM imports.

## Features

- Modular structure with `modules/<feature>`
- JWT auth (register, login, me)
- Zod request validation
- Helmet + rate limiting
- Centralized error handler
- Standard API response format
- Winston structured logging
- MongoDB + Mongoose setup
- Environment validation with Zod

## Folder Structure

```txt
src/
  app.ts
  server.ts
  config/
    db.ts
    env.ts
    logger.ts
  middlewares/
    auth.middleware.ts
    error.middleware.ts
    rateLimiter.middleware.ts
    validateRequest.middleware.ts
  modules/
    auth/
      auth.controller.ts
      auth.route.ts
      auth.service.ts
      auth.validation.ts
    user/
      user.controller.ts
      user.model.ts
      user.route.ts
      user.service.ts
      user.validation.ts
  routes/
    index.route.ts
  utils/
    ApiError.ts
    ApiResponse.ts
    CatchAsync.ts
    Token.ts
  types/
    express.d.ts
```

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Copy and update env file:

```bash
cp .env.example .env
```

3. Run dev server:

```bash
npm run dev
```

## Scripts

- `npm run dev` - Run in watch mode
- `npm run build` - Build to `dist`
- `npm start` - Start compiled server

## API Endpoints

- `GET /` - Health check
- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `GET /api/v1/auth/me` (protected)
- `GET /api/v1/users/profile` (protected)
