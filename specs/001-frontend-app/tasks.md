
description: "Task list for Frontend Application feature implementation"
---

# Tasks: Frontend Application

**Input**:
- Design documents from `specs/001-frontend-app/`
- `plan.md` (required), `spec.md` (required for user stories), `research.md`, `data-model.md`, `contracts/`, `quickstart.md`

**Prerequisites**: `plan.md` (required), `spec.md` (required for user stories), `research.md`, `data-model.md`, `contracts/`

**Tests**: This task list assumes a TDD approach with explicit test tasks where appropriate.

## Format: `- [ ] [TaskID] [P?] [Story?] Description with file path`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Initialize new Docusaurus project in `frontend/`
- [x] T002 [P] Configure Tailwind CSS and Shadcn UI in `frontend/`
- [x] T003 [P] Setup Zustand for global state management in `frontend/src/store/`
- [x] T004 [P] Configure TypeScript for the `frontend/` project
- [x] T005 [P] Setup Jest and React Testing Library for unit/component tests in `frontend/`
- [x] T006 [P] Setup Cypress for E2E tests in `frontend/`
- [x] T007 Create initial shared folder structure in `frontend/src/` (components, layouts, pages, hooks, contexts, services, styles, utils)

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T008 Implement basic routing for Home, Login, Signup pages using Docusaurus routing in `frontend/src/pages/`
- [x] T009 Develop global Navbar layout component in `frontend/src/layouts/`
- [x] T010 Develop global Footer layout component in `frontend/src/layouts/`
- [x] T011 Setup light/dark mode context/logic using Zustand in `frontend/src/store/` and `frontend/src/contexts/ThemeContext.tsx`
- [x] T012 Setup multi-language (English, Urdu, Chinese) translation infrastructure using an i18n library in `frontend/src/i18n/`
- [x] T013 Create an API client for backend communication based on contract definitions in `frontend/src/services/apiClient.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

## Phase 3: User Story 1 - Read Textbook Content (Priority: P1) 🎯 MVP

**Goal**: Enable users to navigate and read textbook content, with tabbed lessons and images.

**Independent Test**: A user can access the home page, select a book, navigate through its modules and chapters, view both "Full Lesson" and "Summary" tabs, and see relevant images displayed.

### Implementation for User Story 1

- [x] T014 [P] [US1] Create `Book` entity model (frontend representation) in `frontend/src/types/book.ts`
- [x] T015 [P] [US1] Create `Module` entity model in `frontend/src/types/module.ts`
- [x] T016 [P] [US1] Create `Chapter` entity model in `frontend/src/types/chapter.ts`
- [x] T017 [US1] Implement API call to fetch list of books (`GET /books`) in `frontend/src/services/contentService.ts`
- [x] T018 [US1] Design and implement Book Card component for home page in `frontend/src/components/BookCard.tsx`
- [x] T019 [US1] Design and implement Module/Chapter navigation components in `frontend/src/components/` (e.g., `ModuleNav.tsx`, `ChapterList.tsx`)
- [x] T020 [US1] Implement API call to fetch chapter content (`GET /books/{bookId}/modules/{moduleId}/chapters/{chapterId}`) in `frontend/src/services/contentService.ts`
- [x] T021 [US1] Design and implement Chapter Viewer component (Full Lesson & Summary tabs) in `frontend/src/components/ChapterViewer.tsx`
- [x] T022 [US1] Integrate image display within content, ensuring responsive handling in `frontend/src/components/ChapterViewer.tsx`

## Phase 4: User Story 5 - Navigate and Explore Site (Priority: P1) 🎯 MVP

**Goal**: Provide intuitive site navigation and exploration.

**Independent Test**: A user can use the dynamic navbar, scroll to the top using the arrow, and get an overview of the site from the home page.

### Implementation for User Story 5

- [x] T023 [US5] Develop dynamic Navbar component logic (show on scroll up, hide on scroll down) in `frontend/src/layouts/Navbar.tsx`
- [x] T024 [US5] Implement glass-card effect for Navbar using Tailwind CSS in `frontend/src/layouts/Navbar.tsx`
- [x] T025 [P] [US5] Develop Scroll-to-Top arrow component in `frontend/src/components/ScrollToTop.tsx`
- [x] T026 [US5] Integrate Scroll-to-Top arrow functionality across relevant pages in `frontend/src/layouts/Layout.tsx`
- [x] T027 [US5] Design and implement Home page content, including site description and featured books section, in `frontend/src/pages/index.tsx`

## Phase 5: User Story 2 - Customize Viewing Experience (Priority: P1) 🎯 MVP

**Goal**: Allow users to personalize their viewing experience with themes and language.

**Independent Test**: A user can toggle between light/dark mode and switch the content language.

### Implementation for User Story 2

- [x] T028 [US2] Integrate light/dark mode toggle into Navbar in `frontend/src/layouts/Navbar.tsx`
- [x] T029 [US2] Implement theme switching logic using Zustand and Tailwind CSS in `frontend/src/store/themeStore.ts` and `frontend/tailwind.config.js`
- [x] T030 [US2] Integrate translation switch component into Navbar in `frontend/src/layouts/Navbar.tsx`
- [x] T031 [US2] Implement language switching logic using Zustand and i18n library in `frontend/src/store/languageStore.ts` and `frontend/src/i18n/`

## Phase 6: User Story 4 - Manage User Account (Priority: P2)

**Goal**: Enable user authentication and subscription management.

**Independent Test**: A user can successfully sign up, sign in, and view subscription options.

### Implementation for User Story 4

- [x] T032 [P] [US4] Implement `User` entity model in `frontend/src/types/user.ts`
- [x] T033 [P] [US4] Implement `Subscription Tier` entity model in `frontend/src/types/subscription.ts`
- [x] T034 [P] [US4] Develop reusable form components (Input, Button, Label) using Shadcn UI in `frontend/src/components/ui/`
- [x] T035 [US4] Design and implement Sign-up page and form in `frontend/src/pages/signup.tsx`
- [x] T036 [US4] Implement API call for user registration (`POST /auth/signup`) in `frontend/src/services/authService.ts`
- [x] T037 [US4] Design and implement Sign-in page and form in `frontend/src/pages/login.tsx`
- [x] T038 [US4] Implement API call for user authentication (`POST /auth/signin`) in `frontend/src/services/authService.ts`
- [x] T039 [US4] Setup client-side state management for user session (login status, user data) using Zustand in `frontend/src/store/userStore.ts`
- [x] T040 [US4] Design and implement Pricing section components (Free, Standard, Premium cards) in `frontend/src/components/PricingCards.tsx` and `frontend/src/pages/pricing.tsx`
- [x] T041 [US4] Implement API call to fetch subscription plans (`GET /subscriptions/plans`) in `frontend/src/services/subscriptionService.ts`

## Phase 7: User Story 3 - Interact with AI Chatbot (Priority: P2)

**Goal**: Integrate an interactive RAG-chatbot for content-related queries.

**Independent Test**: A user can open the chatbot, ask a question relevant to the textbook, and receive an appropriate response.

### Implementation for User Story 3

- [x] T042 [P] [US3] Develop reusable Chatbot UI components (ChatWindow, ChatInput, MessageBubble) using Shadcn UI in `frontend/src/components/chatbot/`
- [x] T043 [US3] Implement API call for chatbot queries (`POST /chatbot/query`) in `frontend/src/services/chatbotService.ts`
- [x] T044 [US3] Integrate Chatbot UI into application (e.g., a floating button) in `frontend/src/layouts/Layout.tsx`
- [x] T045 [US3] Setup client-side state management for chatbot conversation history using Zustand in `frontend/src/store/chatbotStore.ts`

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T046 [P] Implement Testimonial section components in `frontend/src/components/Testimonials.tsx` and integrate into home page (`frontend/src/pages/index.tsx`)
- [ ] T047 [P] Implement API calls for Testimonials (`GET /testimonials`, `POST /testimonials`) in `frontend/src/services/testimonialService.ts`
- [ ] T048 [P] Develop Contact page with form using reusable form components in `frontend/src/pages/contact.tsx`
- [ ] T049 Refine responsive design for all pages and components using Tailwind CSS in `frontend/`
- [ ] T050 Conduct accessibility review and implement improvements across the application in `frontend/`
- [ ] T051 Implement performance optimization (e.g., lazy loading components/images, code splitting) in `frontend/`
- [ ] T052 Add comprehensive E2E tests with Cypress for critical user journeys (reading content, login/signup, chatbot interaction) in `frontend/cypress/e2e/`
- [ ] T053 Review and update `quickstart.md` and any other relevant documentation in `specs/001-frontend-app/`

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-7)**: All depend on Foundational phase completion
  - User Story 1 (P1), User Story 5 (P1), User Story 2 (P1) can proceed in parallel or prioritized order.
  - User Story 4 (P2), User Story 3 (P2) can proceed once P1 stories are stable, or in parallel if resources allow.
- **Polish (Phase 8)**: Depends on all desired user stories being complete

### User Story Dependencies

- All user stories are designed to be largely independent after the Foundational phase.
- US1 (Read Textbook Content) might provide data for US3 (Chatbot), but US3 can use placeholder data initially.
- US4 (Manage User Account) impacts access to content, but content viewing (US1) is available to free users.

### Within Each User Story

- API calls and data fetching logic should be implemented before UI components that consume them.
- Reusable UI components should be developed before integrating them into pages.
- Tests (if included) MUST be written and FAIL before implementation.

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel.
- Many Foundational tasks can be parallelized (e.g., Navbar/Footer, theme setup, i18n setup).
- Once Foundational phase completes, User Stories can be worked on in parallel by different team members, respecting P1 priorities first.
- Within each User Story, tasks marked [P] can be done in parallel (e.g., entity models, reusable UI components).

## Implementation Strategy

### MVP First (User Stories 1, 5, 2)

1.  Complete Phase 1: Setup
2.  Complete Phase 2: Foundational (CRITICAL - blocks all user stories)
3.  Complete Phase 3: User Story 1 (Read Textbook Content)
4.  Complete Phase 4: User Story 5 (Navigate and Explore Site)
5.  Complete Phase 5: User Story 2 (Customize Viewing Experience)
6.  **STOP and VALIDATE**: Test primary user journeys and core functionality.
7.  Deploy/demo if ready.

### Incremental Delivery

1.  Complete Setup + Foundational → Foundation ready
2.  Add User Story 1 → Test independently → Deploy/Demo (Core Content)
3.  Add User Story 5 → Test independently → Deploy/Demo (Navigation)
4.  Add User Story 2 → Test independently → Deploy/Demo (Customization)
5.  Add User Story 4 → Test independently → Deploy/Demo (User Accounts)
6.  Add User Story 3 → Test independently → Deploy/Demo (Chatbot)
7.  Each story adds value without breaking previous stories.

### Parallel Team Strategy

With multiple developers:

1.  Team completes Setup + Foundational together.
2.  Once Foundational is done:
    *   Developer A: User Story 1 (Content)
    *   Developer B: User Story 5 (Navigation)
    *   Developer C: User Story 2 (Customization)
    *   Developer D: User Story 4 (User Accounts)
    *   Developer E: User Story 3 (Chatbot)
3.  Stories complete and integrate independently.