# AI Agent Coding Guidelines & Standards

This document establishes the architecture patterns, folder structures, and coding guidelines that all contributing agents must strictly adhere to when modifying the codebase.

---

## 🎨 Client Architecture (React 19 + Vite)

The frontend codebase is organized using a **Feature-Based Architecture**. All feature directories are located within the `src/features/` folder.

```
src/
├── features/
│   └── [feature-name]/
│       ├── pages/          # Layout & routing wrappers (minimal code)
│       ├── components/     # Feature-specific interactive components
│       ├── api/            # API call modules (fetch/axios wrapper integrations)
│       ├── models/         # Zod schemas for request/response validation
│       └── types/          # TypeScript interface/type declarations
└── shared/
    └── components/         # Reusable atoms (Button, Toast, Dialog, Card)
```

### Client Guidelines:
1.  **Zod Validation**: Every API interaction must have a corresponding schema. Always use **Zod** to validate incoming and outgoing data payloads.
2.  **Shared Components First**: Before creating a feature-specific UI component, determine if it can be written as a reusable element inside `src/shared/components/` (e.g., standard Dialogs, Toasts, Cards, Buttons).
3.  **Minimal Pages**: Pages (`src/features/[feature]/pages/`) must contain minimal code. Keep their files clean by outsourcing all structural UI to modular components.
4.  **Standard API Envelope**: Both API calls and mock responses must strictly match the Standard JSON Envelope Format (defined below).

---

## ⚙️ Server Architecture (Node.js + Express)

The backend codebase is organized using a **Service-Controller Architecture**. All core directories reside under the `src/` directory.

```
src/
├── controllers/    # Route handlers, middleware binding, and inputs parsing
├── services/       # Core business logic (database queries, agent orchestration)
├── models/         # Database schemas and data layer models
├── infrastructure/ # External dependencies (e.g., Gemini API wrapper setups)
```

### Server Guidelines:
1.  **PostgreSQL DB**: Persist data using PostgreSQL. Retrieve connection configuration details strictly from the root `.env` variables.
2.  **Minimal Controllers**: Keep controllers thin. They should only handle Express routing, authenticate via middleware, parse parameters, and forward work to services.
3.  **Core Services**: Place all database operations, mathematical logic, external APIs orchestrations, and prompt processing in services.
4.  **Infrastructure Isolation**: External adapters, SDK bindings, and third-party utility clients should reside under `src/infrastructure/`.

---

## ✉️ Standard JSON Envelope Format

All responses from the server and API payload wrappers in the client must strictly adhere to this envelope:

```json
{
  "success": true,
  "data": {
    "id": "123",
    "name": "John Doe"
  },
  "error": null,
  "meta": {
    "requestId": "req_abc123"
  }
}
```

*   **`success`**: `boolean` indicating if the operation succeeded.
*   **`data`**: Any JSON object/array representing the response payload (null if success is false).
*   **`error`**: An object containing `{ code: string, message: string }` if success is false, or null if true.
*   **`meta`**: Optional metadata object, e.g. for logging, tracking request IDs, or handling pagination values.
