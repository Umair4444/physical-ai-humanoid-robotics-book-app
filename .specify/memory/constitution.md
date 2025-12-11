<!--
Sync Impact Report:
- Version: 1.0.0 -> 1.1.0
- Change Type: MINOR (New Backend Deployment Principle)
- Summary: Updated deployment strategy to explicitly include Vercel for backend, leveraging Serverless Functions.
- Modified Principles:
  - Principle II: Architecture & Technology Standards (clarified FastAPI deployment)
  - Principle VIII: Deployment Rules (specified Vercel for backend deployment)
- Added sections: None
- Removed sections: None
- Templates requiring updates:
  - ✅ .specify/templates/plan-template.md (Consider Vercel backend in plans)
  - ✅ .specify/templates/spec-template.md (No direct change, but specs should align)
  - ✅ .specify/templates/tasks-template.md (No direct change, but tasks should align)
- Follow-up TODOs: None
-->
# Physical AI & Humanoid Robotics Textbook Constitution

## Core Principles

### I. Purpose & Vision Rules
This project's immutable purpose is to create a world-class, open-source educational textbook on Physical AI and Humanoid Robotics.
- **Long-Term Goal:** To become the definitive, interactive learning resource for students, researchers, and practitioners in the field, complete with theoretical foundations and practical, reproducible examples.
- **Scope:** The project encompasses educational content (markdown), a Docusaurus-based frontend for presentation, and a FastAPI-based backend for future interactive simulations and tools.
- **Non-Compromise Clause:** The scientific accuracy, educational clarity, and open-source nature of the content MUST NEVER be compromised for any feature or commercial consideration. The project must remain freely accessible.

### II. Architecture & Technology Standards
The project adheres to a strict mono-repo structure and technology stack to ensure consistency and maintainability.
- **Required Languages:** TypeScript for the frontend, Python 3.11+ for the backend.
- **Folder Structure Contract:** The repository MUST adhere to the following top-level structure:
  - `/frontend`: Docusaurus application.
  - `/backend`: FastAPI application, including OpenAI-Agent SDK integration.
  - `/docs`: Raw markdown source for the textbook content.
  - `/scripts`: Automation and utility scripts.
  - `/tests`: All integration and end-to-end tests. Unit tests reside within their respective `frontend` or `backend` modules.
  - `/infra`: Infrastructure-as-Code (e.g., Terraform, Docker-compose) for deployment configurations.
  - `/images`: Central repository for all static image assets used in the textbook.
  - `/database`: SQL schemas, migration files, and seeds for PostgreSQL.
- **Framework Conventions:**
  - **Docusaurus:** All frontend code must be written in TypeScript using React best practices. Component logic and styling must be modular.
  - **FastAPI:** All backend code must use modern Python features (e.g., type hints). The `uv` package manager is the exclusive tool for Python dependency management. Backend deployment will target Vercel Serverless Functions.
  - **PostgreSQL:** All database schema changes MUST be managed through version-controlled migration files. Direct, un-versioned schema alterations are forbidden.
- **API and SDK Integration:** External documentation, SDKs, and frameworks MUST be installed and managed via the Gemini CLI and its Context7 MCP integration. Manual installation or un-managed dependencies are prohibited.

### III. AI Agent & Spec-Driven-Development Rules
This project is developed under a strict Spec-Driven-Development (SDD) paradigm, enforced by Spec-Kit Plus and the Gemini CLI.
- **Spec Mandate:** All features, changes, or bug fixes MUST begin with a formal specification file (`spec.md`). The spec must define the 'why' (business case), 'what' (functional requirements), and 'how' (high-level technical approach).
- **Design from Spec:** Architectural plans (`plan.md`) MUST be derived directly from an approved `spec.md`. The plan must detail the components, interfaces, and data models required.
- **Task Generation:** Implementation tasks (`tasks.md`) MUST be generated from the `plan.md`. Each task must be atomic, testable, and directly traceable to a requirement in the specification.
- **Code Derivation:** All code produced by AI agents or human developers MUST be a direct implementation of an approved task. Code that cannot be traced to a spec and task is considered invalid and will be rejected.

### IV. Testing & Quality Gates
Quality is non-negotiable. A test-first approach is mandatory.
- **Test-First Enforcement (TDD):** For every task, a failing test (unit, integration, or documentation) MUST be written and committed *before* the implementation code is written. The development cycle MUST follow the Red-Green-Refactor pattern.
- **Deployment Gate:** A deployment to production or staging environments is strictly forbidden if any test case in the entire repository is failing. The CI/CD pipeline MUST enforce this automatically.
- **Test Categories:**
  - **Unit Tests:** Reside with the source code (`/frontend/src`, `/backend/app`). Must cover all business logic, helper functions, and components in isolation.
  - **Integration Tests:** Reside in `/tests/integration`. Must verify interactions between backend services, database, and frontend API calls.
  - **Documentation Tests:** Reside in `/tests/docs`. Must validate content for broken links, formatting errors, and asset integrity.

### V. Environment Variable Policy
Environment configuration MUST be consistent, secure, and well-documented.
- **Canonical Source:** The `/.env.example` file is the single source of truth for all required environment variables. It MUST be kept up-to-date with every change. It must contain definitions and example values, but no secrets.
- **Secrets Management:** No secrets (API keys, database passwords, private tokens) shall ever be committed to the Git repository. For local development, they are stored in a `.env` file (which is in `.gitignore`). For production, they MUST be managed through the hosting provider's secure secrets store (e.g., Vercel Environment Variables).
- **Required Keys:** The `.env.example` must categorize variables for clarity:
  - `##-- FRONTEND --##` (e.g., `DOCUSAURUS_BASE_URL`)
  - `##-- BACKEND --##` (e.g., `DATABASE_URL`, `OPENAI_API_KEY`)
  - `##-- DATABASE --##` (e.g., `POSTGRES_USER`, `POSTGRES_PASSWORD`)

### VI. Image, Favicon, and Asset Rules
All visual assets must be managed systematically.
- **Sourcing:** All images and icons must have a clear license permitting use (e.g., Creative Commons, MIT, or custom-created). The source and license for each asset must be documented in a central `IMAGE_LICENSES.md` file within the `/images` directory.
- **Relevance:** All imagery must be directly relevant to humanoid robotics, AI, or the specific educational topic. The project favicon must be a stylized, professional graphic representing the project's theme.
- **Optimization:** All images committed to the `/images` folder MUST be optimized for web delivery (e.g., compressed, correctly sized, using modern formats like WEBP).
- **Naming Convention:** File names must be descriptive and use kebab-case (e.g., `humanoid-arm-schematic.webp`).

### VII. Git, GitHub & CI/CD Rules
A disciplined version control and continuous integration process is mandatory.
- **Branch Naming:**
  - `main`: Production-ready, protected branch. Direct pushes are forbidden.
  - `develop`: Integration branch for features.
  - `feat/<feature-name>`: For new features.
  - `fix/<issue-number>`: For bug fixes.
  - `docs/<topic>`: For documentation-only changes.
- **Pull Requests (PRs):** All changes to `main` or `develop` MUST be made through a PR. A PR requires at least one approving review from a designated maintainer and a passing CI build.
- **Commit Message Format:** Commits MUST follow the Conventional Commits specification (e.g., `feat: add interactive robot arm simulation`).
- **Versioning:** The project MUST use Semantic Versioning (MAJOR.MINOR.PATCH). Version bumps are managed by the maintainers upon release.

### VIII. Deployment Rules
Deployments must be automated, predictable, and environment-aware.
- **Frontend Deployment:** The `frontend` Docusaurus application is deployed exclusively to Vercel. The Vercel project MUST be configured to build and deploy from the `main` branch for production and the `develop` branch for a staging preview.
- **Backend Deployment:** The `backend` FastAPI application will be deployed to Vercel as Serverless Functions. While containerization may be used for local development, deployment to Vercel will leverage its native Python Serverless Functions. The deployment process MUST be automated via scripts in `/scripts` and configuration in `/infra`.
- **Environment-Specific Deployment:** The CI/CD pipeline MUST handle environment-specific configurations. The `main` branch deploys with production settings, and all other branches use development/staging settings.

### IX. Documentation Rules
Documentation is a first-class citizen, equal in importance to code.
- **Docusaurus Standards:** All textbook content in `/docs` MUST be written in standard Markdown (MDX is permitted for interactive components). Frontmatter (e.g., `title`, `sidebar_label`) is required for every document.
- **Content Formatting:** Content MUST be clear, well-structured with proper heading hierarchy, and grammatically correct. Code blocks must specify the language for syntax highlighting.
- **API Documentation:** The FastAPI backend MUST use OpenAPI and generate a `openapi.json` schema automatically. This schema will be used to generate and display API documentation on the Docusaurus site.
- **Folder Hierarchy:** The `/docs` folder hierarchy MUST mirror the intended sidebar navigation structure of the textbook for clarity and maintainability.

### X. Non-Negotiables
These rules are absolute and supersede all other preferences or practices. Violation of these rules constitutes a critical failure.
- **For AI Agents (Gemini CLI + Spec-Kit Plus):**
  - All work MUST adhere to the Spec-Driven-Development (SDD) lifecycle (Principle III).
  - All code modifications MUST be justified by a task.
  - All package and dependency management for Python MUST use `uv`.
- **For Human Developers:**
  - You MUST follow the SDD process. No "cowboy coding."
  - You MUST adhere to the Test-First (TDD) mandate (Principle IV).
  - You MUST respect and maintain the established folder structure and technology stack (Principle II).
  - You MUST NEVER commit secrets or un-optimized assets.

## Governance
This Constitution is the supreme law of the project. It may only be amended through a formal process.
- **Amendment Procedure:** Any proposed change must be submitted as a Pull Request modifying this document. The PR must include a clear rationale and be approved by a majority of the project maintainers.
- **Versioning Policy:** This Constitution follows Semantic Versioning.
  - **MAJOR:** Incompatible changes, removal or redefinition of a Principle.
  - **MINOR:** Adding a new Principle or a significant, backward-compatible expansion.
  - **PATCH:** Clarifications, typo fixes, and non-semantic changes.
- **Compliance Review:** All PRs are implicitly reviewed for compliance with this Constitution. Reviewers are obligated to reject changes that violate these principles.

**Version**: 1.1.0 | **Ratified**: 2025-12-11 | **Last Amended**: 2025-12-11