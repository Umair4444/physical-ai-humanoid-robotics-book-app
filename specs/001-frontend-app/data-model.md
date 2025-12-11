# Data Model: Frontend Application

**Branch**: `001-frontend-app` | **Date**: 2025-12-11 | **Spec**: specs/001-frontend-app/spec.md
**Input**: Key Entities from `specs/001-frontend-app/spec.md` and `specs/001-frontend-app/plan.md`.

## Entities

### Book

Represents a textbook in the application.

*   **id** (string): Unique identifier for the book.
*   **title** (string): The title of the book.
*   **author** (string): The author(s) of the book.
*   **coverImageUrl** (string): URL to the book's cover image.
*   **moduleIds** (array of string): List of IDs for modules belonging to this book.

### Module

A section or major division within a `Book`.

*   **id** (string): Unique identifier for the module.
*   **title** (string): The title of the module.
*   **chapterIds** (array of string): List of IDs for chapters belonging to this module.

### Chapter

A unit of educational content within a `Module`.

*   **id** (string): Unique identifier for the chapter.
*   **title** (string): The title of the chapter.
*   **fullLessonContent** (string): The complete lesson content, potentially in MDX or HTML format.
*   **summaryContent** (string): A concise summary of the full lesson content, potentially in MDX or HTML format.
*   **imageUrls** (array of string): List of URLs for images embedded within the chapter content.

### User

An authenticated user of the application.

*   **id** (string): Unique identifier for the user.
*   **email** (string): User's email address (unique).
*   **hashedPassword** (string): Hashed password for authentication (managed by backend).
*   **subscriptionTierId** (string): ID of the subscription tier the user is currently on.

### Subscription Tier

Defines the access levels and features available to a user.

*   **id** (string): Unique identifier for the subscription tier.
*   **name** (string): Name of the tier (e.g., "Free", "Standard", "Premium").
*   **features** (array of string): List of feature flags or descriptions indicating what this tier includes (e.g., "offline-access", "full-chapter-access", "chatbot-premium").

### Testimonial

User feedback and ratings for books.

*   **id** (string): Unique identifier for the testimonial.
*   **userId** (string): ID of the user who submitted the testimonial.
*   **bookId** (string): ID of the book the testimonial is for.
*   **rating** (integer): Rating given by the user (e.g., 1-5 stars).
*   **comment** (string): The user's written feedback.
*   **date** (string - ISO 8601): Date when the testimonial was submitted.
