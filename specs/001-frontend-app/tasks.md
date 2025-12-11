# Tasks: Frontend Application

**Input**: Design documents from `/specs/001-frontend-app/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `frontend/src/`
- Paths shown below assume single project - adjust based on plan.md structure

---

## Phase 1: Setup (Project Initialization and Core Configuration)

**Purpose**: Project initialization and basic structure

- [x] T001 Initialize new Docusaurus project in `frontend/`
- [x] T002 [P] Configure Tailwind CSS and Shadcn UI in `frontend/`
- [x] T003 [P] Setup Zustand for global state management in `frontend/src/store/`
- [x] T004 [P] Configure TypeScript for the `frontend/` project
- [x] T005 [P] Setup Jest and React Testing Library for unit/component tests in `frontend/`
- [x] T006 [P] Setup Cypress for E2E tests in `frontend/`
- [x] T007 Create initial shared folder structure in `frontend/src/` (components, layouts, pages, hooks, contexts, services, styles, utils)

---

## Phase 2: Foundational (Core Global Features)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T008 Implement basic routing for Home, Login, Signup pages using Docusaurus routing in `frontend/src/pages/`
- [x] T009 Develop global Navbar layout component in `frontend/src/layouts/`
- [x] T010 Develop global Footer layout component in `frontend/src/layouts/`
- [x] T011 Setup light/dark mode context/logic using Zustand in `frontend/src/store/` and `frontend/src/contexts/ThemeContext.tsx`
- [x] T012 Setup multi-language (English, Urdu, Chinese) translation infrastructure using an i18n library in `frontend/src/i18n/`
- [x] T013 Create an API client for backend communication based on contract definitions in `frontend/src/services/apiClient.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Read Textbook Content (Priority: P1) 🎯 MVP

**Goal**: As a user, I want to navigate and read the textbook content, organized into modules and chapters, with each chapter having a full lesson and a summary tab, accompanied by relevant images.

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
- [ ] T015 [P] [US1] Define React components for `BookCard` in `frontend/src/components/BookCard.tsx`.
- [ ] T016 [P] [US1] Define React components for `ModuleList` in `frontend/src/components/ModuleList.tsx`.
- [ ] T017 [P] [US1] Define React components for `ChapterList` in `frontend/src/components/ChapterList.tsx`.
- [ ] T018 [P] [US1] Define React components for `LessonTabs` (Full Lesson, Summary) in `frontend/src/components/LessonTabs.tsx`.
- [ ] T019 [P] [US1] Implement `ContentService` for fetching book, module, chapter content from API in `frontend/src/services/ContentService.ts`.
- [ ] T020 [US1] Create Docusaurus page for displaying a list of books (`frontend/src/pages/books.tsx`).
- [ ] T021 [US1] Create Docusaurus page for displaying modules of a selected book (`frontend/src/pages/books/[bookId]/index.tsx`).
- [ ] T022 [US1] Create Docusaurus page for displaying chapters of a selected module (`frontend/src/pages/books/[bookId]/[moduleId]/index.tsx`).
- [ ] T023 [US1] Create Docusaurus page for displaying chapter content with tabs (`frontend/src/pages/books/[bookId]/[moduleId]/[chapterId].tsx`).
- [ ] T024 [US1] Integrate `ContentService` into chapter content page to display "Full Lesson" and "Summary" tabs.
- [ ] T025 [US1] Ensure images are displayed within chapter content based on `imageUrls` from `Chapter` entity.

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Customize Viewing Experience (Priority: P1)

**Goal**: As a user, I want to switch between light and dark mode and translate the content into English, Urdu, or Chinese to suit my preferences.

**Independent Test**: A user can toggle between light/dark mode and switch the content language.

### Implementation for User Story 2

- [ ] T026 [P] [US2] Create `ThemeToggle` component in `frontend/src/components/ThemeToggle.tsx`.
- [ ] T027 [P] [US2] Create `LanguageSwitch` component in `frontend/src/components/LanguageSwitch.tsx`.
- [ ] T028 [US2] Integrate `ThemeToggle` component into the global layout (`frontend/src/layouts/BaseLayout.tsx`).
- [ ] T029 [US2] Integrate `LanguageSwitch` component into the global layout (`frontend/src/layouts/BaseLayout.tsx`).
- [ ] T030 [US2] Implement persistence for theme and language settings using local storage in `frontend/src/utils/localStorage.ts`.
- [ ] T031 [US2] Ensure all static and dynamic content can be translated via i18n setup.

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 5 - Navigate and Explore Site (Priority: P1)

**Goal**: As a user, I want to easily navigate the application using a dynamic navbar, jump to the top of the page, and understand the site's offerings from the home page.

**Independent Test**: A user can use the dynamic navbar, scroll to the top using the arrow, and get an overview of the site from the home page.

### Implementation for User Story 5

- [ ] T032 [P] [US5] Design and implement a `DynamicNavbar` component with capsule-like styling in `frontend/src/components/DynamicNavbar.tsx`.
- [ ] T033 [US5] Implement scroll-up/scroll-down logic for `DynamicNavbar` visibility in `frontend/src/hooks/useScrollDirection.ts`.
- [ ] T034 [US5] Apply glass-card effect to `DynamicNavbar` when visible and fixed at top, no effect when at very top (`frontend/src/styles/navbar.css`).
- [ ] T035 [P] [US5] Implement a `ScrollToTopArrow` component in `frontend/src/components/ScrollToTopArrow.tsx`.
- [ ] T036 [US5] Integrate `DynamicNavbar` and `ScrollToTopArrow` into the `BaseLayout` (`frontend/src/layouts/BaseLayout.tsx`).
- [ ] T037 [US5] Develop the Home Page content (`frontend/src/pages/index.tsx`) including site description and featured books section.
- [ ] T038 [P] [US5] Create `FeaturedBooks` component to display 4 available books on the Home Page in `frontend/src/components/FeaturedBooks.tsx`.
- [ ] T039 [US5] Design and implement a themed `Footer` component in `frontend/src/layouts/Footer.tsx`.
- [ ] T040 [US5] Integrate `Footer` component into the `BaseLayout` (`frontend/src/layouts/BaseLayout.tsx`).

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: User Story 3 - Interact with AI Chatbot (Priority: P2)

**Goal**: As a user, I want to interact with a RAG-chatbot to ask questions and get assistance related to the textbook content.

**Independent Test**: A user can open the chatbot, ask a question relevant to the textbook, and receive an appropriate response.

### Implementation for User Story 3

- [ ] T041 [P] [US3] Implement `ChatbotService` for API interaction (`POST /chatbot/query`) in `frontend/src/services/ChatbotService.ts`.
- [ ] T042 [P] [US3] Create `ChatbotInterface` component (text input, response display) in `frontend/src/components/ChatbotInterface.tsx`.
- [ ] T043 [US3] Integrate `ChatbotInterface` into a global accessible element (e.g., a floating button/modal) in `frontend/src/layouts/BaseLayout.tsx` or a dedicated Docusaurus plugin.
- [ ] T044 [US3] Implement state management for chatbot conversation flow (e.g., loading, messages, errors) using Zustand in `frontend/src/stores/chatbotStore.ts`.
- [ ] T045 [US3] Handle displaying contextually relevant answers and error states from `ChatbotService` in `ChatbotInterface`.

**Checkpoint**: All user stories should now be independently functional

---

## Phase 7: User Story 4 - Manage User Account (Priority: P2)

**Goal**: As a user, I want to create an account, log in, and manage my subscription to access premium features.

**Independent Test**: A user can successfully sign up, sign in, and view subscription options.

### Implementation for User Story 4

- [ ] T046 [P] [US4] Implement `AuthService` for user registration (`POST /auth/signup`), login (`POST /auth/signin`), and user info retrieval (`GET /auth/me`) in `frontend/src/services/AuthService.ts`.
- [ ] T047 [P] [US4] Implement `SubscriptionService` for fetching plans (`GET /subscriptions/plans`) and current status (`GET /subscriptions/current`) in `frontend/src/services/SubscriptionService.ts`.
- [ ] T048 [P] [US4] Create `AuthStore` using Zustand to manage user authentication state and subscription status in `frontend/src/stores/authStore.ts`.
- [ ] T049 [US4] Develop Docusaurus login page (`frontend/src/pages/login.tsx`) using `AuthService`.
- [ ] T050 [US4] Develop Docusaurus signup page (`frontend/src/pages/signup.tsx`) using `AuthService`.
- [ ] T051 [P] [US4] Create `PricingSection` component (`frontend/src/components/PricingSection.tsx`) to display free, standard, and premium tiers using `SubscriptionService`.
- [ ] T052 [US4] Integrate `PricingSection` into a dedicated Docusaurus page (`frontend/src/pages/pricing.tsx`).
- [ ] T053 [US4] Implement basic routing protection for authenticated routes (e.g., dashboard, premium content) in Docusaurus configuration.

**Checkpoint**: All user stories should now be independently functional

---

## Phase 8: User Story 6 - Provide Feedback (Priority: P2)

**Goal**: As a user, I want to leave ratings and comments (testimonials) for books to share my experience with others.

**Independent Test**: A user can successfully submit a rating and comment for a book, and their testimonial is displayed on the site.

### Implementation for User Story 6

- [ ] T054 [P] [US6] Implement `TestimonialService` for fetching (`GET /testimonials`) and submitting (`POST /testimonials`) testimonials in `frontend/src/services/TestimonialService.ts`.
- [ ] T055 [P] [US6] Create `TestimonialForm` component for submitting ratings and comments in `frontend/src/components/TestimonialForm.tsx`.
- [ ] T056 [P] [US6] Create `TestimonialDisplay` component for showcasing existing testimonials in `frontend/src/components/TestimonialDisplay.tsx`.
- [ ] T057 [US6] Integrate `TestimonialForm` and `TestimonialDisplay` into a book-specific page or section (`frontend/src/pages/books/[bookId]/testimonials.tsx` or similar).

**Checkpoint**: All user stories should now be independently functional

---

## Phase 9: Final - Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T058 [P] Implement responsive design adjustments across all components and pages (NFR-004).
- [ ] T059 [P] Conduct accessibility audit and implement WCAG 2.1 Level AA compliance where feasible (NFR-002).
- [ ] T060 Optimize image assets and implement lazy loading for images within content (NFR-001, Constitution Principle VI).
- [ ] T061 Implement SEO best practices for Docusaurus pages (e.g., sitemaps, metadata).
- [ ] T062 Review and refine error handling across all API integrations (`frontend/src/services/`).
- [ ] T063 Implement client-side form validation for user input fields (signup, login, testimonial forms).
- [ ] T064 Conduct performance testing and optimize critical rendering paths (NFR-001).
- [ ] T065 Create comprehensive documentation for frontend setup, architecture, and deployment (`frontend/README.md`, Docusaurus docs).
- [ ] T066 Implement E2E tests for all critical user flows using Cypress (`frontend/tests/e2e/`).
- [ ] T067 Final cross-browser compatibility testing.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 5 (P1)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1/US2/US5 but should be independently testable
- **User Story 4 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1/US2/US3/US5 but should be independently testable
- **User Story 6 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1/US2/US3/US4/US5 but should be independently testable

### Within Each User Story

- Tests (if included) MUST be written and FAIL before implementation
- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tests for a user story marked [P] can run in parallel
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all tests for User Story 1 together (if tests requested):
# (No tests requested in spec.md, so none generated here)

# Launch all models for User Story 1 together:
# T015 [P] [US1] Define React components for `BookCard` in `frontend/src/components/BookCard.tsx`.
# T016 [P] [US1] Define React components for `ModuleList` in `frontend/src/components/ModuleList.tsx`.
# T017 [P] [US1] Define React components for `ChapterList` in `frontend/src/components/ChapterList.tsx`.
# T018 [P] [US1] Define React components for `LessonTabs` (Full Lesson, Summary) in `frontend/src/components/LessonTabs.tsx`.
# T019 [P] [US1] Implement `ContentService` for fetching book, module, chapter content from API in `frontend/src/services/ContentService.ts`.
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 5 → Test independently → Deploy/Demo
5. Add User Story 3 → Test independently → Deploy/Demo
6. Add User Story 4 → Test independently → Deploy/Demo
7. Add User Story 6 → Test independently → Deploy/Demo
8. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (P1)
   - Developer B: User Story 2 (P1)
   - Developer C: User Story 5 (P1)
   - Developer D: User Story 3 (P2)
   - Developer E: User Story 4 (P2)
   - Developer F: User Story 6 (P2)
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence