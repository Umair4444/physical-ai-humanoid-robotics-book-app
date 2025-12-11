# Quickstart: Frontend Application Development Environment

**Branch**: `001-frontend-app` | **Date**: 2025-12-11 | **Plan**: specs/001-frontend-app/plan.md
**Objective**: Provide instructions to set up and run the Frontend Application locally.

## Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js**: v18.x or higher (LTS recommended)
*   **npm** or **Yarn**: npm v8.x+ or Yarn v1.x+
*   **Git**: For version control
*   **Text Editor**: Visual Studio Code or similar recommended

## Setup Instructions

1.  **Clone the Repository (if not already cloned):**
    ```bash
    git clone https://github.com/theum/physical-ai-humanoid-robotics-book-app.git
    cd physical-ai-humanoid-robotics-book-app
    ```

2.  **Checkout the Feature Branch:**
    Ensure you are on the correct feature branch for the frontend application development:
    ```bash
    git checkout 001-frontend-app
    ```

3.  **Navigate to the Frontend Directory:**
    The frontend application resides in the `frontend/` directory within the monorepo.
    ```bash
    cd frontend
    ```

4.  **Install Dependencies:**
    Install all required Node.js packages for the Docusaurus application.
    ```bash
    npm install
    # OR
    yarn install
    ```

5.  **Configure Environment Variables (Local Development):**
    The frontend application will interact with a backend. Create a `.env` file in the `frontend/` directory and populate it with necessary environment variables, typically based on `frontend/.env.example`.

    Example `frontend/.env`:
    ```
    # Example: Replace with actual backend API URL
    GATSBY_API_URL=http://localhost:8000/api
    # Add any other frontend specific environment variables here
    ```
    *(Note: This project uses Docusaurus, which might use `process.env` directly or specific Docusaurus config for environment variables.)*

6.  **Start the Development Server:**
    Once dependencies are installed and environment variables are set, you can start the Docusaurus development server.
    ```bash
    npm start
    # OR
    yarn start
    ```
    This will typically open the application in your browser at `http://localhost:3000` (or another port if configured).

## Important Notes

*   **Backend Dependency**: The frontend relies on the backend API for authentication, subscriptions, chatbot, and content retrieval. Ensure the backend services are running and accessible if you expect full functionality.
*   **Content**: Textbook content is sourced from the `/docs` directory at the monorepo root. Changes to content in `/docs` will be reflected in the Docusaurus build.
*   **Styling**: This project uses **Tailwind CSS with Shadcn UI**. Refer to their documentation for styling guidelines and component usage.
*   **State Management**: This project uses **Zustand** for client-side state management.
