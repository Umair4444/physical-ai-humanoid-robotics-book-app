# Implementation Plan: Frontend Application

**Branch**: `001-frontend-app` | **Date**: 2025-12-11 | **Spec**: specs/001-frontend-app/spec.md
**Input**: Feature specification from `specs/001-frontend-app/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

The primary goal is to develop a Docusaurus-based frontend for the Physical AI & Humanoid Robotics Textbook. This involves presenting interactive textbook content, enabling user customization (dark mode, translation), integrating a RAG chatbot, implementing user authentication and subscription management, and building a dynamic user interface with reusable components.

## Technical Context

**Language/Version**: TypeScript (for Docusaurus/React), Python 3.11+ (for backend-facing aspects like API interaction, as per constitution).
**Primary Dependencies**: React, Docusaurus, UI Framework (Chosen): Tailwind CSS with Shadcn UI., State Management Library (Chosen): Zustand., i18n library (for translation), authentication library (for handling user sessions), potentially charting/visualization libraries for interactive examples within textbook content.
**Storage**: Browser Local Storage (for user preferences like theme, language), browser session storage (for temporary user session data). No direct persistent database storage on the frontend.
**Testing**: Jest (for unit tests), React Testing Library (for component tests), Cypress (for End-to-End tests).
**Target Platform**: Modern Web Browsers (Chrome, Firefox, Safari, Edge) with responsive design.
**Project Type**: Web application (frontend).
**Performance Goals**: Initial page load time < 3 seconds. Subsequent page navigation < 1 second. Smooth animations for dynamic UI elements (e.g., navbar).
**Constraints**: Adherence to project constitution principles (monorepo structure, folder conventions). Cross-browser compatibility. Responsive design for various screen sizes.
**Scale/Scope**: Educational textbook platform for students and researchers. Expected initial user base in hundreds, scaling to thousands. Content will comprise 10 modules, each with 6 chapters (total 60 chapters).

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

The following Constitution Principles are directly relevant to this Frontend Application plan and are adhered to:

*   **Principle II. Architecture & Technology Standards**:
    *   **Required Languages**: Uses TypeScript for frontend development.
    *   **Folder Structure Contract**: Adheres to the `/frontend` structure as defined.
    *   **Framework Conventions**: Plan incorporates Docusaurus and React best practices, emphasizing modular component design.
    *   **API and SDK Integration**: External SDKs and APIs (like for authentication, chatbot) will be managed via Gemini CLI/Context7.
*   **Principle III. AI Agent & Spec-Driven-Development Rules**: This plan is directly derived from `specs/001-frontend-app/spec.md`.
*   **Principle IV. Testing & Quality Gates**: The plan incorporates a test-first approach, detailing the use of unit, component, integration, and E2E tests.
*   **Principle V. Environment Variable Policy**: Frontend environment variables (e.g., API keys, feature flags) will be managed via Vercel Environment Variables and documented in `.env.example`.
*   **Principle VI. Image, Favicon, and Asset Rules**: All image assets used in the frontend will adhere to sourcing, optimization, and naming conventions.
*   **Principle VIII. Deployment Rules**: The frontend application will be deployed exclusively to Vercel, building from `main` for production and `develop` for staging previews.
*   **Principle IX. Documentation Rules**: The textbook content will be sourced from the `/docs` folder as per constitution, and API documentation will be consumed from the backend's OpenAPI schema.

## Project Structure

### Documentation (this feature)

```text
specs/001-frontend-app/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
frontend/
├── src/
│   ├── components/       # Reusable UI components (buttons, forms, cards, toggle switches, etc.)
│   ├── layouts/          # Global layouts (navbar, footer)
│   ├── pages/            # Docusaurus pages/routes (home, contact, pricing, login, signup, book content)
│   ├── hooks/            # Custom React hooks
│   ├── contexts/         # React Contexts for global state (theme, language)
│   ├── services/         # API interaction logic (auth, chatbot, data fetching)
│   ├── styles/           # Global styles and theme definitions
│   └── utils/            # Utility functions
├── static/               # Static assets for Docusaurus (images, favicon)
├── blog/                 # Docusaurus blog (if applicable, not a primary feature for this spec)
├── docs/                 # Docusaurus content (linking to main /docs for textbook content)
└── tests/
    ├── unit/             # Unit tests for components, hooks, utils
    ├── integration/      # Integration tests for page flows, service interactions
    └── e2e/              # End-to-end tests with Cypress
```

**Structure Decision**: Selected "Option 2: Web application" for a clear separation of frontend logic and assets, aligning with the monorepo structure.

## Complexity Tracking

## Phase 0: Outline & Research (Completed)

The following `NEEDS CLARIFICATION` items from the Technical Context have been resolved:

1.  **UI Framework Selection**: **Tailwind CSS with Shadcn UI** has been chosen for styling and components.
2.  **State Management Strategy**: **Zustand** has been chosen for client-side state management.

The `research.md` file served its purpose in outlining these options and is now implicitly incorporated into the plan.

## Phase 1: Design & Contracts

**Prerequisites:** `research.md` complete and decisions made on UI Framework and State Management.

1.  **Data Model (`data-model.md`):**
    Will be derived from the "Key Entities" defined in `specs/001-frontend-app/spec.md`:
    *   **Book**: Represents a textbook. Attributes: `id`, `title`, `author`, `coverImageUrl`, `moduleIds`.
    *   **Module**: A section within a Book. Attributes: `id`, `title`, `chapterIds`.
    *   **Chapter**: A unit of content within a Module. Attributes: `id`, `title`, `fullLessonContent` (MDX/HTML), `summaryContent` (MDX/HTML), `imageUrls`.
    *   **User**: Application user. Attributes: `id`, `email`, `hashedPassword`, `subscriptionTierId`.
    *   **Subscription Tier**: Defines access levels. Attributes: `id`, `name` (Free, Standard, Premium), `features` (list of enabled features).
    *   **Testimonial**: User feedback. Attributes: `id`, `userId`, `bookId`, `rating`, `comment`, `date`.

2.  **API Contracts (`contracts/`):**
    The frontend will interact with the backend (FastAPI on Vercel) through these API endpoints. OpenAPI/JSON Schema definitions will be generated and placed in the `contracts/` directory.

    *   **Authentication API:**
        *   `POST /auth/signup`: User registration.
        *   `POST /auth/signin`: User login, returns JWT/session token.
        *   `POST /auth/signout`: User logout.
        *   `GET /auth/me`: Retrieve current user profile.
    *   **Subscription API:**
        *   `GET /subscriptions/plans`: Retrieve available subscription tiers.
        *   `GET /subscriptions/current`: Retrieve current user's subscription status.
        *   `POST /subscriptions/purchase`: Initiate subscription purchase.
    *   **Chatbot API:**
        *   `POST /chatbot/query`: Send a query to the RAG-chatbot, returns a response.
    *   **Content API:**
        *   `GET /books`: Retrieve a list of all books (including summarized info for home page).
        *   `GET /books/{bookId}`: Retrieve details for a specific book.
        *   `GET /books/{bookId}/modules/{moduleId}`: Retrieve details for a specific module.
        *   `GET /books/{bookId}/modules/{moduleId}/chapters/{chapterId}`: Retrieve full and summary content for a chapter.
    *   **Testimonial API:**
        *   `GET /testimonials`: Retrieve testimonials for books.
        *   `POST /testimonials`: Submit a new testimonial.

3.  **Quickstart (`quickstart.md`):**
    Will provide concise instructions on how to set up the frontend development environment, install dependencies, and run the Docusaurus application locally.

4.  **Agent Context Update:**
    After research and decisions are made on the UI Framework and State Management, the `update-agent-context.sh` script will be run to incorporate these new technologies into the agent's memory.
